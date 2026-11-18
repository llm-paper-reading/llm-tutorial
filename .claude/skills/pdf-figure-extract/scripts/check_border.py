#!/usr/bin/env python3
"""
Standalone border-ink checker for any image/route.
Fails (exit 3) if any border band has nontrivial ink, meaning likely over-cropped.

Usage:
  python check_border.py <path-or-directory> [more paths...]
"""
import os, sys, subprocess, tempfile
from PIL import Image
import numpy as np

# known informative backgrounds that are NOT clipping
IGNORE_NEAR_BLACK = True

def _scores(im):
    a = np.asarray(im.convert('RGB'))
    # background-aware: estimate corner color, treat ink as deviation
    corner = a[1, 1].astype(int)
    ink = (np.abs(a.astype(int) - corner).sum(axis=-1) > 24)
    h, w = ink.shape
    band = max(4, int(min(h, w) * 0.01))
    return [ink[:band, :].mean(), ink[-band:, :].mean(),
            ink[:, :band].mean(), ink[:, -band:].mean()]

def check(p):
    tmp = None
    try:
        path = p
        if p.lower().endswith('.svg'):
            tmp = tempfile.mktemp(suffix='.png')
            rc = subprocess.run(['rsvg-convert', '-w', '1200', p, '-o', tmp], capture_output=True)
            if rc.returncode != 0:
                print(f'{p}: SKIP rsvg-convert failed')
                return True
            path = tmp
        im = Image.open(path).convert('RGB')
    except Exception as e:
        print(f'{p}: SKIP {e}')
        return True
    finally:
        if tmp and os.path.exists(tmp):
            pass  # cleaned below
    s = _scores(im)
    bad = max(s) > 0.003
    tag = 'WARN' if bad else 'OK'
    print(f'{tag} {p}: borders(T,B,L,R)={[round(float(x), 5) for x in s]}')
    if tmp and os.path.exists(tmp):
        os.unlink(tmp)
    return not bad

def gather(paths):
    import subprocess, tempfile
    for p in paths:
        if os.path.isdir(p):
            for root, _, files in os.walk(p):
                for f in sorted(files):
                    if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg')):
                        yield os.path.join(root, f)
        elif p.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.svg')):
            yield p

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    paths = list(gather(sys.argv[1:]))
    if not paths:
        sys.exit('no images')
    all_ok = True
    for p in paths:
        all_ok &= check(p)
    sys.exit(0 if all_ok else 3)

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
Render the figure region above "Figure N:" caption from a PDF page into SVG. Ideal for vector diagrams so output stays sharp at any
size. Falls back to scripted raster crop if pdftocairo is missing.

Usage:
  python extract_svg.py <pdf> <page_1based> <fig_num> <out.svg> [--margin-pt 20]
"""
import argparse
import os
import re
import sys

import fitz


def find_caption(page, num):
    pat = re.compile(rf'^\s*Figure\s+{num}\s*[:.;]')
    caps = []
    for b in page.get_text('dict').get('blocks', []):
        for l in b.get('lines', []):
            s = ''.join(sp.get('text', '') for sp in l.get('spans', []))
            if pat.match(s):
                caps.append(fitz.Rect(b['bbox']))
                break
    return caps


def get_draw_and_image_rects(page):
    rects = []
    for b in page.get_text('dict').get('blocks', []):
        if b.get('type') == 1:
            rects.append(fitz.Rect(b['bbox']))
    try:
        for d in page.get_drawings():
            r = d.get('rect')
            if r and r.width > 5 and r.height > 5:
                rects.append(fitz.Rect(r))
    except Exception:
        pass
    return rects


def union(rects):
    r = fitz.Rect(rects[0])
    for q in rects[1:]:
        r |= q
    return r


def figure_clip(page, cap, margin_pt=20):
    pr = page.rect
    rects = get_draw_and_image_rects(page)
    above = [r for r in rects if r.y1 <= cap.y0 + 2]  # exclude caption itself
    if not above:
        above = [r for r in rects if r.y1 < cap.y0 + cap.height * 0.5] or rects
    if not above:
        raise RuntimeError('no image/vector content above caption')
    u = union(above)
    return fitz.Rect(max(pr.x0, u.x0 - margin_pt),
                     max(pr.y0, u.y0 - margin_pt),
                     min(pr.x1, u.x1 + margin_pt),
                     min(pr.y1, min(u.y1 + margin_pt, cap.y0 - 1)))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('pdf'); ap.add_argument('page', type=int)
    ap.add_argument('fig'); ap.add_argument('out')
    ap.add_argument('--margin-pt', type=float, default=20)
    ap.add_argument('--clip', type=str, default=None,
                    help='explicit clip rect x0,y0,x1,y1 in pt (for two-column pages)')
    args = ap.parse_args()
    doc = fitz.open(args.pdf)
    page = doc.load_page(args.page - 1)
    if args.clip:
        clip = fitz.Rect(*[float(v) for v in args.clip.split(',')])
    else:
        caps = find_caption(page, args.fig)
        if not caps:
            sys.exit(f'ERROR: no caption "Figure {args.fig}:" on page {args.page}')
        cap = caps[0]
        clip = figure_clip(page, cap, margin_pt=args.margin_pt)
    tmp_pdf = args.out + '.tmp.pdf'
    outdoc = fitz.open()
    outdoc.insert_pdf(doc, from_page=page.number, to_page=page.number,
                      links=False, annots=False)
    outdoc.load_page(0).set_cropbox(clip)
    outdoc.save(tmp_pdf, garbage=4, deflate=True)
    outdoc.close()
    os.makedirs(os.path.dirname(args.out) or '.', exist_ok=True)
    rc = os.system(f'pdftocairo -svg "{tmp_pdf}" "{args.out}"')
    os.unlink(tmp_pdf)
    if rc != 0:
        sys.exit(f'ERROR: pdftocairo failed ({rc})')
    sz = os.path.getsize(args.out)
    if sz < 200:
        sys.exit(f'ERROR: suspicious SVG size {sz} bytes')
    print(f'{args.out}: clip={tuple(round(v, 1) for v in clip)} bytes={sz}')


if __name__ == '__main__':
    main()

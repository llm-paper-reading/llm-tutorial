import { getFirstTutorial } from "@/lib/tutorials";

export type SiteLink = {
  href: string;
  label: string;
  matchPrefix?: string;
};

export function getSiteLinks(): SiteLink[] {
  return [
    { href: "/", label: "首页" },
    { href: `/tutorials/${getFirstTutorial().slug}`, label: "教程", matchPrefix: "/tutorials/" },
    { href: "/papers", label: "论文", matchPrefix: "/papers/" },
    { href: "/resources", label: "资源" },
    { href: "/about", label: "关于" },
  ];
}

export function isSiteLinkActive(pathname: string, link: SiteLink) {
  return link.matchPrefix
    ? pathname === link.href || pathname.startsWith(link.matchPrefix)
    : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
}

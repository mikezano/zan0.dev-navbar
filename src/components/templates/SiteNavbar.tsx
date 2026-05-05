import type { NavLinkDef } from "../atoms/NavLink";
import { Navbar } from "../organisms/Navbar";

/** Default links for this app's MFE topology. */
const SITE_LINKS: NavLinkDef[] = [
  { to: "/", label: "Home", end: true },
  { to: "/converters", label: "Converters" },
  { to: "/qa-automation", label: "QA Automation" },
  { to: "/dupligrid", label: "Dupligrid" },
  { to: "/zano-press", label: "Zano Press" },
];

export interface SiteNavbarProps {
  title?: string;
  logoSrc?: string;
  /** Override the default site links if needed. */
  links?: NavLinkDef[];
}

/**
 * SiteNavbar — the concrete top-level navbar for this application.
 * Bakes in the site's route structure and is exposed as the
 * Module Federation remote: navbar/Navbar
 */
export default function SiteNavbar({
  title = "Zano",
  logoSrc,
  links = SITE_LINKS,
}: SiteNavbarProps) {
  return <Navbar title={title} logoSrc={logoSrc} links={links} />;
}

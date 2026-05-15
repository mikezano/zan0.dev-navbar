import type { NavLinkDef } from "../atoms/NavLink";
import { Navbar } from "../organisms/Navbar";

/** Default links for this app's MFE topology. */
const SITE_LINKS: NavLinkDef[] = [
  { to: "/dupligrid", label: "Dupligrid" },
  { to: "/css-is-awesome", label: "CSS is awesome" },
  { to: "/vocab", label: "Vocab" },
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

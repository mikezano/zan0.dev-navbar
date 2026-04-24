import type { NavLinkDef } from "../atoms/NavLink";
import { NavBrand } from "../molecules/NavBrand";
import { NavLinks } from "../molecules/NavLinks";
import "../../styles/organisms/Navbar.css";

export interface NavbarProps {
  title?: string;
  logoSrc?: string;
  links: NavLinkDef[];
}

export function Navbar({ title = "My App", logoSrc, links }: NavbarProps) {
  return (
    <nav className="organism-navbar" aria-label="site navigation">
      <NavBrand title={title} logoSrc={logoSrc} />
      <NavLinks links={links} />
    </nav>
  );
}

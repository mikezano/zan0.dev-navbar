import { NavLink } from "../atoms/NavLink";
import type { NavLinkDef } from "../atoms/NavLink";
import "../../styles/molecules/NavLinks.css";

interface NavLinksProps {
  links: NavLinkDef[];
}

export function NavLinks({ links }: NavLinksProps) {
  return (
    <ul className="molecule-nav-links">
      {links.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} label={link.label} end={link.end} />
        </li>
      ))}
    </ul>
  );
}

import type { NavLinkDef } from "../atoms/NavLink";
import { NavLink } from "../atoms/NavLink";
import styles from "./NavLinks.module.css";

interface NavLinksProps {
  links: NavLinkDef[];
}

export function NavLinks({ links }: NavLinksProps) {
  return (
    <ul className={styles.links}>
      {links.map((link) => (
        <li key={link.to}>
          <NavLink to={link.to} label={link.label} end={link.end} />
        </li>
      ))}
    </ul>
  );
}

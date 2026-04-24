import { NavLink as RouterNavLink } from "react-router-dom";
import "../../styles/atoms/NavLink.css";

export interface NavLinkDef {
  to: string;
  label: string;
  /** Use `end` on the "/" route so it only matches exactly. */
  end?: boolean;
}

type NavLinkProps = NavLinkDef;

export function NavLink({ to, label, end }: NavLinkProps) {
  return (
    <RouterNavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `atom-nav-link${isActive ? " atom-nav-link--active" : ""}`
      }
    >
      {label}
    </RouterNavLink>
  );
}

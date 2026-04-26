import "../styles/Navbar.css";

interface NavbarProps {
  title?: string;
  logoSrc?: string;
}

export default function Navbar({ title = "My App", logoSrc }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {logoSrc && <img src={logoSrc} alt="logo" className="navbar-logo" />}
        <span className="navbar-title">{title}</span>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/zano-press">Zano Press</a>
        </li>
        <li>
          <a href="/beadel-juice">Beadel Juice</a>
        </li>
        <li>
          <a href="/converters">Converters</a>
        </li>
      </ul>
    </nav>
  );
}

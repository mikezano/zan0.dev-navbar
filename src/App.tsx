import { BrowserRouter, useInRouterContext } from "react-router-dom";
import "./App.css";
import SiteNavbar from "./components/templates/SiteNavbar";

/**
 * Standalone dev shell — wraps NavbarApp with a BrowserRouter so NavLinks
 * work when running this MFE directly (npm run dev).
 * When consumed by the root shell, NavbarApp is mounted directly
 * without this wrapper.
 */
function App() {
  const isInsideRouter = useInRouterContext();
  return isInsideRouter ? (
    <NavbarApp />
  ) : (
    <BrowserRouter>
      <NavbarApp />
    </BrowserRouter>
  );
}

function NavbarApp() {
  return (
    <>
      <SiteNavbar title="Zano (dev)" />
      <main style={{ padding: "2rem", color: "#fff", opacity: 0.6 }}>
        <p>Navbar MFE — standalone dev view at port 3001</p>
      </main>
    </>
  );
}

export default App;

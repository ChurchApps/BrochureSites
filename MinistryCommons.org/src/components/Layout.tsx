import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname, hash } = useLocation();
  const home = pathname === "/";

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <header className="masthead">
        <div className="container">
          <Link className="wordmark" to="/">
            <img className="logo" src="/logo.svg" alt="" width={34} height={34} /> Ministry Commons
          </Link>
          <nav>
            <Link to="/#licenses" aria-current={home ? undefined : "page"}>Licenses</Link>
            <Link to="/#choose">Choose</Link>
            <Link to="/#apply">Apply</Link>
            <Link to="/#faq">FAQ</Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer>
        <div className="container">
          <p className="fleuron" aria-hidden="true">❦</p>
          {home ? (
            <>
              <p>Ministry Commons 1.0 is a draft. It is not legal advice; have a lawyer review before relying on it.</p>
              <p>Deeds are plain-language summaries of, and not substitutes for, the legal codes.</p>
            </>
          ) : (
            <p>Ministry Commons 1.0 is a draft. It is not legal advice.</p>
          )}
          <p className="domain">ministrycommons.org</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;

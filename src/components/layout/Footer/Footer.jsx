// src/components/layout/Footer/Footer.jsx
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__name">The Established Legacy</span>
        <nav className="site-footer__links" aria-label="Footer">
          <NavLink to="/" className="site-footer__link">Home</NavLink>
          <NavLink to="/resources" className="site-footer__link">Resources</NavLink>
          <NavLink to="/sellability-score" className="site-footer__link">Sellability Score</NavLink>
          <NavLink to="/about" className="site-footer__link">About</NavLink>
        </nav>
        <span className="site-footer__copyright">&copy; {year} The Established Legacy. All rights reserved.</span>
      </div>
    </footer>
  );
}

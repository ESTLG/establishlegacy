// src/components/layout/Header/Header.jsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Wordmark from "../../../assets/Wordmark_Navy.jpg";
import "./Header.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/resources", label: "Resources" },
  { to: "/sellability-score", label: "Sellability Score" },
  { to: "/about", label: "About" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="site-header__logo" onClick={() => setMenuOpen(false)}>
          <img src={Wordmark} alt="The Established Legacy" />
        </NavLink>

        <nav
          className={`site-header__nav ${menuOpen ? "site-header__nav--open" : ""}`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `site-header__link ${isActive ? "site-header__link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <NavLink to="/sellability-score" className="site-header__cta">
            Take the Assessment
          </NavLink>
          <button
            type="button"
            className="site-header__menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

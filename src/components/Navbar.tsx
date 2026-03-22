"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="portfolio-nav">
      <div
        className={`portfolio-nav__pill ${isScrolled ? "portfolio-nav__pill--scrolled" : ""}`}
      >
        <Link
          href="/"
          className="portfolio-nav__brand"
          onClick={() => setIsOpen(false)}
          aria-label="Rishit Ghosh Home"
        >
          <svg className="portfolio-nav__brand-mark" viewBox="0 0 82 52" role="img" aria-hidden="true">
            <path
              className="portfolio-nav__brand-stroke"
              d="M10 42V10H27C33.5 10 38 14.1 38 20C38 25.9 33.5 30 27 30H10M24 30L37 42"
            />
            <path
              className="portfolio-nav__brand-stroke"
              d="M72 19.5C69.7 13.8 64.4 10 57.8 10C48.5 10 41.6 16.9 41.6 26C41.6 35.1 48.5 42 57.8 42C63.4 42 68 39.7 71.2 35.8V29.6H60.2"
            />
          </svg>
        </Link>

        <div className="portfolio-nav__links" aria-label="Primary">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`portfolio-nav__link ${router.pathname === item.href ? "portfolio-nav__link--active" : ""}`.trim()}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="portfolio-nav__actions">
          <DarkModeToggle className="portfolio-nav__theme" />
        </div>

        <div className="portfolio-nav__mobile-actions">
          <DarkModeToggle />
          <button
            type="button"
            className="portfolio-nav__menu-button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="portfolio-nav__mobile-menu">
          <Link
            href="/"
            className={`portfolio-nav__mobile-link ${router.pathname === "/" ? "portfolio-nav__mobile-link--active" : ""}`.trim()}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`portfolio-nav__mobile-link ${router.pathname === item.href ? "portfolio-nav__mobile-link--active" : ""}`.trim()}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import mainLogo from "../../../public/img/main-logo.png";
import sunIcon from "../../../public/img/sun.png";
import moonIcon from "../../../public/img/moon.png";
import PrimaryBtn from "../global/PrimaryBtn";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Services" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact Us", extraClass: "text-[16px]" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("dark");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const mobileButtonRef = useRef(null);
  const panelRef = useRef(null);

  // Theme load (same logic you had)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Open mobile menu
  const openMobileMenu = () => setIsMobileOpen(true);
  // Close mobile menu and return focus to hamburger button
  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    // return focus to the hamburger button for accessibility
    const button = mobileButtonRef.current as HTMLButtonElement | null;
    if (button) button.focus();
  };

  // Escape key to close + lock scroll while open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        closeMobileMenu();
      }
    };

    // lock scroll on <html> while menu open
    if (isMobileOpen) {
      // prevent background scroll
      document.documentElement.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
      // focus first focusable element in panel (if present)
      const firstFocusable = (panelRef.current as HTMLElement | null)?.querySelector<HTMLElement>("a,button");
      if (firstFocusable) firstFocusable.focus();
    } else {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }

    // cleanup on unmount
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="z-50 fixed m-0 mx-auto px-0 w-full">
        <div className="wrapper">
          <nav className="nav-wrapper flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src={mainLogo}
                alt="logo image"
                width={1000}
                height={1000}
                className="w-[80px] md:w-[100px] h-auto"
              />
            </div>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-[28px] mr-[-85px]">
              <div className="nav-container">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-medium text-gray-300 hover:text-[#0939d6] duration-200 nav-link ${link.extraClass || ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <PrimaryBtn text="Get Started"/>

              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="theme-toggle-button cursor-pointer"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Image
                    src={sunIcon}
                    alt="Light mode"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    src={moonIcon}
                    alt="Dark mode"
                    width={24}
                    height={24}
                  />
                )}
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              id="mobile-menu-button"
              ref={mobileButtonRef}
              className="mobile-menu-button lg:hidden"
              onClick={() => (isMobileOpen ? closeMobileMenu() : openMobileMenu())}
              aria-controls="mobile-menu-panel"
              aria-expanded={isMobileOpen}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                // X icon when open
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger when closed
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay - only render when open */}
      {isMobileOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 flex"
          aria-hidden={!isMobileOpen ? "true" : "false"}
        >
          {/* backdrop */}
          <div
            className="mobile-menu-backdrop fixed inset-0 bg-black/50"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* panel */}
          <div
            id="mobile-menu-panel"
            ref={panelRef}
            className="mobile-menu-panel relative z-10 w-full max-w-xs bg-white dark:bg-slate-900 shadow-xl p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-title"
          >
            <div className="mobile-menu-header flex items-center justify-between mb-4">
              <h2 id="mobile-menu-title" className="mobile-menu-title text-lg font-semibold">
                Menu
              </h2>
              <div>
                <button
                  id="mobile-menu-close"
                  className="mobile-menu-close"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <nav className="mobile-menu-nav">
              <ul className="mobile-menu-list space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="mobile-menu-link block text-base font-medium text-slate-700 dark:text-slate-200"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mobile-menu-cta mt-6">
                <button className="btn-primary w-full" onClick={closeMobileMenu}>
                  Get Started
                  <FaArrowRight />
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import mainLogo from "../../../public/img/main-logo.png";
import moonIcon from "../../../public/img/moon.png";
import sunIcon from "../../../public/img/sun.png";
import PrimaryBtn from "../global/PrimaryBtn";

const navLinks = [
    {href: "#", label: "Home"},
    {href: "#", label: "About Us"},
    {href: "#", label: "Services"},
    {href: "#", label: "Projects"},
    {href: "#", label: "Pricing"},
    {href: "#", label: "Blog"},
    {href: "#", label: "Contact Us", extraClass: "text-[16px]"},
];

export default function Navbar() {
    const [theme, setTheme] = useState("dark");
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            const firstFocusable = (
                panelRef.current as HTMLElement | null
            )?.querySelector<HTMLElement>("a,button");
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
            <header
                className={`z-50 fixed m-0 mx-auto px-0 w-full transition-all duration-300 ease-in-out ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
                <div className="wrapper">
                    <nav className="flex justify-between items-center nav-wrapper">
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
                                        className={`font-medium text-gray-300 hover:text-[#0939d6] duration-200 nav-link ${
                                            link.extraClass || ""
                                        }`}
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
                                className="cursor-pointer theme-toggle-button"
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
                            className="lg:hidden mobile-menu-button"
                            onClick={() =>
                                isMobileOpen ? closeMobileMenu() : openMobileMenu()
                            }
                            aria-controls="mobile-menu-panel"
                            aria-expanded={isMobileOpen}
                            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                        >
                            {isMobileOpen ? (
                                // X icon when open
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                // Hamburger when closed
                                <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
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
                    className="z-50 fixed inset-0 flex"
                    aria-hidden={!isMobileOpen ? "true" : "false"}
                >
                    {/* backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 mobile-menu-backdrop"
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />

                    {/* panel */}
                    <div
                        id="mobile-menu-panel"
                        ref={panelRef}
                        className="z-10 relative bg-white dark:bg-slate-900 shadow-xl p-6 w-full max-w-1/2 overflow-y-auto mobile-menu-panel"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="mobile-menu-title"
                    >
                        <div className="flex justify-between items-center mb-4 mobile-menu-header">
                            <h2
                                id="mobile-menu-title"
                                className="font-semibold text-lg mobile-menu-title"
                            >
                                Menu
                            </h2>
                            <div>
                                <button
                                    id="mobile-menu-close"
                                    className="mobile-menu-close"
                                    onClick={closeMobileMenu}
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <nav className="flex flex-col justify-between h-full mobile-menu-nav">
                            <ul className="space-y-3 mobile-menu-list">
                                {navLinks.map((link) => (
                                    <li className="mb-0" key={link.label}>
                                        <a
                                            href={link.href}
                                            className="block py-3 border-slate-100 dark:border-slate-800 border-b font-medium text-slate-700 dark:text-slate-200 text-base mobile-menu-link"
                                            onClick={closeMobileMenu}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 mobile-menu-cta">
                                <button
                                    className="w-full cursor-pointer btn-primary get-started-btn"
                                    onClick={closeMobileMenu}
                                >
                                    Get Started
                                    <FaArrowRight/>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}

import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <section className="hero-section">
      <header className="z-50 relative m-0 mx-auto px-0 w-full">
        <div className="wrapper">
          <nav className="nav-wrapper">
            <div className="flex items-center">
              <Image
                src=""
                alt="logo image"
                width="1000"
                height="1000"
                className="w-[80px] md:w-[100px] h-auto"
              />
            </div>

            <div className="hidden lg:flex items-center gap-[28px] mr-[-85px]">
              <div className="nav-container"></div>
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button className="btn-primary">
                Get Started
                <i className="fa-arrow-right fa-solid"></i>
              </button>

              <button
                id="theme-toggle"
                className="theme-toggle-button"
                aria-label="Toggle theme"
              >
                <Image
                  id="theme-toggle-light-icon"
                  className="theme-toggle-icon"
                  src=""
                  alt="Light mode"
                />

                <Image
                  id="theme-toggle-dark-icon"
                  className="theme-toggle-icon"
                  src=""
                  alt="Dark mode"
                />
              </button>
            </div>

            <button id="mobile-menu-button" className="mobile-menu-button">
              <svg
                className="w-[24px] h-[24px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </header>

      <div id="mobile-menu-overlay" className="mobile-menu-overlay">
        <div className="mobile-menu-backdrop"></div>
        <div id="mobile-menu-panel" className="mobile-menu-panel">
          <div className="mobile-menu-header">
            <h2 className="mobile-menu-title">Menu</h2>
            <div>
              <button id="mobile-menu-close" className="mobile-menu-close">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              <li>
                <a href="#" className="mobile-menu-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu-link">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mobile-menu-cta">
              <button className="btn-primary w-full">
                Get Started
                <i className="fa-arrow-right fa-solid"></i>
              </button>
            </div>
          </nav>
        </div>
      </div>

      <div className="hero-content-wrapper wrapper">
        <div className="hidden lg:block">
          <Image
            src=""
            alt=""
            className="hero-floating-tag-left"
          />
          <Image
            src=""
            alt=""
            className="hero-floating-tag-right"
          />
        </div>
        <div className="flex flex-col items-center gap-[20px] mx-auto">
          <div className="hero-badge-container">
            <h2>Best Digital Agency</h2>
          </div>

          <div className="mx-auto max-w-[959px] text-center">
            <h1 className="hero-title">
              Transform Your Business with Innovative Digital Solutions
            </h1>

            <p className="hero-description">
              Unlock the full potential of your brand with innovative digital
              solutions that drive growth. From custom web and app design to
              strategic branding, we help businesses thrive in the digital age.
            </p>

            <div className="hero-cta-container">
              <button className="px-7 py-3 border border-[#FFFFFF1A] get-started-btn">
                Let’s Talk <i className="fa-arrow-right fa-solid"></i>
              </button>
              <button className="bg-gray-800/50 hover:bg-gray-800 backdrop-blur px-8 py-3.5 border border-gray-600 rounded-[100px] font-medium text-gray-300 hover:text-[#0939d6] text-[16px] duration-200">
                Get In Touch
              </button>
            </div>

            <div className="trusted-companies-container">
              <div className="trusted-companies-divider">
                <div className="border-Width"></div>
                <p className="trusted-companies-text">
                  Trusted by companies around the world
                </p>
                <div className="border-Width"></div>
              </div>
              <div className="trusted-companies-carousel">
                <div
                  className="trusted-companies-track"
                  id="trusted-companies-track"
                >
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>

                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                  <div className="trusted-company-item">
                    <Image src="" alt="Company logo" width={100} height={50} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
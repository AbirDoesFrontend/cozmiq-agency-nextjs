"use client";

import Image from "next/image";
import {NAV_ITEMS} from "@/constants/nav";
import Link from "next/link";
import PrimaryBtn from "@/components/global/PrimaryBtn";
import {useEffect, useState} from "react";

const logoSrc = "/img/images-v2/main-nav-logo.png";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (<header>
            <nav className={"fixed top-5 z-50 bg-transparent flex justify-center w-full"}>
                <div
                    className={`rounded-[100px] min-w-[840px] transition-all duration-300 ${
                        scrolled ? "navbar-bg-dark" : "navbar-bg-linear"
                    }`}>
                    <div>
                        <div
                            className="flex justify-between items-center py-[8px] px-[10px]">
                            <Image
                                className="w-[140px] h-auto object-contain"
                                alt="Cozmiq logo"
                                src={logoSrc}
                                width={1000}
                                height={1000}
                                priority
                            />

                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                                {NAV_ITEMS.map((item, index) => (<Link
                                        key={index}
                                        href={item.href}
                                        className="font-semibold text-white text-sm md:text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:opacity-80 transition-opacity"
                                    >
                                        {item.label}
                                    </Link>))}
                            </div>

                            <PrimaryBtn text={"Book a Call"} variant={"primary"}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>);
}

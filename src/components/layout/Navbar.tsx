"use client";

import Image from "next/image";
import {NAV_ITEMS} from "@/constants/nav";
import Link from "next/link";
import PrimaryBtn from "@/components/global/PrimaryBtn";

// Note: use public path (no import) if the image is in /public
const logoSrc = "/img/images-v2/main-nav-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav
                className="absolute z-[99999] w-full md:w-[837px] h-auto md:h-[67px] top-4 md:top-10 left-0 md:left-[297px] px-4 md:px-0">
                <div
                    className="navbar-bg-linear rounded-[100px]">
                    <div>
                        {/* Give this inner content a higher z-index so it's not hidden by the ::before overlay */}
                        <div
                            className="flex justify-between items-center p-[18px]">

                            <Image
                                className="w-[120px] md:w-[158px] h-[23px] md:h-[30px] object-contain"
                                alt="Cozmiq logo"
                                src={logoSrc}
                                width={158}
                                height={30}
                                priority
                            />

                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                                {NAV_ITEMS.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        className="font-semibold text-white text-sm md:text-base tracking-[0] leading-[19.2px] whitespace-nowrap hover:opacity-80 transition-opacity"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <PrimaryBtn text={"Book a Call"} variant={"primary"} />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

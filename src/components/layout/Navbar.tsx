"use client";

import Image from "next/image";
import {NAV_ITEMS} from "@/constants/nav";
import Link from "next/link";
import PrimaryBtn from "@/components/global/PrimaryBtn";

const logoSrc = "/img/images-v2/main-nav-logo.png";

export default function Navbar() {
    return (
        <header>
            <nav className={"fixed top-5 z-50 bg-transparent flex justify-center w-full"}>
                <div
                    className="navbar-bg-linear rounded-[100px] min-w-[840px]">
                    <div>
                        <div
                            className="flex justify-between items-center py-[8px] px-[10px]">

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

                            <PrimaryBtn text={"Book a Call"} variant={"primary"}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

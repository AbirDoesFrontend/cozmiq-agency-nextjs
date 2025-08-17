import React from "react";
import Link from "next/link";
import {FaArrowRight} from "react-icons/fa";

type SecondaryBtnProps = {
    text: string;
    href: string;
    arrow?: boolean;
};

const SecondaryBtn = (
    {
        text, href, arrow
    }: SecondaryBtnProps) => {
    return (
        <Link
            href={href}
            className={
                "group relative overflow-hidden inline-flex gap-2 items-center justify-center cursor-pointer " +
                "px-8 py-3.5 border border-gray-600 rounded-full font-medium text-[16px] " +
                "text-gray-300 bg-gray-800/50 backdrop-blur transition-transform duration-200 ease-out " +
                "hover:hover:scale-[1.02] hover:shadow-lg" +
                "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3273ff]/20 focus-visible:ring-offset-2 " +
                "motion-reduce:transition-none motion-reduce:transform-none"
            }
            aria-label={text}
        >
            {/* animated sheen (absolute layer) */}
            <span
                className={
                    "absolute inset-0 transform -translate-x-12 skew-x-12 bg-white/6 opacity-0 " +
                    "group-hover:opacity-100 group-hover:translate-x-12 transition-all duration-500 pointer-events-none blur-sm " +
                    "motion-reduce:transition-none"
                }
                aria-hidden="true"
            />
            {/* content (keeps on top) */}
            <span className="relative z-10">{text}</span>
            {
                arrow ? <FaArrowRight size={18}/> : null
            }
        </Link>
    );
};

export default SecondaryBtn;

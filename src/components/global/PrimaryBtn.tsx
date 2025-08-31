import React from "react";
import {ButtonProps} from "@/types/ui/button";
import Link from "next/link";

const variantStyles: Record<string, string> = {
    primary: "text-[16px] font-bold bg-white text-black py-[12px] px-[20px] rounded-[100px] transition-colors duration-200 ease-in-out hover:bg-[#012583] hover:text-white",
};

const PrimaryBtn = ({
                        variant = "primary", text, href
                    }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const variantClass = variantStyles[variant] ?? variantStyles.primary;

    return (<Link
        className={`${variantClass}`}
        href={href || "#"}
    >
        {text}
    </Link>);
};

export default PrimaryBtn;

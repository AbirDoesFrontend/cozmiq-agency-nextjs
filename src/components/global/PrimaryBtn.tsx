import React from "react";
import {ButtonProps} from "@/types/ui/button";
import Link from "next/link";

const variantStyles: Record<string, string> = {
    primary: "text-[16px] font-bold bg-white text-black py-[12px] px-[20px] rounded-[100px]",
    secondary: "text-[16px] font-bold bg-[rgba(1,37,131,0.24)] py-[12px] px-[20px] rounded-[100px] text-white border border-[rgba(255, 255, 255, 0.70)]",
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

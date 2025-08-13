"use client";

import React, { useEffect, useState } from "react";

interface BadgeSecondaryProps {
  alwaysDark?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function BadgeSecondary({
  alwaysDark = false,
  children,
  className = "",
  style = {},
}: BadgeSecondaryProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const theme = localStorage.getItem("theme");
      setIsDark(theme === "dark");
    } catch (e) {
      console.log(e)
    }
  }, []);

  const useDark = alwaysDark || isDark;
  const borderColor = useDark ? "1px solid rgba(255,255,255,0.25)" : "1px solid #D2D2D5";
  const textColor = useDark ? "#bdfb00" : "#0939D6";
  const defaultDotColor = useDark ? "#bdfb00" : "#0939D6";
  const dotColor = defaultDotColor;

  return (
    <span
      className={`inline-flex items-center rounded-full transition-all ${className}`}
      style={{ border: borderColor, background: "transparent", ...style }}
      role="status"
      aria-label={typeof children === "string" ? children : "badge"}
    >
      <span className="flex items-center" style={{ gap: "0.625rem", padding: "0.625rem 1rem", color: textColor }}>
        <span
          aria-hidden
          style={{
            width: "0.25rem",
            height: "0.25rem",
            borderRadius: 9999,
            background: dotColor,
            display: "inline-block",
            transition: "background 0.2s",
          }}
        />
        <span className="text-sm">{children}</span>
      </span>
    </span>
  );
}
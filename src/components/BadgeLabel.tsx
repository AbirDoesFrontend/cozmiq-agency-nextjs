// components/BadgeLabel.tsx
"use client";

import React, { forwardRef } from "react";

export interface BadgeLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** CSS color for the border (default: #4B5563) */
  borderColor?: string;
  /** CSS color for the dot (default: #ffffff) */
  dotColor?: string;
  /** size of the dot in px (default: 4) */
  dotSize?: number;
  /** gap between dot and content in rem (default: 0.625) */
  gapRem?: number;
  /** vertical padding in px (default: 10) */
  paddingY?: number;
  /** horizontal padding in px (default: 16) */
  paddingX?: number;
}

const BadgeLabel = forwardRef<HTMLDivElement, BadgeLabelProps>(function BadgeLabel(
  {
    children,
    borderColor = "#4B5563",
    dotColor = "#ffffff",
    dotSize = 4,
    gapRem = 0.625,
    paddingY = 10,
    paddingX = 16,
    className = "",
    style,
    ...rest
  },
  ref
) {
  const innerStyle: React.CSSProperties = {
    border: `1px solid ${borderColor}`,
    borderRadius: 9999,
    display: "inline-flex",
    alignItems: "center",
  };

  const contentStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: `${gapRem}rem`,
    padding: `${paddingY}px ${paddingX}px`,
  };

  const dotStyle: React.CSSProperties = {
    background: dotColor,
    width: `${dotSize}px`,
    height: `${dotSize}px`,
    borderRadius: 9999,
    flex: "0 0 auto",
  };

  return (
    <div
      ref={ref}
      className={`badge-wrapper ${className}`}
      style={{ ...style }}
      {...rest}
    >
      <div className="badge-inner" style={innerStyle}>
        <span className="badge-content" style={contentStyle}>
          <div className="badge-dot" style={dotStyle} />
          <span className="badge-slot">{children}</span>
        </span>
      </div>
    </div>
  );
});

export default BadgeLabel;

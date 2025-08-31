// components/BadgeLabel.tsx
"use client";

import React, { forwardRef } from "react";
import StarBorder from "./blocks/Animations/StarBorder/StarBorder";

export interface BadgeLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const BadgeLabel = forwardRef<HTMLDivElement, BadgeLabelProps>(
  function BadgeLabel(
    {
      children,
      className = "",
      style,
    },
    ref
  ) {

    return (
      <div ref={ref}>
        <StarBorder
          as="button"
          color="white"
          speed="5s"
          className={`badge-wrapper ${className}`}
          style={{ ...style }}
        >
          {children}
        </StarBorder>
      </div>
    );
  }
);

export default BadgeLabel;

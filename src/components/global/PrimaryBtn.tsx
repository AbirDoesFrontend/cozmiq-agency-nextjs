import React from "react";
import {ButtonProps} from "@/types/ui/button";

const PrimaryBtn = ({variant , text}: ButtonProps) => {

    const primaryVariant = variant === "primary";

  return (
    <button className={`primary-btn`}>
      {text}
    </button>
  );
};

export default PrimaryBtn;

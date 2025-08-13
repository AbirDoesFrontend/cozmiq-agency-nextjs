import React from "react";
import { FaArrowRight } from "react-icons/fa";

const PrimaryBtn = ({text}: { text: string }) => {
  return (
    <button className="btn-primary get-started-btn cursor-pointer">
      {text}
      <FaArrowRight />
    </button>
  );
};

export default PrimaryBtn;

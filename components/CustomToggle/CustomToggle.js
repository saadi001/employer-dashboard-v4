"use client";
import { useState } from "react";
import "./CustomToggle.css";

const CustomToggle = ({ label }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="checkbox-wrapper-51 flex items-center gap-3 ">
      <input type="checkbox" id="cbx-51" />
      <label htmlFor="cbx-51" className="toggle">
        <span>
          <svg width="10px" height="10px" viewBox="0 0 10 10">
            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
          </svg>
        </span>
      </label>
      <label
        htmlFor="cbx-51"
        className="text-sm text-headerColor font-semibold cursor-pointer"
      >
        {label}
      </label>
    </div>
  );
};

export default CustomToggle;

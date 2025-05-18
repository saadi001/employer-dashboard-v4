"use client";
import { useState } from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ id, label }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="checkbox-wrapper-4">
      <input
        className="inp-cbx"
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label className="cbx" htmlFor={id}>
        <span>
          <svg width="12px" height="10px">
            <use xlinkHref="#check-4" />
          </svg>
        </span>
        <span className="text-sm text-headerColor">{label}</span>
      </label>

      {/* SVG Symbol must be globally available, preferably in _app.js or layout */}
      <svg className="inline-svg" style={{ display: "none" }}>
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1" />
        </symbol>
      </svg>
    </div>
  );
};

export default CustomCheckbox;

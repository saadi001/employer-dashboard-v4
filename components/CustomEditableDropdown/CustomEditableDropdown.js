"use client";
import { ArrowDown01Icon } from "hugeicons-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const CustomEditableDropdown = ({
  options,
  label,
  placeholder,
  categoryValue,
  disabled,
  isLoading,
  dummyData,
  value,
  onChange,
  defaultValue,
  required,
}) => {
  const searchQuery = value || "";
  const [isOpen, setIsOpen] = useState(false); // control dropdown visibility
  const dropdownRef = useRef(null); // reference for clicking outside
  // Handle option selection
  const handleOptionClick = (option) => {
    // setSearchQuery(option); // set search query to selected option
    onChange(option);
    setIsOpen(false); // close the dropdown
  };

  // Handle search input change and open dropdown
  const handleSearchChange = (e) => {
    // setSearchQuery(e.target.value);
    onChange(e.target.value);
    setIsOpen(true);
  };

  // Filter options based on search query
  const filteredOptions = options?.filter((option) => {
    const optionValue = categoryValue
      ? option?.categoryName
      : option?.name || option; // handle categoryName or name for filtering
    return optionValue?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const filteredOptions2 = dummyData?.filter((option) => {
    const optionValue = categoryValue
      ? option?.categoryName
      : option?.name || option;
    return optionValue?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <p className="mb-1 text-sm font-medium text-primaryGreen">
        {label}
        {required && <span className="text-red-500">*</span>}
      </p>
      <div className="relative">
        <input
          type="text"
          value={searchQuery} // controlled input
          onChange={handleSearchChange} // update search query on input change
          onClick={() => setIsOpen(true)} // open dropdown when clicking on input
          defaultValue={defaultValue}
          placeholder={placeholder || "Select an option"}
          className="w-full pr-8  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
          disabled={disabled}
        />
        <span
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)} // toggle dropdown visibility
        >
          <ArrowDown01Icon size={18} className="text-gray-400" />
        </span>
      </div>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className={`absolute w-full ${
            filteredOptions?.length === 0 || filteredOptions2?.length === 0
              ? ""
              : "bg-white  "
          } rounded-md mt-1 max-h-48 overflow-y-auto z-10 p-1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`}
        >
          {isLoading ? (
            <li className="px-4 py-7 text-gray-500 flex items-center justify-center">
              <p>Loading data...</p> {/* Loading message */}
            </li>
          ) : filteredOptions?.length > 0 ? (
            filteredOptions?.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)} // set option when clicked
                className="px-4 py-2 text-sm rounded-md hover:bg-primaryColor/10 cursor-pointer"
              >
                {categoryValue ? option?.categoryName : option?.name || option}{" "}
                {/* Render categoryName or name depending on categoryValue */}
              </li>
            ))
          ) : filteredOptions2?.length > 0 ? (
            filteredOptions2?.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)} // set option when clicked
                className="px-2 md:px-4 py-2 text-xs md:text-base hover:bg-gray-100 cursor-pointer"
              >
                {categoryValue ? option?.categoryName : option?.name || option}{" "}
              </li>
            ))
          ) : (
            // <li className="px-4 py-7 text-gray-500 flex items-center justify-center">
            //   <p>No data found..</p> {/* No data message */}
            // </li>
            <></>
          )}
        </motion.ul>
      )}
    </div>
  );
};

export default CustomEditableDropdown;

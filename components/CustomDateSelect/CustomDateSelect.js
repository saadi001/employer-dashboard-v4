"use client";
import { format } from "date-fns";
import { Calendar03Icon } from "hugeicons-react";
import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const CustomDateSelect = ({ content, className, field, disablePrevious }) => {
  const [open, setOpen] = useState(false);
  // const onSelect = (value) => {
  //   console.log(value);
  //   setOpen(false);
  // };
  return (
    <>
      <Popover className={""} open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            className={`border text-sm flex items-center justify-between gap-2 min-w-48 text-textColor px-3 py-3 rounded-lg hover:bg-gray-100/50 hover:border-gray-600 transition-all focus:border-gray-600 ${className}`}
          >
            {field.value ? (
              format(field.value, "PPP")
            ) : content ? (
              <span>{content}</span>
            ) : (
              <span>Select Date</span>
            )}
            {/* {content ? content : "Select Date"} */}
            {<Calendar03Icon size={20} strokeWidth={2} />}
          </button>
        </PopoverTrigger>
        <PopoverContent
          className={"p-0 w-auto overflow-hidden"}
          align={"center"}
        >
          <Calendar
            mode={"single"}
            selected={field?.value}
            onSelect={(date) => {
              field?.onChange(date);
              setOpen(false);
            }}
            captionLayout="dropdown"
            // {disablePrevious && disable}
            disabled={(date) =>
              date < new Date("1900-01-01") ||
              date < new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CustomDateSelect;

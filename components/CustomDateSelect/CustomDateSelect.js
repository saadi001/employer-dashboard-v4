import { Calendar03Icon } from "hugeicons-react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const CustomDateSelect = ({ content, className }) => {
  return (
    <>
      <Popover className={""}>
        <PopoverTrigger asChild>
          <button
            className={`border text-sm flex items-center justify-between gap-2 min-w-48 text-textColor px-3 py-3 rounded-lg hover:bg-gray-100/50 hover:border-gray-600 transition-all focus:border-gray-600 ${className}`}
          >
            {content ? content : "Select Date"}{" "}
            <Calendar03Icon size={20} strokeWidth={2} />
          </button>
        </PopoverTrigger>
        <PopoverContent className={"p-0 w-auto"} align={"center"}>
          <Calendar mode="single" initialFocus />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CustomDateSelect;

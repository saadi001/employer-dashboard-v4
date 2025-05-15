"use client";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { ViewIcon } from "hugeicons-react";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ApplicantMenuDropdown = ({ setSeeDetails }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          className={`p-1.5 hover:bg-gray-100 h-fit rounded-full cursor-pointer ${
            open && "bg-gray-100"
          } focus:right-0 focus:outline-0`}
        >
          <EllipsisVertical size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"}>
        <DropdownMenuItem
          onClick={() => setSeeDetails(true)}
          className={"cursor-pointer"}
        >
          <ViewIcon /> View Details
        </DropdownMenuItem>
        <DropdownMenuArrow className="fill-primaryColor" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicantMenuDropdown;

import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { ListFilter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const ApplicantFilterDropdown = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="border text-sm flex items-center gap-2  text-textColor px-3 py-2.5 rounded-lg hover:bg-gray-100/50  transition-all cursor-pointer ">
          <ListFilter size={20} /> Filter
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={"min-w-40"}>
        <DropdownMenuItem>Experience</DropdownMenuItem>
        <DropdownMenuItem>Age</DropdownMenuItem>
        <DropdownMenuArrow className=" !fill-primaryColor" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ApplicantFilterDropdown;

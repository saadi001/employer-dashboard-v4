import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import {
  Agreement02Icon,
  UserCheck01Icon,
  UserStoryIcon,
} from "hugeicons-react";
import { ArrowDownToLine } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const DownloadApplicantCV = () => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button className="border border-primaryColor hover:border-primaryHover text-sm flex items-center gap-1.5 text-gray-50 font-semibold px-3 py-2.5   rounded-lg hover:bg-primaryHover  transition-all bg-primaryColor ">
          <ArrowDownToLine size={20} /> Download
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={"end"} className={"min-w-40"}>
        <DropdownMenuLabel>Download cv/resume</DropdownMenuLabel>
        <DropdownMenuItem className={"cursor-pointer"}>
          <UserStoryIcon size={16} strokeWidth={2} /> All applicants
        </DropdownMenuItem>
        <DropdownMenuItem className={"cursor-pointer"}>
          <UserCheck01Icon size={16} strokeWidth={2} /> Shortlisted
        </DropdownMenuItem>
        <DropdownMenuItem className={"cursor-pointer"}>
          <Agreement02Icon size={16} strokeWidth={2} /> Hired
        </DropdownMenuItem>
        <DropdownMenuArrow className="fill-primaryColor" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DownloadApplicantCV;

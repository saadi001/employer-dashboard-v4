import {
  Agreement02Icon,
  UserCheck01Icon,
  UserStoryIcon,
} from "hugeicons-react";
import { UserRoundX } from "lucide-react";

export const DashBoardJobTabData = [
  {
    label: "All",
    value: "all",
    total: 50,
    activeBackground: "bg-black",
    inActiveBackground: "bg-slate-200",
    inActiveText: "text-slate-500",
  },
  {
    label: "Live",
    value: "live",
    total: 10,
    activeBackground: "bg-emerald-500",
    inActiveBackground: "bg-emerald-100",
    inActiveText: "text-emerald-500",
  },
  {
    label: "Pending",
    value: "pending",
    total: 2,
    activeBackground: "bg-cyan-500",
    inActiveBackground: "bg-cyan-100",
    inActiveText: "text-cyan-500",
  },
  {
    label: "Expired",
    value: "expired",
    total: 30,
    activeBackground: "bg-yellow-500",
    inActiveBackground: "bg-yellow-100",
    inActiveText: "text-yellow-500",
  },
  {
    label: "Draft",
    value: "draft",
    total: 2,
    activeBackground: "bg-red-500",
    inActiveBackground: "bg-red-100",
    inActiveText: "text-red-500",
  },
  //   {
  //     label: "Number Off",
  //     value: "number Off",
  //     total: meta?.totalNumberOff,
  //     activeBackground: "bg-purple-500",
  //     inActiveBackground: "bg-purple-100",
  //     inActiveText: "text-purple-500",
  //   },
  //   {
  //     label: "Subscribed",
  //     value: "subscribed",
  //     total: meta?.totalSubscriptions,
  //     activeBackground: "bg-lime-500",
  //     inActiveBackground: "bg-lime-100",
  //     inActiveText: "text-lime-500",
  //   },
  //   {
  //     label: "Not-Subscribed",
  //     value: "not-subscribed",
  //     total: meta?.total - meta?.totalSubscriptions,
  //     activeBackground: "bg-[#8E33FF]",
  //     inActiveBackground: "bg-[#EFD6FF]",
  //     inActiveText: "text-[#8E33FF]",
  //   },
];

export const jobDetailsTab = [
  {
    label: "Applicants",
    value: "all",
    icon: <UserStoryIcon size={16} strokeWidth={2} />,
    borderColor: "bg-primaryColor",
    total: 50,
    bracket: true,
    // activeBackground: "bg-black",
    // inActiveBackground: "bg-slate-200",
    // inActiveText: "text-slate-500",
  },
  {
    label: "Shortlisted",
    value: "shortlisted",
    icon: <UserCheck01Icon size={16} strokeWidth={2} />,
    borderColor: "bg-secondaryColor",
    total: 10,
    bracket: true,
    // activeBackground: "bg-emerald-500",
    // inActiveBackground: "bg-emerald-100",
    // inActiveText: "text-emerald-500",
  },
  {
    label: "Hired",
    value: "hired",
    icon: <Agreement02Icon size={16} strokeWidth={2} />,
    total: 2,
    bracket: true,
    // activeBackground: "bg-cyan-500",
    // inActiveBackground: "bg-cyan-100",
    // inActiveText: "text-cyan-500",
  },
  {
    label: "Rejected",
    value: "Rejected",
    icon: <UserRoundX size={16} strokeWidth={2} />,
    total: 0,
    bracket: true,
    // activeBackground: "bg-yellow-500",
    // inActiveBackground: "bg-yellow-100",
    // inActiveText: "text-yellow-500",
  },
];

export const applicantCardData = [
  {
    status: "shortlisted",
  },
  {
    status: "rejected",
  },
  {
    status: "shortlisted",
  },
];

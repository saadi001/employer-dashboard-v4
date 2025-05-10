"use client";
import { DashboardSquare02Icon } from "hugeicons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({ name, icon, link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`px-3 ${
        pathname === link
          ? "bg-primaryColor/10 hover:bg-primaryColor/20 text-primaryColor"
          : ""
      } hover:bg-gray-100 py-3 rounded-md flex items-center gap-2.5 w-full`}
    >
      <DashboardSquare02Icon
        size={16}
        strokeWidth={2}
        className="text-textColor"
      />
      <span
        className={`text-sm ${
          pathname === link ? "font-semibold" : "font-medium"
        } `}
      >
        {name}
      </span>
    </Link>
  );
};

export default Menu;

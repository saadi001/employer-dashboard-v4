"use client";

import LordIconPlayer from "@/lib/LordIconPlayer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({ name, icon, link, target = "a", trigger = "hover" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`px-3 ${
        pathname === link
          ? "bg-primaryColor/10 hover:bg-primaryColor/20 text-primaryColor"
          : "text-textColor"
      } hover:bg-gray-100 py-2.5 rounded-md flex items-center gap-2.5 w-full`}
    >
      {/* <DashboardSquare02Icon
        size={16}
        strokeWidth={2}
        className="text-textColor"
      /> */}
      <LordIconPlayer
        link={icon}
        trigger={trigger}
        target={target}
        color={pathname === link ? "#00a76f" : "#637381"}
      />
      <span
        className={`text-sm  ${
          pathname === link ? "font-semibold" : "font-medium"
        } `}
      >
        {name}
      </span>
    </Link>
  );
};

export default Menu;

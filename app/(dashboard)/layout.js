import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import logo from "../assets/logo/logo.png";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-[300px] flex-shrink-0 flex flex-col text-textColor border-r">
        {/* Top: Logo */}
        <div className="px-6 py-5 relative">
          <Image src={logo} alt="logo" className="w-20" />
          <div className="border rounded-full bg-white absolute top-1/2 -translate-y-1/2  -right-3 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-slate-100">
            <ChevronLeft size={16} className="text-slate-600" />
          </div>
        </div>

        {/* Middle: Scrollable Menu */}
        <ScrollArea scrollHideDelay={400}>
          <nav className="flex-1  space-y-2  px-5 py-2">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="p-2 hover:bg-gray-700 rounded cursor-pointer"
              >
                Menu Item {i + 1}
              </div>
            ))}
          </nav>
        </ScrollArea>

        {/* Bottom: Logout */}
        <div className="p-4 border-t border-gray-700">
          <button className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded text-sm">
            Logout
          </button>
        </div>
      </aside>
      <>{children}</>
    </div>
  );
};

export default DashboardLayout;

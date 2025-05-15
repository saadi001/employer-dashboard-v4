import { CheckmarkCircle01Icon } from "hugeicons-react";
import { CircleX } from "lucide-react";

const DrawerFooter = () => {
  return (
    <div className="border-t border-dashed border-gray-300 pt-2 flex justify-between items-center ">
      <button className="px-3 bg-primaryColor py-2 text-sm text-zinc-50 rounded-md">
        Download
      </button>
      {/* shortlist/reject  */}
      <div className="text-headerColor flex items-center gap-1">
        {status === "shortlisted" ? (
          <div className="flex items-center gap-1 text-sm bg-green-600 text-gray-50 px-2 py-0.5 rounded-full">
            <CheckmarkCircle01Icon size={16} className="" /> shortlisted
          </div>
        ) : (
          <div className="px-1.5 py-1 hover:bg-primaryBackground/70 rounded-md cursor-pointer ">
            <CheckmarkCircle01Icon size={20} className="text-primaryColor" />
          </div>
        )}

        {status === "rejected" ? (
          <div className="flex items-center gap-1 text-sm bg-red-500 text-gray-50 px-2 py-0.5 rounded-full">
            <CircleX size={16} className="" /> rejected
          </div>
        ) : (
          <div className=" px-1.5 py-1 hover:bg-red-500/10 rounded-md cursor-pointer">
            <CircleX size={20} className="text-red-500" strokeWidth={1.7} />
          </div>
        )}

        {/* {
            <div className=" px-1.5 py-1 hover:bg-red-500/10 rounded-md cursor-pointer">
              <CircleX size={20} className="text-red-500" strokeWidth={1.7} />
            </div>
          } */}
      </div>
    </div>
  );
};

export default DrawerFooter;

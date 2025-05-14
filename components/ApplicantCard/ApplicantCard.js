import {
  Building03Icon,
  CancelCircleIcon,
  CheckmarkCircle01Icon,
  Location06Icon,
  Medal03Icon,
  ShoppingBag02Icon,
} from "hugeicons-react";
import Image from "next/image";
import photo from "../../app/assets/avatar/avatar-25.webp";
const ApplicantCard = () => {
  return (
    <div className="shadow-custom-sm px-4 pt-3 pb-2 rounded-2xl">
      {/* header  */}
      <div className="flex items-center gap-3 ">
        <div className="w-11 h-11 rounded-full bg-gray-200/70 overflow-hidden">
          <Image
            src={photo}
            alt="react"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-base text-headerColor font-semibold line-clamp-1">
            Sheikh Saadi Shuvo
          </h3>

          <div className="flex items-center gap-2 ">
            <p className="flex items-center gap-1 text-textColor text-xs">
              <Location06Icon size={14} strokeWidth={2} /> Mirpur
            </p>
            <div className="h-1  w-1 bg-gray-400 rounded-full"></div>
            <p className="flex items-center text-textColor text-xs">
              {/* <CalendarRange size={14} className="-mt-0.5" />{" "} */}
              Dhaka
            </p>
          </div>
        </div>
      </div>
      {/* details  */}
      <div className="mt-5 mb-3 flex flex-col gap-1">
        <div className="flex gap-2 ">
          <Building03Icon size={14} className="text-textColor" />{" "}
          <p className="line-clamp-2 flex-1 text-[13px] text-textColor leading-tight">
            B.Sc in Information Technology and Management
          </p>
        </div>
        <div className="flex gap-2 ">
          <ShoppingBag02Icon size={14} className="text-textColor" />{" "}
          <p className="line-clamp-2 flex-1 text-[13px] text-textColor leading-tight">
            3 Years Experience
          </p>
        </div>
        <div className="flex gap-2 ">
          <Medal03Icon size={14} className="text-textColor" />{" "}
          <p className="line-clamp-2 flex-1 text-[13px] text-textColor leading-tight">
            Innovate International Ltd.
          </p>
        </div>
      </div>

      {/* bottom  */}
      <div className="pt-1.5 pb-1 border-t border-dashed flex items-center justify-between">
        <p className="text-textColor text-sm">5 min ago</p>
        <div className="text-headerColor flex">
          <div className="flex flex-col items-center px-1.5 py-1 hover:bg-primaryBackground/70 rounded-md cursor-pointer">
            <CheckmarkCircle01Icon size={20} className="text-primaryColor" />
            {/* <p className="text-[10px] text-textColor">shortlist</p> */}
          </div>
          <div className="flex flex-col items-center px-1.5 py-1 hover:bg-red-500/10 rounded-md cursor-pointer">
            <CancelCircleIcon
              size={20}
              className="text-red-500"
              strokeWidth={1.7}
            />
            {/* <p className="text-[10px] text-textColor">reject</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantCard;

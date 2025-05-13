import JobStatus from "@/helper/JobStatus";
import {
  BorderFullIcon,
  UserCheck01Icon,
  UserFullViewIcon,
} from "hugeicons-react";
import { CalendarRange, EllipsisVertical } from "lucide-react";
import Image from "next/image";
import react from "../../app/assets/icons/react icon.svg";

const JobCard = () => {
  return (
    <div className="shadow-custom-base p-5 rounded-3xl">
      {/* top bar  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <JobStatus status={"Open"} />
          <div className="h-4 border-l border-gray-300"></div>
          <div className="text-sm text-textColor">Development</div>
        </div>
        <div className="hover:bg-gray-200/80 p-1.5 rounded-full text-headerColor cursor-pointer transition-all">
          <EllipsisVertical size={16} />
        </div>
      </div>

      {/* header  */}
      <div>
        <div className="mt-3">
          <div className="flex">
            <div className="flex items-center gap-3">
              <div className=" p-1 inline-block rounded-full bg-gray-100">
                <Image src={react} alt="react" className="w-7" />
              </div>
              <div>
                <h3 className="text-base text-headerColor font-semibold">
                  Jr. Frontend Developer
                </h3>
                <p className="flex items-center gap-1.5 text-textColor text-xs">
                  <CalendarRange size={14} className="-mt-0.5" />{" "}
                  <span className="inline-block">Mar 24, 2025</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>

      {/* description  */}
      <div className="p-3  bg-gray-100 mt-5 rounded-lg">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <p className="text-sm text-textColor flex items-center gap-1">
              <BorderFullIcon size={16} strokeWidth={2} /> Total Application
            </p>
            <p className="text-headerColor font-barlow font-semibold">150</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-textColor flex items-center gap-1">
              <UserFullViewIcon size={16} strokeWidth={2} /> New Application
            </p>
            <p className="text-headerColor font-barlow font-semibold">50</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-textColor flex items-center gap-1">
              <UserCheck01Icon size={16} strokeWidth={2} /> Shortlisted
            </p>
            <p className="text-headerColor font-barlow font-semibold">10</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs mt-3">
          <div className="px-2 border rounded-full py-0.5 bg-red-500/30 text-headerColor">
            On Site
          </div>
          <div className="px-2 border rounded-full py-0.5 bg-green-500/30 text-headerColor">
            Full Time
          </div>
          <div className="px-2 border rounded-full py-0.5 bg-indigo-500/30">
            3 Vacancy{" "}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between mt-3">
        <div className="text-xs text-primaryColor hover:underline cursor-pointer">
          Edit Job
        </div>
        <button className="text-sm bg-primaryColor rounded-lg hover:bg-primaryHover hover:shadow-md hover:shadow-primaryHover/50 px-3 py-1.5 text-white transition-all">
          See Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;

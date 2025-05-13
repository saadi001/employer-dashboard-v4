import { jobDetailsTab } from "@/app/assets/data/dashboardDatas";
import CustomTab from "@/components/CustomTab/CustomTab";
import JobStatus from "@/helper/JobStatus";
import { ArrowDownToLine, ListFilter } from "lucide-react";
import Image from "next/image";
import reactIcon from "../../../assets/icons/react icon.svg";

const page = ({ params }) => {
  //   console.log("checking params: ", params);
  return (
    <div className="px-7 py-3 ">
      {/* header  */}
      <div className="flex items-center gap-3">
        <div className=" p-2 inline-block rounded-2xl bg-gray-200/70">
          <Image src={reactIcon} alt="react" className="w-8" />
        </div>
        <div>
          <div className="flex gap-1 mb-1">
            <h3 className="text-2xl text-headerColor font-semibold">
              Jr. Frontend Developer
            </h3>
            <JobStatus status={"open"} />
          </div>
          <div className="flex items-center gap-3 ">
            <p className="flex items-center gap-1.5 text-textColor text-sm">
              {/* <CalendarRange size={14} className="-mt-0.5" />{" "} */}
              Published:
              <span className="inline-block">Mar 24, 2025</span>
            </p>
            <div className="h-3 border border-gray-400"></div>
            <p className="flex items-center gap-1.5 text-textColor text-sm">
              {/* <CalendarRange size={14} className="-mt-0.5" />{" "} */}
              Deadline:
              <span className="inline-block">Mar 24, 2025</span>
            </p>
          </div>
        </div>
      </div>
      {/* tab  */}
      <div className="mt-6 flex items-center justify-between gap-2">
        <CustomTab data={jobDetailsTab} className={""} />
        <div className="flex items-center gap-2 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search applicant"
              className="w-48 h-auto border rounded-lg flex-1 text-base  px-3 py-2.5 text-headerColor focus:outline-0 hover:border-gray-600  focus:border-gray-600 focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
            />
          </div>
          <div className="border text-sm flex items-center gap-2  text-textColor px-3 py-3 rounded-lg hover:bg-gray-100/50  transition-all ">
            <ListFilter size={20} /> Filter
          </div>
          <button className="border border-primaryColor hover:border-primaryHover text-sm flex items-center gap-1.5 text-gray-50 font-semibold px-3 py-3 rounded-lg hover:bg-primaryHover  transition-all bg-primaryColor ">
            <ArrowDownToLine size={20} /> Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

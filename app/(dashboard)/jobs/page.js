import { DashBoardJobTabData } from "@/app/assets/data/dashboardDatas";
import CustomDateSelect from "@/components/CustomDateSelect/CustomDateSelect";
import CustomTab from "@/components/CustomTab/CustomTab";
import JobCard from "@/components/JobCard/JobCard";
import { PlusSignCircleIcon } from "hugeicons-react";
import { EllipsisVertical } from "lucide-react";

const Jobs = () => {
  return (
    <div className="px-7 py-3">
      {/* header  */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-publicSans text-headerColor font-semibold">
            All Jobs
          </h3>
          <p className="text-sm text-textColor">
            Manage posted jobs and progress.
          </p>
        </div>
        <button className="bg-primaryColor hover:bg-primaryHover hover:shadow-md hover:shadow-primaryHover/30 text-sm h-fit px-3 py-2 text-gray-50 rounded-lg font-semibold flex items-center gap-1.5 transition-all duration-300s ">
          <PlusSignCircleIcon size={18} strokeWidth={2.5} /> POST JOB
        </button>
      </div>
      {/* tab  */}
      <CustomTab
        data={DashBoardJobTabData}
        className={"mt-4"}
        hasUnderBorder={true}
      />
      {/* filter  */}
      <div className="mt-4 flex items-center gap-3">
        <CustomDateSelect content={"Start Date"} />
        <CustomDateSelect content={"End Date"} />

        <input
          type="text"
          placeholder="Search by job title"
          className="w-full flex-1 h-auto border rounded-lg  text-base  px-3 py-2.5 text-headerColor focus:outline-0 hover:border-gray-600  focus:border-gray-600 focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
        />
        <div className="bg-gray-50 rounded-full p-2 text-textColor hover:text-headerColor hover:bg-gray-100 cursor-pointer">
          <EllipsisVertical size={20} strokeWidth={2} />
        </div>
      </div>

      {/* jobs  */}
      <div className="mt-8 grid grid-cols-2 gap-5">
        {[...Array(5)].map((_, i) => (
          <JobCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;

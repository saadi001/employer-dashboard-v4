import { DashBoardJobTabData } from "@/app/assets/data/dashboardDatas";
import CustomTab from "@/components/CustomTab/CustomTab";
import { PlusSignCircleIcon } from "hugeicons-react";

const Jobs = () => {
  return (
    <div className="px-7 py-3">
      {/* header  */}
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl font-publicSans text-headerColor">All Jobs</h3>
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
    </div>
  );
};

export default Jobs;

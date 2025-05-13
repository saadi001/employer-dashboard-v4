// import bg from "../../assets/backgroundImage/noise.webp";
import { DashBoardJobTabData } from "@/app/assets/data/dashboardDatas";
import Advertisement from "@/components/Advertisement/Advertisement";
import CustomTab from "@/components/CustomTab/CustomTab";
import DashboardCard from "@/components/DashboardCard/DashboardCard";
import JobCard from "@/components/JobCard/JobCard";

const Dashboard = () => {
  return (
    <div className=" p-5">
      {/* cards  */}
      <div className="flex gap-4 w-full ">
        <div className="w-[75%] ">
          {/* cards  */}
          <DashboardCard />
          {/* tab  */}
          <div className=" flex items-end pt-3">
            <CustomTab data={DashBoardJobTabData} />
            {/* <div className="text-sm pt-5 flex items-center gap-8 ">
              <div className="">
                <p className="flex items-center gap-2 py-2 border-b-2 border-headerColor font-semibold">
                  All{" "}
                  <span className="bg-headerColor min-w-5 min-h-5 flex items-center justify-center  rounded text-gray-100 text-xs">
                    20
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-2 py-2 font-medium text-textColor">
                  Approved
                  <span className="bg-primaryBackground text-primaryColor font-semibold  min-w-5 min-h-5 flex items-center justify-center  rounded text-xs">
                    5
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-2 py-2 font-medium text-textColor">
                  Pending
                  <span className="bg-secondaryBackground text-secondaryColor font-semibold  min-w-5 min-h-5 flex items-center justify-center  rounded text-xs">
                    5
                  </span>
                </p>
              </div>
              <div className="">
                <p className="flex items-center gap-2 py-2 font-medium text-textColor">
                  Draft
                  <span className="bg-infoColor/20 text-infoColor font-semibold  min-w-5 min-h-5 flex items-center justify-center  rounded text-xs">
                    1
                  </span>
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* advertisement */}
        <Advertisement />
      </div>

      {/* jobs  */}
      <div className="mt-6 grid grid-cols-2 gap-5">
        {[...Array(5)].map((_, i) => (
          <JobCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

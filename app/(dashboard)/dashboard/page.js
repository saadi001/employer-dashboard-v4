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

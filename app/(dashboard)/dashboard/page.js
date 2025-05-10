import {
  Hired,
  TotalCVIcon,
  TotalJobIcon,
} from "@/app/assets/data/svgComponent/svgComponent";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* cards  */}
      <div className="grid grid-cols-3 gap-6 mr-60">
        <div className="shadow-custom-sm rounded-2xl px-6 py-7 relative overflow-hidden">
          <h3 className="font-barlow text-[2rem] font-bold text-headerColor">
            06
          </h3>
          <p className="font-publicSans text-sm text-textColor font-semibold">
            Total job posted
          </p>
          <div className="absolute -right-[90px] -top-[44px] w-[160px] h-[160px] -rotate-45 rounded-3xl p-5 bg-yellow-50 -z-20">
            <TotalJobIcon className={"rotate-45"} />
          </div>
        </div>

        <div className="shadow-custom-sm rounded-2xl px-6 py-7 relative overflow-hidden">
          <h3 className="font-barlow text-[2rem] font-bold text-headerColor">
            526
          </h3>
          <p className="font-publicSans text-sm text-textColor font-semibold">
            CV received in total
          </p>
          <div className="absolute -right-[90px] -top-[44px] w-[160px] h-[160px] -rotate-45 rounded-3xl p-5 bg-teal-50 -z-20">
            <TotalCVIcon className={"rotate-45"} />
          </div>
        </div>

        <div className="shadow-custom-sm rounded-2xl px-6 py-7 relative overflow-hidden">
          <h3 className="font-barlow text-[2rem] font-bold text-headerColor">
            06
          </h3>
          <p className="font-publicSans text-sm text-textColor font-semibold">
            Hired
          </p>
          <div className="absolute -right-[90px] -top-[44px] w-[160px] h-[160px] -rotate-45 rounded-3xl p-5 bg-secondaryBackground/60 -z-20">
            <Hired className={"rotate-45"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

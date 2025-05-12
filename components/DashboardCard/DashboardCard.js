import { Hired } from "@/app/assets/data/svgComponent/svgComponent";
import Image from "next/image";
import totalCV from "../../app/assets/icons/total cv.png";
import totalPost from "../../app/assets/icons/total post.png";

const DashboardCard = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="shadow-custom-sm rounded-2xl px-6 py-8 relative overflow-hidden">
        <h3 className="font-barlow text-[2rem] font-bold text-headerColor">
          06
        </h3>
        <p className="font-publicSans text-sm text-textColor font-semibold">
          Total job posted
        </p>
        <div className="absolute -right-[90px] -top-[44px] w-[160px] h-[160px] -rotate-45 rounded-3xl p-5 bg-yellow-50 -z-20">
          {/* <TotalJobIcon className={"rotate-45"} /> */}
          <Image
            src={totalPost}
            alt="post"
            className="object-cover rotate-45"
          />
        </div>
      </div>

      <div className="shadow-custom-sm rounded-2xl px-6 py-8 relative overflow-hidden">
        <h3 className="font-barlow text-[2rem] font-bold text-headerColor">
          526
        </h3>
        <p className="font-publicSans text-sm text-textColor font-semibold">
          CV received in total
        </p>
        <div className="absolute -right-[90px] -top-[44px] w-[160px] h-[160px] -rotate-45 rounded-3xl p-5 bg-teal-50 -z-20">
          {/* <TotalCVIcon className={"rotate-45"} /> */}
          <Image src={totalCV} alt="post" className="object-cover rotate-45" />
        </div>
      </div>

      <div className="shadow-custom-sm rounded-2xl px-6 py-8 relative overflow-hidden">
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
  );
};

export default DashboardCard;

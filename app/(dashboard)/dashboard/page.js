import { Hired } from "@/app/assets/data/svgComponent/svgComponent";
import Image from "next/image";
// import bg from "../../assets/backgroundImage/noise.webp";
import bg2 from "../../assets/backgroundImage/noise2.jpg";
import bg3 from "../../assets/icons/abc-australia-svgrepo-com.svg";
import totalCV from "../../assets/icons/total cv.png";
import totalPost from "../../assets/icons/total post.png";

const Dashboard = () => {
  return (
    <div className=" p-5">
      {/* cards  */}
      <div className="flex gap-4 w-full ">
        <div className="w-[75%] ">
          {/* cards  */}
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
                <Image
                  src={totalCV}
                  alt="post"
                  className="object-cover rotate-45"
                />
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
          {/* tab  */}
          <div className=" flex items-end">
            <div className="text-sm pt-5 flex items-center gap-8 ">
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
            </div>
          </div>
        </div>
        {/* advertisement */}
        <div className="w-[25%]  p-4 rounded-xl bg-primaryHover relative overflow-hidden">
          <div className="z-40 absolute inset-4 flex justify-center items-center ">
            <div>
              <h3 className="text-xl text-white leading-tight">
                Get <span className="text-3xl font-barlow">20%</span> <br />{" "}
                Discount!
              </h3>
              <p className="text-xs text-gray-50 mt-1.5 leading-tight">
                Unlock exclusive discounts and save more on every purchase.
              </p>
              <button className="bg-green-200 hover:bg-green-300  text-gray-700 text-xs font-semibold px-3 py-1.5 mt-3 rounded-md">
                Redeem
              </button>
            </div>
          </div>
          <Image
            src={bg2}
            alt="background"
            className="absolute inset-0 object-cover opacity-20 scale-150 z-0"
          />
          <Image
            src={bg3}
            alt="background image"
            className="absolute -right-5 -top-5 scale-150 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

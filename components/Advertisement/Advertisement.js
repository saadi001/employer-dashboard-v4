import Image from "next/image";
import bg2 from "../../app/assets/backgroundImage/noise2.jpg";
import bg3 from "../../app/assets/icons/abc-australia-svgrepo-com.svg";

const Advertisement = () => {
  return (
    <div className="w-[25%]  p-4 rounded-xl bg-primaryHover relative overflow-hidden">
      <div className="z-30 absolute inset-4 flex justify-center items-center ">
        <div>
          <h3 className="text-xl text-white leading-tight">
            Get <span className="text-3xl font-barlow">20%</span> <br />{" "}
            Discount!
          </h3>
          <p className="text-xs text-gray-50 mt-1.5 leading-tight">
            Unlock exclusive discounts and save more on every purchase.
          </p>
          <button className="bg-green-200 hover:bg-green-300  text-gray-700 text-xs font-semibold px-3 py-1.5 mt-3 rounded-md transition-all">
            Post Job
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
  );
};

export default Advertisement;

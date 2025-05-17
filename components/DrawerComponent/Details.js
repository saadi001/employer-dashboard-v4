import { Link01Icon, LinkSquare01Icon } from "hugeicons-react";

const Details = () => {
  return (
    <div className="p-2 flex flex-col gap-4">
      {/* About  */}
      <div>
        <h5 className="text-sm text-headerColor font-semibold mb-1">About</h5>
        <p className="text-sm text-textColor">
          I am currently seeking an entry-level position in a dynamic and
          growth-oriented organization where I can utilize my quantitative and
          analytical skills and enthusiasm to learn and grow and polish my
          organizational skills and teamwork ability.
        </p>
      </div>

      {/* personal details  */}
      <div>
        <h5 className="text-sm text-headerColor font-semibold mb-1">
          Personal Details
        </h5>
        <div className="text-sm text-textColor flex">
          <h3 className="w-[30%]">Email:</h3>
          <p className="text-headerColor flex-1">sheikhsadi1620@gmail.com</p>
        </div>
        <div className="text-sm text-textColor  flex">
          <h3 className="w-[30%]">Phone:</h3>
          <p className="text-headerColor flex-1">01836530309</p>
        </div>
        <div className="text-sm text-textColor  flex">
          <h3 className="w-[30%]">Gender:</h3>
          <p className="text-headerColor flex-1">Male</p>
        </div>
        <div className="text-sm text-textColor  flex">
          <h3 className="w-[30%]">Current Address:</h3>
          <p className="text-headerColor flex-1">
            Boishakhi soroni, gulshan-badda link road, dhaka 1212
          </p>
        </div>
        <div className="text-sm text-textColor  flex">
          <h3 className="w-[30%]">Permanent Address:</h3>
          <p className="text-headerColor flex-1">
            Hajigonj, chandpur, chittagong
          </p>
        </div>
      </div>

      {/* Education  */}
      <div className="">
        <h5 className="text-sm text-headerColor font-semibold mb-2">
          Education
        </h5>
        <div>
          <h5 className="text-sm text-headerColor ">
            Bachelor in Information Technology & Management
          </h5>
          <p className="text-textColor text-sm">jan 2021 - Dec 2024 </p>
          <p className="text-textColor text-sm">
            Daffodil International University
          </p>
        </div>
        <div className="mt-3">
          <h5 className="text-sm text-headerColor ">
            Higher Secondary Certificate
          </h5>
          <p className="text-textColor text-sm">jan 2021 - Dec 2024 </p>
          <p className="text-textColor text-sm">
            Daffodil International University
          </p>
        </div>
      </div>

      {/* Portfolio  */}
      <div className="bg-primaryBackground/50 hover:bg-primaryBackground/80 flex items-center justify-between gap-2 rounded-xl px-4 py-4 cursor-pointer ">
        <div className="text-slate-700 flex items-center gap-2  text-sm">
          <Link01Icon size={20} strokeWidth={2} /> Portfolio
        </div>
        <LinkSquare01Icon
          size={20}
          strokeWidth={2}
          className="text-slate-700 "
        />
      </div>

      {/* skills  */}
      <div>
        <h5 className="text-sm text-headerColor font-semibold mb-2">Skills</h5>
        <div className="flex items-center gap-2.5 flex-wrap">
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            Product Design
          </p>
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            UI/UX Design
          </p>
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            Prototyping
          </p>
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            Adapting
          </p>
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            Fast learning
          </p>
          <p className="bg-gray-200 px-3 font-medium whitespace-nowrap py-2 rounded-full text-sm text-headerColor">
            Product Design
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;

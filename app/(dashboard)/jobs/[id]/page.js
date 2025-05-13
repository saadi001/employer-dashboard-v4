import JobStatus from "@/helper/JobStatus";
import Image from "next/image";
import reactIcon from "../../../assets/icons/react icon.svg";

const page = ({ params }) => {
  //   console.log("checking params: ", params);
  return (
    <div className="px-6 py-3 ">
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
    </div>
  );
};

export default page;

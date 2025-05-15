"use client";
import {
  applicantCardData,
  jobDetailsTab,
} from "@/app/assets/data/dashboardDatas";
import ApplicantCard from "@/components/ApplicantCard/ApplicantCard";
import ApplicantFilterDropdown from "@/components/CustomDropdown/ApplicantFilterDropdown";
import DownloadApplicantCV from "@/components/CustomDropdown/DownloadApplicantCV";
import CustomTab from "@/components/CustomTab/CustomTab";
import JobStatus from "@/helper/JobStatus";
import { Search } from "lucide-react";
import Image from "next/image";
import reactIcon from "../../../assets/icons/react icon.svg";

const JobDetailsPage = ({ params }) => {
  return (
    <div className="px-7 py-3">
      {/* header  */}
      <div className="flex items-start gap-3 w-full">
        {/* header  */}
        <div className="flex-1">
          <div className="flex items-center gap-3 pt-2">
            <div className=" p-2 inline-block rounded-2xl bg-gray-200/70">
              <Image src={reactIcon} alt="react" className="w-8" />
            </div>
            <div>
              <div className="flex gap-1 mb-1">
                <h3 className="text-2xl text-headerColor font-semibold">
                  Jr. Frontend Developer
                </h3>
                <JobStatus status={"live"} />
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
          {/* tab  */}
          <div className="pt-6 ">
            <CustomTab
              data={jobDetailsTab}
              className={""}
              hasUnderBorder={true}
            />
          </div>
        </div>
        {/* chart  */}
        {/* <div className="">
          <div className="flex items-center w-fit shadow-custom-sm rounded-xl px-8 ">
            <DonutChart />
            <div className=" flex flex-col gap-0.5 px-3">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block"
                  style={{ backgroundColor: "var(--color-chrome)" }}
                ></span>
                <p className="text-xs text-headerColor ">Chrome</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block"
                  style={{ backgroundColor: "var(--color-safari)" }}
                ></span>
                <p className="text-xs text-headerColor ">Safari</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block"
                  style={{ backgroundColor: "var(--color-firefox)" }}
                ></span>
                <p className="text-xs text-headerColor ">Firefox</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 inline-block"
                  style={{ backgroundColor: "var(--color-edge)" }}
                ></span>
                <p className="text-xs text-headerColor ">Edge</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* filters  */}
      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="text-textColor text-xs px-1 items-stretch ">
          Showing 10 of 100
        </div>
        <div className="flex items-center gap-2 ">
          <div className="relative">
            <input
              type="text"
              placeholder="Search applicant"
              className="min-w-56 h-auto border rounded-lg flex-1 text-sm pl-8  px-3 py-2.5 text-headerColor focus:outline-0 hover:border-gray-600  focus:border-gray-600 focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
            />
            <Search
              size={20}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 "
            />
          </div>

          <ApplicantFilterDropdown />
          <DownloadApplicantCV />
        </div>
      </div>

      {/* applicants  */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {applicantCardData?.map((data, i) => (
          <ApplicantCard data={data} key={i} />
        ))}
        <ApplicantCard />
        <ApplicantCard />
      </div>
    </div>
  );
};

export default JobDetailsPage;

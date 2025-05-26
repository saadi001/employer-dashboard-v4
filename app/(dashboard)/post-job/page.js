"use client";
import { educationsData } from "@/app/assets/data/dashboardDatas";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import CustomDateSelect from "@/components/CustomDateSelect/CustomDateSelect";
import CustomEditableDropdown from "@/components/CustomEditableDropdown/CustomEditableDropdown";
import CustomQuestion from "@/components/CustomQuestion/CustomQuestion";
import CustomRadio from "@/components/CustomRadio/CustomRadio";
import CustomToggle from "@/components/CustomToggle/CustomToggle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagsInput } from "@/components/ui/tagsInput";
import { Money02Icon, MoneyExchange01Icon } from "hugeicons-react";
import { Text } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import icon from "../../assets/icons/react icon.svg";
import icon2 from "../../assets/icons/total cv.png";

const PostJob = () => {
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const [tagsInputValue, setTagsInputValue] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState("");

  return (
    <div className="px-6 py-4 w-full flex gap-2">
      {/* left side  */}
      <div className="flex-1 px-8">
        {/* header  */}
        <div>
          <h3 className="text-2xl font-publicSans text-headerColor font-semibold">
            Create a New Job
          </h3>
          <p className="text-sm text-textColor ">
            Post a job with correct information.{" "}
          </p>
        </div>

        <form>
          {/* details  */}
          <div className="mt-7 rounded-xl px-5 pt-4 pb-8 shadow-custom-base ">
            <h4 className="text-lg font-semibold text-headerColor">Details</h4>
            <div className="mt-5 flex flex-col gap-4">
              {/* title  */}
              <div className="space-y-2">
                <label
                  htmlFor="title"
                  className="text-headerColor text-sm font-semibold "
                >
                  Title
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Ex: Project Manager"
                  className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
                />
              </div>
              {/* category and deadline  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label
                    htmlFor="title"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Category
                    <span className="text-red-600">*</span>
                  </label>
                  <Select>
                    <SelectTrigger
                      className={
                        "w-full px-3 py-2.5 rounded-lg text-sm hover:outline-1"
                      }
                    >
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={"1"}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={icon}
                              alt="icon"
                              className="w-5 py-0.5"
                            />
                            Web developer
                          </div>
                        </SelectItem>
                        <SelectItem value={"2"}>
                          <div className="flex items-center gap-2">
                            <Image
                              src={icon2}
                              alt="icon"
                              className="w-5 py-0.5"
                            />{" "}
                            Web developer 2
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* deadline  */}
                <div className="space-y-2">
                  <label
                    htmlFor="deadline"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Deadline
                    <span className="text-red-600">*</span>
                  </label>
                  <CustomDateSelect
                    content={"Select Date"}
                    className={"!h-12 !w-full"}
                  />
                </div>
              </div>
              {/* vacancy  */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label
                    htmlFor="vacancy"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Vacancy
                    {/* <span className="text-red-600">*</span> */}
                  </label>
                  <input
                    type="number"
                    id="vacancy"
                    placeholder="Ex: 2"
                    min={1}
                    max={999}
                    className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="experience"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Experience
                    {/* <span className="text-red-600">*</span> */}
                  </label>
                  <input
                    type="text"
                    id="experience"
                    placeholder="Ex: 1 year"
                    min={1}
                    max={999}
                    className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* content  */}
          <div className="mt-5 rounded-xl p-5  shadow-custom-base">
            <h4 className="text-lg font-semibold text-headerColor">Content</h4>
          </div>
          {/* Properties  */}
          <div className="mt-5 rounded-xl p-5 shadow-custom-base ">
            <h4 className="text-lg font-semibold text-headerColor">
              Properties
            </h4>
            <div className="mt-5 flex flex-col gap-5">
              {/* education  */}
              <div className="grid grid-cols-2 gap-4">
                {/* education level  */}
                <div className="space-y-2">
                  <label
                    htmlFor="Degree"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Education Level
                  </label>
                  <CustomEditableDropdown
                    options={educationsData}
                    placeholder={"Select or write degree"}
                    onChange={(value) => setValue(value)}
                    value={value}
                  />
                </div>
                {/* department  */}
                <div className="space-y-2">
                  <label
                    htmlFor="Degree"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Department/Subject
                  </label>
                  <CustomEditableDropdown
                    options={educationsData}
                    placeholder={"Select or write degree"}
                    onChange={(value) => setValue(value)}
                    value={value}
                  />
                </div>
              </div>

              {/* employment status  */}
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-headerColor text-sm font-semibold block "
                >
                  Employment type
                  <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-5">
                  <CustomCheckbox id={"full-time"} label={"Full-time"} />
                  <CustomCheckbox id={"employer"} label={"Part-time"} />
                  <CustomCheckbox id={"intern"} label={"Intern"} />
                  <CustomCheckbox id={"contractual"} label={"Contractual"} />
                </div>
              </div>

              {/* work mode  */}
              <div>
                <label
                  htmlFor=""
                  className="text-headerColor text-sm font-semibold block "
                >
                  Work mode
                  <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-5">
                  <CustomRadio
                    id={"on-site"}
                    label={"On site"}
                    checked={selected === "on-site"}
                    onChange={() => setSelected("on-site")}
                  />
                  <CustomRadio
                    id={"remote"}
                    label={"Remote"}
                    checked={selected === "remote"}
                    onChange={() => setSelected("remote")}
                  />
                  <CustomRadio
                    id={"hybrid"}
                    label={"Hybrid"}
                    checked={selected === "hybrid"}
                    onChange={() => setSelected("hybrid")}
                  />
                </div>
              </div>

              {/* skills  */}
              <div className="space-y-2">
                <label
                  htmlFor="Skills"
                  className="text-headerColor text-sm font-semibold "
                >
                  Skills
                  <span className="text-red-600">*</span>
                </label>
                <TagsInput
                  value={tagsInputValue}
                  onValueChange={(value) => setTagsInputValue(value)}
                  placeholder={
                    "Ex: Problem solving. To add press Enter after writing."
                  }
                />
              </div>
              {/* salary  */}
              <div className="space-y-2">
                <label
                  htmlFor="salary"
                  className="text-headerColor text-sm font-semibold "
                >
                  Salary
                  <span className="text-red-600">*</span>
                </label>
                <div>
                  <AnimatePresence>
                    <div className="grid grid-cols-2 gap-4">
                      <div
                        onClick={() => setSelectedSalary("negotiable")}
                        className={`flex flex-col text-center items-center justify-center border border-gray-300  py-5 rounded-lg cursor-pointer ${
                          selectedSalary === "negotiable" &&
                          "border-2 border-primaryColor"
                        }`}
                      >
                        <MoneyExchange01Icon
                          size={24}
                          className="text-headerColor"
                        />
                        <p className="text-sm text-headerColor font-semibold">
                          Negotiable
                        </p>
                      </div>

                      <div
                        onClick={() => setSelectedSalary("custom")}
                        className={`flex flex-col text-center items-center justify-center border border-gray-300  py-5 rounded-lg cursor-pointer ${
                          selectedSalary === "custom" &&
                          "border-2 border-primaryColor"
                        }`}
                      >
                        <Money02Icon size={24} className="text-headerColor" />
                        <p className="text-sm text-headerColor font-semibold">
                          Custom
                        </p>
                      </div>
                    </div>

                    {selectedSalary === "custom" && (
                      <motion.input
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        type="text"
                        id="title"
                        placeholder="Ex: 15000-20000"
                        className="w-full h-auto mt-5 border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor placeholder:font-publicSans placeholder:text-sm"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
              {/* custom question  */}
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-headerColor text-sm font-semibold block "
                >
                  Custom Question
                </label>
                <CustomQuestion />
              </div>

              {/* benefits  */}
              <div className="space-y-2">
                <label
                  htmlFor=""
                  className="text-headerColor text-sm font-semibold block "
                >
                  Benefits
                </label>
                <div className="grid grid-cols-2 gap-1">
                  <CustomCheckbox
                    id={"transportation"}
                    label={"Transportation"}
                  />
                  <CustomCheckbox id={"free-parking"} label={"Free parking"} />
                  <CustomCheckbox
                    id={"bonus-commission"}
                    label={"Bonus commission"}
                  />
                  <CustomCheckbox id={"travel"} label={"Travel"} />
                  <CustomCheckbox
                    id={"device-support"}
                    label={"Device support"}
                  />
                  <CustomCheckbox id={"Lunch"} label={"Lunch"} />
                  <CustomCheckbox id={"training"} label={"Training"} />
                  <CustomCheckbox
                    id={"health-insurance"}
                    label={"Health insurance"}
                  />
                  <CustomCheckbox
                    id={"flexible-work-schedule"}
                    label={"Flexible work schedule"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-between mt-8 mb-12 px-4">
            <div className="flex items-center gap-3">
              <CustomToggle />{" "}
              <span className="inline-block text-headerColor font-semibold text-sm">
                Draft
              </span>
            </div>
            <button className="text-sm px-4 py-2 rounded-lg bg-primaryColor text-gray-50 font-semibold hover:bg-primaryHover">
              PUBLISH
            </button>
          </div>
        </form>
      </div>

      {/* right side  */}
      <div className="w-[25%] py-1 h-fit">
        <p className="text-sm font-light flex items-center gap-2 text-slate-600">
          {" "}
          <Text size={16} /> On this page
        </p>
        <div className="text-sm mt-5 space-y-2.5 border-l-[0.5px] border-dashed text-slate-500 ">
          <p className="pl-5  leading-tight relative text-slate-800 font-medium">
            Description
            <span className="w-[3px] absolute top-0 -left-[2px] bottom-0 border-none bg-slate-800"></span>
          </p>
          <p className="pl-5 leading-tight">Content</p>
          <p className="pl-5 leading-tight">Properties</p>
          <p className="pl-5 leading-tight">Payment</p>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

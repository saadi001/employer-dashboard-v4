"use client";

import { educationsData } from "@/app/assets/data/dashboardDatas";
import { MenuForPostJOb } from "@/app/assets/data/SidebarMenu";
import { createJobSchema } from "@/Scema/CreateJobSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight01Icon,
  Money02Icon,
  MoneyExchange01Icon,
} from "hugeicons-react";
import { Text } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import basicPayment from "../../app/assets/payment icon/basic.webp";
import bulkJob from "../../app/assets/payment icon/bulk job post.webp";
import premiumPayment from "../../app/assets/payment icon/premium.webp";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CustomDateSelect from "../CustomDateSelect/CustomDateSelect";
import CustomEditableDropdown from "../CustomEditableDropdown/CustomEditableDropdown";
import CustomInput from "../CustomInput/CustomInput";
import CustomQuestion from "../CustomQuestion/CustomQuestion";
import CustomRadio from "../CustomRadio/CustomRadio";
import CategorySelect from "../CustomSelect/CategorySelect";
import CustomToggle from "../CustomToggle/CustomToggle";
import { Form, FormField, FormItem, FormMessage } from "../ui/form";
import { TagsInput } from "../ui/tagsInput";

const PostJobForm = () => {
  const [value, setValue] = useState("");
  const [activeSection, setActiveSection] = useState("details");
  const [selected, setSelected] = useState("");
  const [tagsInputValue, setTagsInputValue] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState("");
  const contentRef = useRef(null);
  const sectionRefs = useRef({});

  // scroll works
  useEffect(() => {
    console.log("active section", activeSection);
    const observerOptions = {
      root: contentRef.current,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const setSectionRef = (id) => (el) => {
    sectionRefs.current[id] = el;
  };

  // form submission works
  const form = useForm({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = (values) => {
    console.log("form data: ", values);
  };

  return (
    <div className="px-6 py-4 w-full flex gap-2">
      {/* left side  */}
      <div
        ref={contentRef}
        className="flex-1 w-[75%]  mr-[25%] px-8 overflow-y-auto"
      >
        {/* header  */}
        <div>
          <h3 className="text-2xl font-publicSans text-headerColor font-semibold">
            Create a New Job
          </h3>
          <p className="text-sm text-textColor ">
            Post a job with correct information.{" "}
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* details  */}
            <div
              id="description"
              ref={setSectionRef("description")}
              className="mt-7 rounded-xl px-5 pt-4 pb-8 shadow-custom-base "
            >
              <h4 className="text-lg font-semibold text-headerColor">
                Details
              </h4>
              <div className="mt-5 flex flex-col gap-4">
                {/* title  */}
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <CustomInput
                        id={"title"}
                        label={"Title"}
                        required={true}
                        placeholder={"Ex: Project Manager"}
                        field={field}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* category and deadline  */}
                <div className="grid grid-cols-2 gap-3">
                  {/* category */}
                  <div className="space-y-2">
                    <label
                      htmlFor="title"
                      className="text-headerColor text-sm font-semibold "
                    >
                      Category
                      <span className="text-red-600">*</span>
                    </label>
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <CategorySelect field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
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

                    <FormField
                      control={form.control}
                      name={"deadline"}
                      render={({ field }) => (
                        <FormItem>
                          <CustomDateSelect
                            content={"Select Deadline"}
                            className={"!h-12 !w-full"}
                            field={field}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* <CustomDateSelect
                      content={"Select Date"}
                      className={"!h-12 !w-full"}
                    /> */}
                  </div>
                </div>

                {/* vacancy and experience  */}
                <div className="grid grid-cols-2 gap-3">
                  {/* vacancy  */}
                  <FormField
                    control={form.control}
                    name={"vacancy"}
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          id={"vacancy"}
                          type={"number"}
                          label={"Vacancy"}
                          placeholder={"Ex: 3"}
                          field={field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* experience  */}
                  <FormField
                    control={form.control}
                    name={"experience"}
                    render={({ field }) => (
                      <FormItem>
                        <CustomInput
                          id={"experience"}
                          type={"number"}
                          label={"Experience (year) "}
                          placeholder={"Ex: 1"}
                          field={field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* content  */}
            <div
              id="content"
              ref={setSectionRef("content")}
              className="mt-5 rounded-xl p-5 space-y-4 shadow-custom-base overflow-hidden"
            >
              <h4 className="text-lg font-semibold text-headerColor">
                Content
              </h4>
              {/* <CustomTextEditor /> */}
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
                    <CustomCheckbox
                      id={"free-parking"}
                      label={"Free parking"}
                    />
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

            {/* payment  */}
            <div className="mt-5 rounded-xl p-5 shadow-custom-base">
              <h4 className="text-lg font-semibold text-headerColor">
                Payment
              </h4>
              {/* plan and card  */}
              <div className="mt-3">
                <label
                  htmlFor=""
                  className="text-headerColor text-sm font-semibold "
                >
                  Choose your plan, pay & copy transaction ID
                </label>

                <div className="grid grid-cols-3 gap-4 pt-3">
                  <div className="border rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={basicPayment}
                        alt="basic payment"
                        className="w-9"
                      />
                      <div className="">
                        <h5 className="text-headerColor">Basic</h5>
                        <p className="bg-primaryColor text-[11px] text-gray-100 rounded px-1">
                          800 BDT
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul>
                        <li className="text-sm flex gap-1">
                          <ArrowRight01Icon size={18} />{" "}
                          <p className="flex-1">You will get 200-250 CVs</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={premiumPayment}
                        alt="basic payment"
                        className="w-10"
                      />
                      <div className="">
                        <h5 className="text">Premium</h5>
                        <p className="bg-primaryColor text-[11px] text-gray-100 rounded px-1 w-fit">
                          1500 BDT
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul>
                        <li className="text-sm flex gap-1">
                          <ArrowRight01Icon size={18} />
                          <p className="flex-1">You will get 500-550 CVs</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="border rounded-xl px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={bulkJob}
                        alt="basic payment"
                        className="w-9"
                      />
                      <div className="">
                        <h5 className="text">Bulk Job Post</h5>
                        <p className="bg-primaryColor text-[11px] text-gray-100 rounded px-1 w-fit">
                          4000 BDT
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <ul>
                        <li className="text-sm flex gap-1">
                          <ArrowRight01Icon size={18} />
                          <p className="flex-1">
                            You will get 300-350 CVs per job.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* bkash no and transaction id  */}
              <div className="grid grid-cols-2 gap-4 mt-5">
                <div className="space-y-2 ">
                  <label
                    htmlFor="bkashNumber"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Bkash Number
                    {/* <span className="text-red-600">*</span> */}
                  </label>
                  <input
                    type="number"
                    id="bkashNumber"
                    placeholder="Ex: 018365*****"
                    min={1}
                    max={999}
                    className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
                  />
                </div>
                <div className="space-y-2 ">
                  <label
                    htmlFor="transactionID"
                    className="text-headerColor text-sm font-semibold "
                  >
                    Transaction ID
                    {/* <span className="text-red-600">*</span> */}
                  </label>
                  <input
                    type="text"
                    id="transactionID"
                    placeholder="Transaction ID"
                    min={1}
                    max={999}
                    className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* submit button  */}
            <div className="w-full flex items-center justify-between mt-8 mb-12 px-4">
              <CustomToggle label={"Save as Draft"} />

              <button className="text-sm px-4 py-2 rounded-lg bg-primaryColor text-gray-50 font-semibold hover:bg-primaryHover">
                PUBLISH
              </button>
            </div>
          </form>
        </Form>
      </div>

      {/* right side  */}
      <div className="w-[20%] py-1 h-fit fixed right-0 top-20">
        <p className="text-sm font-light flex items-center gap-2 text-slate-600">
          {" "}
          <Text size={16} /> On this page
        </p>
        <div className="text-sm mt-5 space-y-3 border-l-[0.5px] border-dashed text-slate-500 ">
          {MenuForPostJOb.map((menu, i) => (
            <p
              onClick={() => scrollToSection(menu.id)}
              className={`pl-5 leading-tight relative cursor-pointer ${
                i === 0 ? "text-slate-800 font-medium" : ""
              }`}
              key={menu?.id}
            >
              {menu?.label}
              {activeSection === menu.id && (
                <span className="w-[3px] absolute top-0 -left-[2px] bottom-0 border-none bg-slate-800"></span>
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostJobForm;

import CustomDateSelect from "@/components/CustomDateSelect/CustomDateSelect";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Text } from "lucide-react";
import Image from "next/image";
import icon from "../../assets/icons/react icon.svg";
import icon2 from "../../assets/icons/total cv.png";

const PostJob = () => {
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

        {/* details  */}
        <div className="mt-7 rounded-xl px-5 pt-4 pb-8 shadow-custom-base">
          <h4 className="text-lg font-medium text-headerColor">Details</h4>
          <form action="" className="mt-5 flex flex-col gap-4">
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
                className="w-full  h-auto border rounded-lg flex-1 text-sm  px-3 py-3 text-headerColor focus:outline-1 hover:border-gray-600 focus:outline-primaryColor focus:border-gray-600  focus:ring-gray-600 placeholder:font-publicSans placeholder:text-sm"
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
                          <Image src={icon} alt="icon" className="w-5 py-0.5" />
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
          </form>
        </div>
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
            <span className="w-[3px] absolute top-0 -left-[1.5px] bottom-0 border-none bg-slate-800"></span>
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

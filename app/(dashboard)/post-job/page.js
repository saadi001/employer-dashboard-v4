import { Text } from "lucide-react";

const PostJob = () => {
  return (
    <div className="px-6 py-4 w-full flex gap-2">
      {/* left side  */}
      <div className="flex-1 px-8">
        {/* header  */}
        <div>
          <h3 className="text-xl font-publicSans text-headerColor font-semibold">
            Create a New Job
          </h3>
          <p className="text-sm text-textColor ">
            Post a job with correct information.{" "}
          </p>
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

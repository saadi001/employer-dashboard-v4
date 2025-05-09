// import { login } from "../actions/login";

const page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-[350px] px-6 border border-customTeal py-8 rounded-md">
        <form action={""}>
          <div>
            <label htmlFor="email" className="text-customTeal block">
              Email
              <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="border border-customTeal mt-1 px-3 py-1.5 rounded-md text-sm focus:outline-0 w-full"
            />
          </div>
          <div className="mt-5">
            <label htmlFor="password" className="text-customTeal">
              Password
              <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="border border-customTeal mt-1 px-3 py-1.5 rounded-md text-sm focus:outline-0 w-full"
            />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <button className="" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;

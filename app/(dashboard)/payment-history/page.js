import Image from "next/image";
import notFound from "../../assets/icons/not found transaction .png";

const PaymentHistory = () => {
  return (
    <div className="min-h-80 p-4 flex items-center justify-center w-full">
      <div className="">
        <Image
          src={notFound}
          alt="not found"
          quality={100}
          className="w-36 mx-auto"
        />
        <h5 className="text-headerColor font-semibold text-center text-lg">
          No payment history found yet!
        </h5>
        <p className="text-textColor text-sm">
          You must post a job to see your payment history.
        </p>
        <div className="flex items-center justify-center">
          <button className="px-3 py-1 bg-primaryColor text-gray-50 hover:bg-primaryHover rounded-lg mt-5">
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

import { Location06Icon } from "hugeicons-react";
import Image from "next/image";
import { Drawer } from "vaul";
import photo from "../../app/assets/avatar/avatar-25.webp";
import DrawerFooter from "../DrawerComponent/DrawerFooter";
import { ScrollArea } from "../ui/scroll-area";

const CustomSheetVaul = ({ open, setOpen }) => {
  const status = "shortlisted";
  return (
    <Drawer.Root direction="right" open={open} onOpenChange={setOpen}>
      <Drawer.Overlay className="fixed inset-0 bg-black/50 z-50" />
      <Drawer.Content
        className="right-2 bottom-2 top-2 fixed z-[60] outline-none w-[400px] sm:w-[500px] flex overflow-hidden"
        style={{
          "--initial-transform": "calc(100% + 8px)",
        }}
      >
        <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
          <ScrollArea className={"flex-1 w-full"}>
            <div className="">
              {/* header  */}
              <div className="flex justify-between items-center gap-2">
                <div className="flex flex-1 items-center gap-3 w-full cursor-pointer ">
                  <div className="w-12 h-12 rounded-full bg-gray-200/70 overflow-hidden">
                    <Image
                      src={photo}
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    onClick={() => setSheetOpen(!sheetOpen)}
                    className="flex-1"
                  >
                    <h3 className="text-base text-headerColor font-semibold line-clamp-1 hover:underline">
                      Sheikh Saadi Shuvo
                    </h3>

                    <div className="flex items-center gap-2 ">
                      <p className="flex items-center gap-1 text-textColor text-xs">
                        <Location06Icon size={14} strokeWidth={2} /> Mirpur
                      </p>
                      <div className="h-1  w-1 bg-gray-400 rounded-full"></div>
                      <p className="flex items-center text-textColor text-xs">
                        {/* <CalendarRange size={14} className="-mt-0.5" />{" "} */}
                        Dhaka
                      </p>
                    </div>
                  </div>
                </div>
                <button className="text-sm bg-secondaryColor text-zinc-50 h-fit px-3 py-2 rounded-lg mt-">
                  Send Email
                </button>
              </div>
              {/* short details  */}
              <div className="px-4 py-3 border border-gray-200 mt-4 rounded-lg flex justify-between gap-2">
                <div className="text-center">
                  <h5 className="text-[13px] text-headerColor font-medium">
                    Experience
                  </h5>
                  <p className="text-xs text-textColor mt-2">3 Years</p>
                </div>
                <div className="text-center">
                  <h5 className="text-[13px] text-headerColor">
                    Joining Availability
                  </h5>
                  <p className="text-xs text-textColor mt-2">Immediately</p>
                </div>
                <div className="text-center">
                  <h5 className="text-[13px] text-headerColor">
                    Expected Salary
                  </h5>
                  <p className="text-xs text-textColor mt-2">20000</p>
                </div>
              </div>

              {/* tab  */}
            </div>
          </ScrollArea>
          {/* footer  */}
          <DrawerFooter />
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default CustomSheetVaul;

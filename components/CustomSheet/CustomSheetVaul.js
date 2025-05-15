import { Location06Icon } from "hugeicons-react";
import Image from "next/image";
import { Drawer } from "vaul";
import photo from "../../app/assets/avatar/avatar-25.webp";

const CustomSheetVaul = ({ open, setOpen }) => {
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
          <div className="flex-1 w-full mx-auto ">
            {/* header  */}
            <div className="flex items-center gap-3 w-full cursor-pointer ">
              <div className="w-11 h-11 rounded-full bg-gray-200/70 overflow-hidden">
                <Image
                  src={photo}
                  alt="react"
                  className="w-full h-full object-cover"
                />
              </div>
              <div onClick={() => setSheetOpen(!sheetOpen)} className="flex-1">
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
          </div>
          <div>bottom</div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default CustomSheetVaul;

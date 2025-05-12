"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const CustomTab = ({ data, className }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef([]);

  useEffect(() => {
    const activeTabIndex = data?.findIndex((tab) => tab.value === activeTab);
    const activeTabElement = tabRefs.current[activeTabIndex];

    if (activeTabElement) {
      const { offsetWidth, offsetLeft } = activeTabElement;
      setUnderlineStyle({
        width: offsetWidth,
        left: offsetLeft,
      });
    }
  }, [activeTab, data]);

  const onTabChange = (tabValue) => {
    console.log(tabValue);
    setActiveTab(tabValue);
  };

  return (
    <>
      <Tabs
        defaultValue={activeTab}
        onValueChange={onTabChange}
        className={`${className}`}
      >
        <TabsList className="flex justify-start gap-6 relative rounded-none py-1.5 px-2 bg-transparent ">
          {data?.map((tab, i) => {
            return (
              <TabsTrigger
                key={i}
                value={tab?.value}
                ref={(el) => (tabRefs.current[i] = el)}
                className={cn(
                  "focus-visible:ring-0 data-[state=active]:shadow-none px-0"
                )}
              >
                <span
                  className={`${
                    tab?.value === activeTab
                      ? "text-headerColor"
                      : "text-textColor"
                  } transition-`}
                >
                  {tab?.label}
                </span>
                {tab?.total >= 0 && (
                  <span
                    className={`ml-1 min-w-6 min-h-6 flex items-center justify-center  ${
                      tab?.value === activeTab
                        ? `${tab?.activeBackground} text-white`
                        : `${tab?.inActiveBackground} ${tab?.inActiveText}`
                    }  rounded-md text-xs`}
                  >
                    {tab?.total}
                  </span>
                )}
              </TabsTrigger>
            );
          })}

          <motion.div
            className="absolute bottom-0 rounded-full h-[2px] bg-gray-800"
            initial={false}
            animate={underlineStyle}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        </TabsList>
      </Tabs>
      {/* <div className="w-full border-b"></div> */}
    </>
  );
};

export default CustomTab;

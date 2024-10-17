import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/provider/theme-provider";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const ToggleSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const [checked, setChecked] = useState<boolean>(true);

  useEffect(() => {
    if (theme === "dark") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [theme]);

  return (
    <label className="relative inline-block w-[3.2rem] h-7">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={checked}
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span
        className={cn(
          "absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition",
          {
            "bg-gray-700": checked,
            "bg-gray-400": !checked,
          }
        )}
      ></span>
      <span
        className={cn(
          "absolute bottom-[2px] bg-background rounded-full h-6 w-6 transition flex align-middle text-center py-1 justify-center",
          {
            "left-1": checked,
            "left-6 bg-white shadow-none": !checked,
          }
        )}
      >
        <IconContext.Provider value={{ className: "text-gray-500" }}>
          {checked ? <IoMoonOutline /> : <IoSunnyOutline />}
        </IconContext.Provider>
      </span>
    </label>
  );
};

export default ToggleSwitch;

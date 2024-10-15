import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/provider/theme-provider";

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
    <label className="relative inline-block w-12 h-6">
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
            "bg-blue-500": !checked,
          }
        )}
      ></span>
      <span
        className={cn(
          "absolute bottom-[2px] bg-background rounded-full h-5 w-5 transition",
          {
            "left-1": checked,
            "left-6 bg-yellow-500 shadow-none": !checked,
          }
        )}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
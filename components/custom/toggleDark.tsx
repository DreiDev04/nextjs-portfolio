"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const ToggleSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setTheme(checked ? "dark" : "light");
  }, [checked]);

  return (
    <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        onChange={() => setChecked(!checked)}
      />
      <span
        className={cn(
          "absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition ",
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

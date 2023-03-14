"use client";

import { memo, useCallback, useState } from "react";
import TabBarItem from "./TabBarItem";

export interface TabBarProps {
  tabs: { value: string; name: string }[];
  index: number;
  onChange: (index: number) => void;
}

export const TabBar = ({ tabs, index, onChange }: TabBarProps) => {
  const [selectedTab, setSelectedTab] = useState<string>(
    tabs[index] ? tabs[index].value : ""
  );
  const handleSelectTabButton = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const { className } = e.currentTarget;
      const nextIndex = tabs.findIndex(({ value }) =>
        className.match(new RegExp(value, "g"))
      );
      setSelectedTab(tabs[nextIndex].value);
      onChange(nextIndex);
    },
    [tabs]
  );

  return (
    <div className="flex gap-4">
      {tabs.map(({ name, value }) => (
        <TabBarItem
          key={`announce_tab_${value}`}
          name={name}
          value={value}
          isPressed={value === selectedTab}
          onClick={handleSelectTabButton}
        />
      ))}
    </div>
  );
};

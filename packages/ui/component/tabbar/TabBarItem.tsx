import { memo } from "react";

export interface TabBarItemProps {
  isPressed: boolean;
  name: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TabBarItem = ({ isPressed, name, value, onClick }: TabBarItemProps) => {
  return (
    <div
      className={`${value} flex flex-col items-center gap-1`}
      onClick={onClick}
    >
      <p className={`${isPressed ? "font-semibold" : ""}`}>{name}</p>
      <div
        className={`w-full h-0.5 rounded-xl ${
          isPressed ? "bg-secondary" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
};

export default memo(TabBarItem);

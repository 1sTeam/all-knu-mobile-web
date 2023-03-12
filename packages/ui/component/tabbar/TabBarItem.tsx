import { memo } from "react";

export interface TabBarItemProps {
  isPressed: boolean;
  name: string;
  value: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const TabBarItem = ({ isPressed, name, value, onClick }: TabBarItemProps) => {
  return (
    <div className={value} onClick={onClick}>
      <p>{name}</p>
    </div>
  );
};

export default memo(TabBarItem);

import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa";

export interface SelectOptionProps {
  value: string | number;
  name: string | React.ReactNode;
}

export interface SelectProps {
  options?: SelectOptionProps[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <div
      className="w-48 h-10 px-4 py-1 flex items-center rounded-md shadow-md"
      onClick={() => selectRef.current?.focus()}
    >
      <select
        ref={selectRef}
        className="flex-1 text-sm appearance-none outline-none"
        {...rest}
      >
        {options && options.length > 0 ? (
          options.map(({ value, name }) => (
            <option key={`semester_option_${name}`} value={value}>
              {name}
            </option>
          ))
        ) : (
          <option value={""}>항목 없음</option>
        )}
      </select>
      <div className="flex-5">
        <FaAngleDown size={16} />
      </div>
    </div>
  );
};

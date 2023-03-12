import { useEffect } from "react";

export interface SelectOptionProps {
  value: string | number;
  name: string | React.ReactNode;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOptionProps[];
}

export const Select = ({ options, ...rest }: SelectProps) => {
  return (
    <select {...rest}>
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
  );
};

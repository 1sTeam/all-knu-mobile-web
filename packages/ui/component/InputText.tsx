import { useRef, useState } from "react";
import { Box } from "./Box";

export interface InputTextProps {
  value: string;
  icon?: React.ReactNode;
  width?: string;
  primary?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  icon,
  width = "100%",
  value,
  primary = false,
  placeholder,
  onChange,
}: InputTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [_, setIsFocus] = useState<boolean>(false);

  const dynamicStyle = primary ? "shadow-md" : "border-2 border-gray";

  return (
    <div
      style={{ width }}
      className={`h-12 px-4 py-1 gap-4 flex rounded-xl items-center ${dynamicStyle}`}
      onClick={() => inputRef.current?.focus()}
    >
      {icon ? <div className="">{icon}</div> : null}
      <input
        type="text"
        ref={inputRef}
        className={`outline-none ${icon ? "flex-1" : ""}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </div>
  );
};

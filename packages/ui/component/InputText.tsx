export interface InputTextProps {
  icon?: React.ReactNode;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  icon,
  value,
  placeholder,
  onChange,
}: InputTextProps) => {
  return (
    <div>
      <div>{icon ?? null}</div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

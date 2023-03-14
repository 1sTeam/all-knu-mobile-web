export interface ButtonProps {
  label: string;
  primary?: boolean;
  disabled?: boolean;
  size: "sm" | "md" | "lg";
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label,
  disabled = false,
  size,
  onClick,
  ...rest
}: ButtonProps) => {
  const defaultSize = size === "sm" ? "h-10" : size === "lg" ? " h-14" : "h-12";

  const defaultStyle = primary
    ? `bg-primary text-white`
    : `bg-transparent text-secondary border-2 border-secondary`;

  return (
    <button
      type="button"
      className={`rounded-lg px-4 ${defaultSize} ${defaultStyle}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

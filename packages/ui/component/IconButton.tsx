interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  primary?: boolean;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  label,
  primary = false,
  onClick,
}: IconButtonProps) => {
  return (
    <div
      className="w-14 h-14 flex flex-col justify-center items-center gap-2"
      onClick={onClick}
    >
      <div
        className={`w-8 h-8 rounded flex justify-center items-center ${
          primary ? `bg-primary` : `border-secondary border-2 bg-transparent`
        }`}
      >
        {icon}
      </div>
      {label ? <span className="text-xxs">{label}</span> : null}
    </div>
  );
};

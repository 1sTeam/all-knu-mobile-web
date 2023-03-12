interface IconButtonProps {
  icon: React.ReactNode;
  title?: string;
  backgroundColor?: string;
  isBorder?: boolean;
  onClick?: () => void;
}

export const IconButton = ({
  icon,
  title,
  backgroundColor,
  isBorder,
  onClick,
}: IconButtonProps) => {
  return (
    <div onClick={onClick}>
      <div>{icon}</div>
      {title ? <p>{title}</p> : null}
    </div>
  );
};

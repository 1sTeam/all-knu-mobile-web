export interface BoxProps {
  width: string;
  height: string;
  primary?: boolean;
  children?: React.ReactNode;
}

export const Box = ({ width, height, primary = false, children }: BoxProps) => {
  const defaultStyle = primary ? "bg-white shadow-md" : "bg-sub";
  return (
    <div style={{ width, height }} className={`p-4 rounded-lg ${defaultStyle}`}>
      {children ?? null}
    </div>
  );
};

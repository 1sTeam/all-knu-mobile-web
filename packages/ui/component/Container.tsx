export interface ContainerProps {
  title?: string;
  children: React.ReactNode;
}

export const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-4">
      {title ? <h2 className="font-bold text-xl">{title}</h2> : null}
      {children}
    </div>
  );
};

export interface ContainerProps {
  title?: string;
  children: React.ReactNode;
}

export const Container = ({ title, children }: ContainerProps) => {
  return (
    <div>
      {title ? <h2>{title}</h2> : null}
      {children}
    </div>
  );
};

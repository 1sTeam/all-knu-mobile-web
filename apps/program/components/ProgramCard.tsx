interface ProgramCardProps {
  size: "lg" | "md";
  title: string;
  operationPeriodStart: string;
  operationPeriodEnd: string;
  department: string;
  link: string;
}

const ProgramCard = ({
  size,
  title,
  operationPeriodEnd,
  operationPeriodStart,
  department,
  link,
}: ProgramCardProps) => {
  const [periodStart, periodEnd] = [
    operationPeriodStart,
    operationPeriodEnd,
  ].map((v) => v.split("T")[0]);

  return (
    <div>
      <div>Image</div>
      <div>
        <p>{department}</p>
        <p>{title}</p>
        <p>모집기간: ~ {periodStart}</p>
        <p>
          활동기간: {periodStart} ~ {periodEnd}
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;

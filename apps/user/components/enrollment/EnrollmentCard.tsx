import { UserEnrollment } from "../../hooks/queryUserEnrollment";

interface EnrollmentCardProps extends UserEnrollment {}

const EnrollmentCard = ({
  date,
  bank,
  amount,
  dividedAmount,
}: EnrollmentCardProps) => {
  return (
    <div>
      <p>{date}</p>
      <p>{bank}</p>
      <p>{amount}</p>
      <p>{dividedAmount}</p>
    </div>
  );
};

export default EnrollmentCard;

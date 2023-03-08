import { UserScholarship } from "../../hooks/queryUserScholarship";

interface ScholarshipItemProps extends UserScholarship {}

const ScholarshipItem = ({
  amount,
  department,
  year,
  grade,
  semester,
  describe,
}: ScholarshipItemProps) => {
  return (
    <div>
      <p>{amount}</p>
      <p>{department}</p>
      <p>{year}</p>
      <p>{grade}</p>
      <p>{semester}</p>
      <p>{describe}</p>
    </div>
  );
};

export default ScholarshipItem;

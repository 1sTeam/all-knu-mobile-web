import { memo } from "react";
import { UserEnrollment } from "../../hooks/queryUserEnrollment";

interface EnrollmentMentionProps {
  status: UserEnrollment["dividedPay"];
}

const EnrollmentMention = ({ status }: EnrollmentMentionProps) => {
  return status === "완납" ? <div>완납 완료</div> : <div>납부 중</div>;
};

export default memo(EnrollmentMention);

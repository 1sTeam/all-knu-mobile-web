import moment from "moment";

export interface SurveyItemProps {
  number: string;
  name: string;
  operationEndDate: string;
  satisfactionEndDate: string;
  status: string;
  link: string | null;
}

const SurveyItem = ({
  name,
  operationEndDate,
  satisfactionEndDate,
  status,
  link,
}: SurveyItemProps) => {
  const isDisable = !link ? false : true;
  const isDatePass = moment(satisfactionEndDate).diff(moment()) < 0;
  const isAvailable =
    status === "미응답" && !isDatePass
      ? "클릭해서 만족도 조사 참여"
      : status === "미응답" && isDatePass
      ? "참여 기간 종료"
      : "참여 완료";

  return (
    <div>
      <div>
        <p>{`${operationEndDate} ~ ${satisfactionEndDate}`}</p>
        <p>{name}</p>
        <p>{isAvailable}</p>
      </div>
      <div></div>
    </div>
  );
};

export default SurveyItem;

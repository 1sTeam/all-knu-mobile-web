import moment from "moment";
import MileageRank from "./MileageRank";

interface MileageCardProps {
  score?: number;
}

const MileageCard = ({ score }: MileageCardProps) => {
  const year = String(moment().year());
  return (
    <>
      <MileageRank score={score} />
      <div>
        <p>2000 홍길동</p>
        <p>{score}점</p>
        <p>{`(${year}년도 기준)`}</p>
      </div>
    </>
  );
};

export default MileageCard;

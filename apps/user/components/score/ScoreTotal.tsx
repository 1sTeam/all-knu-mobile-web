import { UserScoreTotal } from "../../app/score/page";
import ScoreTotalItem from "./ScoreTotalItem";

interface ScoreTotalProps extends UserScoreTotal {}

const ScoreTotal = ({
  totalAverageScore = "0",
  totalUnit = "0",
  currentAverageScore = 0,
  currentUnit = 0,
}: ScoreTotalProps) => {
  const items = [
    { title: "해당학기 취득학점", value: currentUnit },
    { title: "해당학기 평균점수", value: currentAverageScore },
    { title: "전체학기 취득학점", value: totalUnit },
    { title: "전체학기 평균점수", value: totalAverageScore },
  ];
  return (
    <div>
      {items.map((props) => (
        <ScoreTotalItem key={`score_total_${props.title}`} {...props} />
      ))}
    </div>
  );
};

export default ScoreTotal;

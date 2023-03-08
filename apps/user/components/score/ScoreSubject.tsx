import { UserScoreDetail } from "../../app/score/page";

interface ScoreSubjectProps extends UserScoreDetail {}

const ScoreSubject = ({
  majorType,
  subjectName,
  unit,
  score,
}: ScoreSubjectProps) => {
  return (
    <div>
      <p>{majorType}</p>
      <p>{subjectName}</p>
      <p>{unit}</p>
      <p>{score}</p>
    </div>
  );
};

export default ScoreSubject;

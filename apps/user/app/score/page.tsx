"use client";

import { queryUserScore } from "../../hooks/queryUserScore";
import { useRecoilValue } from "recoil";
import { yearSemesterStore } from "../../store/yearSemester";
import { Container } from "ui";
import ScoreTotal from "../../components/score/ScoreTotal";
import ScoreSubject from "../../components/score/ScoreSubject";

export interface UserScoreTotal {
  totalAverageScore?: string;
  totalUnit?: string;
  currentAverageScore?: number;
  currentUnit?: number;
}
export interface UserScoreDetail {
  majorType: string;
  subjectName: string;
  unit: number;
  score: string;
}

export interface UserScoreConvert {
  total: UserScoreTotal;
  detail: UserScoreDetail[];
}

const Score = () => {
  const { year, semester } = useRecoilValue(yearSemesterStore);
  const {
    data: { total, detail },
  } = queryUserScore({
    year,
    semester,
  });

  return (
    <>
      <Container title="상세내역">
        <ScoreTotal {...total} />
      </Container>
      <Container title="취득학점 정보">
        {detail.map((props: any) => (
          <ScoreSubject
            key={`score_subject_item_${props.subjectName}`}
            {...props}
          />
        ))}
      </Container>
    </>
  );
};

export default Score;

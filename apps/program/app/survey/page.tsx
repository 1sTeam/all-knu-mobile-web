"use client";

import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetRecoilState } from "recoil";
import { Container } from "ui";
import SurveyItem, {
  SurveyItemProps,
} from "../../components/survey/SurveyItem";
import { queryProgramSurvey } from "../../hooks/queryProgramSurvey";
import { sessionStore } from "../../store/session";

const Survey = () => {
  const {
    data: groups,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = queryProgramSurvey();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && (hasNextPage || isFetchingNextPage)) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <Container title="상세 내역">
      {groups?.map(({ data }) =>
        data.map((props: SurveyItemProps) => (
          <SurveyItem key={`survey_item_${props.number}`} {...props} />
        ))
      )}
      <div ref={ref}>{hasNextPage ? <p>go next</p> : <p>last</p>}</div>
    </Container>
  );
};

export default Survey;

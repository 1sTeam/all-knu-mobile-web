"use client";

import { useRecoilValue } from "recoil";
import { Container } from "ui";
import ScholarshipItem from "../../components/scholarship/ScholarshipItem";
import { queryScholarship } from "../../hooks/queryUserScholarship";
import { yearSemesterStore } from "../../store/yearSemester";

const Scholarship = () => {
  const { year, semester } = useRecoilValue(yearSemesterStore);
  const { data = [] } = queryScholarship({ year, semester });
  return (
    <Container title="상세 내역">
      {data.map((props) => (
        <ScholarshipItem {...props} />
      ))}
    </Container>
  );
};

export default Scholarship;

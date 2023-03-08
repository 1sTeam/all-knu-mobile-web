"use client";

import { useRecoilValue } from "recoil";
import { Container } from "ui";
import EnrollmentCard from "../../components/enrollment/EnrollmentCard";
import EnrollmentMention from "../../components/enrollment/EnrollmentMention";
import { queryUserEnrollment } from "../../hooks/queryUserEnrollment";
import { yearSemesterStore } from "../../store/yearSemester";

const Enrollment = () => {
  const { year, semester } = useRecoilValue(yearSemesterStore);
  const { data } = queryUserEnrollment({ year, semester });

  return (
    <Container title="상세 내역">
      <EnrollmentMention status={data?.dividedPay} />
      <EnrollmentCard {...data} />
    </Container>
  );
};

export default Enrollment;

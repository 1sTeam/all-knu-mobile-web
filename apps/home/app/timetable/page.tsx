"use client";

import { Container } from "ui";
import SchoolTimeTable from "../../components/timetable/SchoolTimeTable";
import { queryTimeTable } from "../../hooks/queryTimeTable";

const TimeTablePage = () => {
  const { data } = queryTimeTable();
  return (
    <>
      <Container title="전체">
        <SchoolTimeTable events={data} />
      </Container>
      <Container title="요일별">
        <div></div>
      </Container>
    </>
  );
};

export default TimeTablePage;

"use client";

import { Container } from "ui";
import HorizontalList from "../components/HorizontalList";
import MileageCard from "../components/main/MileageCard";
import { queryProgramMileage } from "../hooks/queryProgramMileage";
import { queryProgramParticipate } from "../hooks/queryProgramParticipate";
import { queryProgramSearch } from "../hooks/queryProgramSearch";

const Home = () => {
  const { data: mileage } = queryProgramMileage();
  const currentProgramQuery = queryProgramSearch("", "RECURIT");
  const participateProgramQuery = queryProgramParticipate();

  return (
    <>
      <Container title="마일리지 정보">
        <MileageCard score={mileage} />
      </Container>
      <Container title="모집중 프로그램">
        <HorizontalList {...currentProgramQuery} />
      </Container>
      <Container title="참여한 프로그램">
        <HorizontalList {...participateProgramQuery} />
      </Container>
    </>
  );
};

export default Home;

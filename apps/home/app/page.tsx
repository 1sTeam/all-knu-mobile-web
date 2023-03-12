"use client";

import { Container } from "ui";
import BusInfo from "../components/bus/BusInfo";
import Cafetria from "../components/cafeteria/Cafetria";
import SchoolCalendar from "../components/calendar/SchoolCalendar";
import Shortcuts from "../components/shortcut/Shortcuts";
import StudentCard from "../components/student/StudentCard";

const Home = () => {
  return (
    <>
      <Container title="로그인 정보">
        <StudentCard
          student={{ name: "홍길동", id: "202001011", major: "ICT공학융학부" }}
        />
      </Container>
      <Container title="학교 기능">
        <Shortcuts />
      </Container>
      <Container title="달구지 정보">
        <BusInfo />
      </Container>
      <Container title="오늘의 학식">
        <Cafetria />
      </Container>
      <Container title="학사 일정">
        <SchoolCalendar />
      </Container>
    </>
  );
};

export default Home;

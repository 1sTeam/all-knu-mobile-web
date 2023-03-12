import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";
import { convertTimeTableData } from "../utils/convertTimeTableData";

export const queryTimeTable = () => {
  const session = useRecoilValue(sessionStore);
  const { data, isFetching, isError, refetch } = useQuery(
    ["timetable"],
    async () => {
      return [
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "1a",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "09:00-09:25",
          time_day5: "자기주도프로젝트II 후B102",
          time_day4: null,
        },
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "1b",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "09:25-09:50",
          time_day5: "자기주도프로젝트II 후B102",
          time_day4: null,
        },
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "2a",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "09:50-10:15",
          time_day5: "자기주도프로젝트II 후B102",
          time_day4: null,
        },
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "2b",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "10:25-10:50",
          time_day5: "자기주도프로젝트II 후B102",
          time_day4: null,
        },
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "3a",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "10:50-11:15",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "객체지향프로그래밍 후B103",
          time_code: "3b",
          time_day3: "현대암호학 이103",
          time_day2: "데이터베이스 이311",
          real_time: "11:15-11:40",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "4a",
          time_day3: null,
          time_day2: "데이터베이스 이311",
          real_time: "11:50-12:15",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "4b",
          time_day3: null,
          time_day2: "데이터베이스 이311",
          real_time: "12:15-12:40",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "5a",
          time_day3: null,
          time_day2: null,
          real_time: "12:40-13:05",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "5b",
          time_day3: null,
          time_day2: null,
          real_time: "13:15-13:40",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "6a",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "13:40-14:05",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: "가상현실응용 이109",
          time_code: "6b",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "14:05-14:30",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "7a",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "14:40-15:05",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "7b",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "15:05-15:30",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "8a",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "15:30-15:55",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "8b",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "16:05-16:30",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "9a",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "16:30-16:55",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "9b",
          time_day3: "운영체제 후B102",
          time_day2: null,
          real_time: "16:55-17:20",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "13",
          time_day3: "데이터분석의기초 샬601",
          time_day2: null,
          real_time: "20:10-21:00",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "14",
          time_day3: "데이터분석의기초 샬601",
          time_day2: null,
          real_time: "21:00-21:50",
          time_day5: null,
          time_day4: null,
        },
        {
          time_day1: null,
          time_code: "15",
          time_day3: "데이터분석의기초 샬601",
          time_day2: null,
          real_time: "21:50-22:40",
          time_day5: null,
          time_day4: null,
        },
      ];
      // try {
      //   const { data } = await axios({
      //     url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/timetable`,
      //     method: "POST",
      //     headers: {
      //       "Content-Type": `application/json`,
      //     },
      //     data: {
      //       sessionInfo: session,
      //     },
      //   });
      //   return data.list;
      // } catch (e) {
      //   return Promise.reject(e);
      // }
    },
    {
      initialData: [],
      enabled: session ? true : false,
      retry: false,
      staleTime: 30000,
      refetchOnWindowFocus: false,
      select: convertTimeTableData,
    }
  );

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  return { data, isFetching, isError };
};

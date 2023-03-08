import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";
import { YearSemester } from "../store/yearSemester";

export interface UserScholarship {
  amount: string;
  department: string;
  year: string;
  grade: string;
  semester: string;
  describe: string;
}

export const queryScholarship = ({ year, semester }: YearSemester) => {
  const session = useRecoilValue(sessionStore);
  const { data, isError, isFetching, refetch } = useQuery<UserScholarship[]>(
    ["scholarship", { year, semester }],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/scholarship`,
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            sessionInfo: session,
            year,
            semester,
          },
        });
        return data.list;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      initialData: [],
      enabled: session ? true : false,
      retry: false,
      staleTime: 30000,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (session && year && semester) {
      refetch();
    }
  }, [year, semester]);

  return { data, isError, isFetching };
};

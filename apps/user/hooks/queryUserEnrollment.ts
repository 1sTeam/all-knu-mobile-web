import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";
import { YearSemester } from "../store/yearSemester";

export interface UserEnrollment {
  date?: string;
  bank?: string;
  bankNumber?: string;
  term?: string;
  amount?: string;
  dividedAmount?: string;
  dividedPay?: string;
}
export const queryUserEnrollment = ({ year, semester }: YearSemester) => {
  const session = useRecoilValue(sessionStore);
  const { data, isError, isFetching, refetch } = useQuery<UserEnrollment>(
    ["enrollment", { year, semester }],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/tuition`,
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
      initialData: {} as UserEnrollment,
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

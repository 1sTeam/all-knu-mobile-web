import axios from "axios";
import moment from "moment";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";

export const queryProgramMileage = () => {
  const session = useRecoilValue(sessionStore);
  const year = String(moment().year());

  const { data, isError, isFetching, refetch } = useQuery(
    ["mileage", year],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/verius/mileage`,
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            sessionInfo: session,
          },
        });
        return data.list;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      enabled: session ? true : false,
      retry: false,
      refetchOnWindowFocus: false,
      select: (data) => {
        return data !== null && data.hasOwnProperty(year)
          ? Object.values(data[year]).reduce((a: number, v: any) => a + v, 0)
          : 0;
      },
    }
  );

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  return { data, isError, isFetching };
};

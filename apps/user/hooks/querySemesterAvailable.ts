import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";

export const querySemesterAvailable = () => {
  const session = useRecoilValue(sessionStore);

  const { data, isError, isFetching, refetch } = useQuery(
    ["semester"],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/period`,
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            sessionInfo: session,
          },
        });
        return data.list.data;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      initialData: [],
      enabled: session ? true : false,
      retry: false,
      staleTime: 6000,
      refetchOnWindowFocus: false,
      select: (items) =>
        items.map(
          ({
            schl_smst,
            schl_year,
          }: {
            schl_year: string;
            schl_smst: string;
          }) => ({
            value: JSON.stringify({ year: schl_year, semester: schl_smst }),
            name: `${schl_year}학년 ${schl_smst}학기`,
          })
        ),
    }
  );

  useEffect(() => {
    refetch();
  }, [session]);

  return { data, isError, isFetching };
};

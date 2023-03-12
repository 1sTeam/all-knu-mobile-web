import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

export interface BusTime {
  station: string;
  stopTime: { time: string; destination: string }[];
}

export const queryBusTime = () => {
  const { data, isFetching, isError } = useQuery<BusTime[]>(
    ["bustime"],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/api/v2/knu/shuttle/timetable`,
          method: "GET",
          headers: {
            "Content-Type": `application/json`,
          },
        });
        return data.list;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      initialData: [],
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
  return { data, isFetching, isError };
};

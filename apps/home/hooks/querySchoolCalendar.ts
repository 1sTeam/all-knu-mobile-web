import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

export const querySchoolCalendar = () => {
  const { data, isFetching, isError } = useQuery(
    ["calendar"],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/crawling/calendar`,
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

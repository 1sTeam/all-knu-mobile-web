import axios from "axios";
import moment from "moment";
import { useQuery } from "react-query";

export const queryCafetria = () => {
  const today = moment().format("YYYY-MM-DD");
  const { data, isFetching, isError } = useQuery(
    ["cafetria", today],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/restaurant/menu`,
          method: "GET",
          headers: {
            "Content-Type": `application/json`,
          },
          params: {
            date: today,
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

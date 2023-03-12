import axios from "axios";
import { useQuery } from "react-query";

export interface MapMarker {
  id: number;
  type: "normal" | "detail" | "summary";
  title: string;
  subTitle: string;
  floor: string;
  room: string;
  name: string;
  icon: string;
  image: string;
  location: {
    lat: number;
    lon: number;
  };
  more: {} | null;
}

export const queryMap = () => {
  const { data, isFetching, isError } = useQuery<MapMarker[]>(
    ["maps"],
    async () => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/api/v1/knu/map/markers`,
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

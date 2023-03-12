import axios from "axios";
import { useInfiniteQuery } from "react-query";

export type AnnounceTypeMajor = string;
export type AnnounceTypeEvent = "ALL" | "CAMPUS" | "SUBURBS";
export type AnnounceTypeSchool =
  | "ALL"
  | "ACADEMIC"
  | "SCHOLARSHIP"
  | "LEARNING"
  | "EMPLOY";

export const queryAnnounce = <T>(tab: string, url: string, type: T) => {
  const {
    data,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery(
    ["announcement", { tab, type }],
    async ({ pageParam = 1 }) => {
      const isMajor = url === "/crawling/notice/major";
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}${url}${
            isMajor ? "" : `/${type}/${pageParam}`
          }`,
          method: "GET",
          headers: {
            "Content-Type": `application/json`,
          },
          params: {
            type,
            page: pageParam,
          },
        });
        return {
          data: data.list,
          nextPage: pageParam + 1,
        };
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
      retry: 1,
      refetchOnWindowFocus: false,
    }
  );
  return {
    data: data?.pages,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

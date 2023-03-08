import axios from "axios";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";

export const queryProgramSurvey = () => {
  const session = useRecoilValue(sessionStore);
  const {
    data,
    error,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery(
    ["survey"],
    async ({ pageParam = 1 }) => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/verius/satisfaction`,
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            sessionInfo: session,
            page: pageParam,
          },
        });
        return {
          data: data.list,
          nextPage: pageParam + 1,
          isLast: data.list.find((item: any) => item.number === "1")
            ? true
            : false,
        };
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      retry: 1,
      staleTime: 30000,
    }
  );

  useEffect(() => {
    if (session) {
      refetch({ refetchPage: (_, index) => index === 0 });
    }
  }, [session]);

  return {
    data: data?.pages,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

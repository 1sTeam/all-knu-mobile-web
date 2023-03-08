import axios from "axios";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { sessionStore } from "../store/session";

export const queryProgramParticipate = () => {
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
    ["participate"],
    async ({ pageParam = 1 }) => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/knu/verius/program/participate`,
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
          isLast: data.list.length < 5 ? true : false,
        };
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
      retry: 1,
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

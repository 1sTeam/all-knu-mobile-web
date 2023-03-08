import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

export const queryProgramSearch = (value: string, mode = "DEFAULT") => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["search", mode, value],
    async ({ pageParam = 1 }) => {
      try {
        const { data } = await axios({
          url: `${process.env.NEXT_PUBLIC_ENDPOINT}/sync/verius/program/${mode}`,
          method: "GET",
          headers: {
            "Content-Type": `application/json`,
          },
          params: {
            page: pageParam,
            size: 5,
          },
        });
        return {
          data: data.list.content,
          nextPage: pageParam + 1,
          isLast: data.list.last,
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

  return {
    data: data?.pages,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  };
};

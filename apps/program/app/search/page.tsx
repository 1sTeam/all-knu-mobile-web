"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { queryProgramSearch } from "../../hooks/queryProgramSearch";
import searchStore from "../../store/search";

const Search = () => {
  const searchValue = useRecoilValue(searchStore);
  const { data, hasNextPage, fetchNextPage } = queryProgramSearch(searchValue);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <>
      {data?.map((v) => (
        <p>v</p>
      ))}
      <div ref={ref}>{hasNextPage ? <p>go next</p> : <p>last</p>}</div>
    </>
  );
};

export default Search;

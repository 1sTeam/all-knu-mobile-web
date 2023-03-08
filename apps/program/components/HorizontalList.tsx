import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProgramCard from "./ProgramCard";

interface HorizontalListProps {
  data:
    | {
        data: any;
        nextPage: any;
        isLast: boolean;
      }[]
    | undefined;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

const HorizontalList = ({
  data,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: HorizontalListProps) => {
  const { ref, inView } = useInView({ rootMargin: "100% 0% 100% 0%" });

  useEffect(() => {
    if (inView && (hasNextPage || isFetchingNextPage)) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div style={{ display: "flex", overflow: "auto" }}>
      {data?.map((group) =>
        group.data.map((v: any) => {
          return (
            <ProgramCard key={`program_item_${v.number}`} size="md" {...v} />
          );
        })
      )}
      <div ref={ref}>{hasNextPage ? <p>go next</p> : <p>last</p>}</div>
    </div>
  );
};

export default HorizontalList;

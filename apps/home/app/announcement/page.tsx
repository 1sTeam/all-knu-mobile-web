"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";
import { queryAnnounce } from "../../hooks/queryAnnounce";
import { announceIndexStore, tabMetaData } from "../../store/announce";

const Announcement = () => {
  const { tab, select } = useRecoilValue(announceIndexStore);
  const {
    data: group,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = queryAnnounce(
    tabMetaData[tab].value,
    tabMetaData[tab].url,
    tabMetaData[tab].type[select].value
  );
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && (hasNextPage || isFetchingNextPage)) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <div style={{ overflow: "scroll" }}>
      {group?.map(({ data }) =>
        data.map((v, idx) => (
          <p
            key={`announce_${tabMetaData[tab].value}_${
              tabMetaData[tab].type[select].value
            }_${v.number ?? idx}`}
          >
            {JSON.stringify(v)}
          </p>
        ))
      )}
      <div ref={ref}>{hasNextPage ? <p>go next</p> : <p>last</p>}</div>
    </div>
  );
};

export default Announcement;

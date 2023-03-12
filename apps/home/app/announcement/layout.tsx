"use client";

import { ChangeEvent, ChangeEventHandler, useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Container, TabBar, Select } from "ui";
import {
  announceIndexStore,
  announceSelectStore,
  tabMetaData,
} from "../../store/announce";

export default ({ children }: { children: React.ReactNode }) => {
  const [{ select, tab }, setIndex] = useRecoilState(announceIndexStore);

  const selectData = useRecoilValue(announceSelectStore);
  const tabData = tabMetaData.map(({ value, name }) => ({ value, name }));

  const handleTabChange = useCallback((index: number) => {
    setIndex({ tab: index, select: 0 });
  }, []);

  const handleSelectChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setIndex((prev) => ({
        ...prev,
        select: selectData.findIndex(({ value }) => value === e.target.value),
      }));
    },
    [tab]
  );

  return (
    <Container title="학교 공지">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
        }}
      >
        <TabBar tabs={tabData} index={tab} onChange={handleTabChange} />
        <Select
          options={selectData}
          value={selectData[select].value}
          onChange={handleSelectChange}
        />
      </div>
      {children}
    </Container>
  );
};

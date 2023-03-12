import React, { useCallback, useEffect, useState } from "react";
import { TabBar } from "ui";
import { querySchoolCalendar } from "../../hooks/querySchoolCalendar";

const SchoolCalendar = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [tabList, setTabList] = useState<{ value: string; name: string }[]>([]);
  const [currentView, setCurrentView] = useState([]);
  const { data } = querySchoolCalendar();

  useEffect(() => {
    if (data.length !== 0) {
      const convertArr = Object.keys(data).map((month, idx) => ({
        value: month,
        name: `${idx + 1}월`,
      }));
      setTabList(convertArr);
      setCurrentView(data[convertArr[0].value]);
    }
  }, [data]);

  useEffect(() => {
    if (tabList[selectIndex]) {
      setCurrentView(data[tabList[selectIndex].value]);
    }
  }, [selectIndex]);

  return (
    <>
      <TabBar tabs={tabList} index={selectIndex} onChange={setSelectIndex} />
      <div>
        {currentView.map((value: any, idx) => {
          return (
            <p
              key={`calendar_${idx + 1}월_${value.content}`}
            >{`${JSON.stringify(value)}`}</p>
          );
        })}
      </div>
    </>
  );
};

export default SchoolCalendar;

import { useEffect, useState } from "react";
import { TabBar } from "ui";
import { queryCafetria } from "../../hooks/queryCafetria";
import CafetriaItem from "./CafetriaItem";

const dayOfCafetria = ["breakfast", "lunch", "dinner"];

const Cafetria = () => {
  const [selectIndex, setSelectIndex] = useState<number>(0);
  const [tabList, setTabList] = useState([]);
  const { data } = queryCafetria();

  useEffect(() => {
    const convertArr = data.map((obj: any) => ({
      value: obj.name,
      name: obj.name,
    }));
    setTabList(convertArr);
  }, [data]);

  return (
    <>
      <TabBar tabs={tabList} index={selectIndex} onChange={setSelectIndex} />
      <div style={{ display: "flex", gap: 8 }}>
        {data[selectIndex]
          ? Object.entries<string[]>(data[selectIndex]).map(([key, value]) => {
              if (key !== "name") {
                return (
                  <CafetriaItem
                    key={`cafe_${data[selectIndex].name}_${key}`}
                    menu={value}
                    title={key}
                  />
                );
              }
            })
          : null}
      </div>
    </>
  );
};

export default Cafetria;

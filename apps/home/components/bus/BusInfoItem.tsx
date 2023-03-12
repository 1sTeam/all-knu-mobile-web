import { useEffect, useRef, useState } from "react";
import { busAvailable, nextBusTime } from "../../utils/busInfoUtils";

interface BusInfoItemProps {
  direction: "상행" | "하행";
  timeList: string[];
}

const BusInfoItem = ({ timeList, direction }: BusInfoItemProps) => {
  const timerRef = useRef<NodeJS.Timer>();
  const isBusAvailable = useRef<boolean>(busAvailable());
  const [{ minute, second }, setItemInfo] = useState({
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const nextBusTimeResult = nextBusTime(timeList);
      if (isBusAvailable.current && nextBusTimeResult) {
        setItemInfo({
          minute: nextBusTimeResult.minute,
          second: nextBusTimeResult.second,
        });
      }
      isBusAvailable.current = busAvailable();
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div style={{ display: "flex", gap: 4 }}>
      <p>{direction}</p>
      <p>
        {minute === 0 && second === 0 ? "운행종료" : `${minute}분 ${second}초`}
      </p>
    </div>
  );
};

export default BusInfoItem;

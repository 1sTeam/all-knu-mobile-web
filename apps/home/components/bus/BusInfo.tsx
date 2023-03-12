import { Fragment, useEffect, useState } from "react";
import { BusTime, queryBusTime } from "../../hooks/queryBusTime";
import BusInfoItem from "./BusInfoItem";

const CENTER_BUS_STATION = "이공관";

const BusInfo = () => {
  const [stationInfo, setStation] = useState<{
    [key: string]: { upDirection: []; downDirection: [] };
  }>({});
  const { data = [] } = queryBusTime();

  useEffect(() => {
    if (data.length !== 0) {
      let temp: any = {};
      data.map(({ station, stopTime }) => {
        if (station === CENTER_BUS_STATION) {
          stopTime.map(
            ({ time, destination }) =>
              (temp[destination] = {
                ...temp[destination],
                downDirection: [...temp[destination].downDirection, time],
              })
          );
          return;
        }
        temp[station] = {
          upDirection: stopTime.map(({ time }) => time),
          downDirection: [],
        };
      });
      setStation(temp);
    }
  }, [data]);

  return (
    <div>
      <div></div>
      <div>
        {Object.entries(stationInfo).map(
          ([station, { upDirection, downDirection }]) => (
            <Fragment key={`bus_time_info_${station}`}>
              <BusInfoItem direction="상행" timeList={upDirection} />
              <BusInfoItem direction="하행" timeList={downDirection} />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default BusInfo;

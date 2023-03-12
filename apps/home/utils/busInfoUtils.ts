import moment from "moment";

const DEFAULT_START_TIME = "07:00:00";
const DEFAULT_STOP_TIME = "17:00:00";

export const busAvailable = () => {
  const today = moment().format("YYYY-MM-DD");
  return (
    moment(today + `T${DEFAULT_START_TIME}`).diff(moment(), "second") < 0 &&
    moment(today + `T${DEFAULT_STOP_TIME}`).diff(moment(), "second") > 0 &&
    moment().day() !== 0 &&
    moment().day() !== 6
  );
};

export const nextBusTime = (timeList: string[]) => {
  const today = moment().format("YYYY-MM-DD");
  const nextTime = timeList.find(
    (time) => moment(today + `T${time}`).diff(moment(), "second") > 0
  );
  if (nextTime) {
    const time = moment(today + `T${nextTime}`).diff(moment(), "second");
    const minute = Math.floor(time / 60);
    const second = time - minute;
    return { minute, second };
  }
  return null;
};

export interface TimeTableAPI {
  time_day1: string | null;
  time_day2: string | null;
  time_day3: string | null;
  time_day4: string | null;
  time_day5: string | null;
  time_code: string;
  real_time: string;
}

const isInputMatchWithBefore = (beforeData: any, lectureName: string) => {
  return beforeData.name === lectureName;
};

export const convertTimeTableData = (data: TimeTableAPI[]) => {
  const weekdaysData = [
    { name: "monday", key: "time_day1" as keyof TimeTableAPI },
    { name: "tuesday", key: "time_day2" as keyof TimeTableAPI },
    { name: "wednesday", key: "time_day3" as keyof TimeTableAPI },
    { name: "thursday", key: "time_day4" as keyof TimeTableAPI },
    { name: "friday", key: "time_day5" as keyof TimeTableAPI },
  ];
  const weekdays = new Map();
  weekdaysData.map(({ name }) => weekdays.set(name, []));

  data.map((obj) => {
    const [startTime, endTime] = obj.real_time.split("-");
    weekdaysData.map(({ name, key }) => {
      if (obj[key]) {
        //@ts-ignore
        const [lectureName, lectureLocation] = obj[key].split(" ");
        const dayArr = weekdays.get(name);
        const lectureData = {
          name: lectureName,
          location: lectureLocation,
          startTime: startTime + ":00",
          endTime: endTime + ":00",
        };
        if (
          dayArr.length !== 0 &&
          isInputMatchWithBefore(dayArr[dayArr.length - 1], lectureName)
        ) {
          dayArr[dayArr.length - 1] = {
            ...dayArr[dayArr.length - 1],
            endTime: lectureData.endTime,
          };
          return weekdays.set(name, dayArr);
        }
        return weekdays.set(name, [...dayArr, lectureData]);
      }
    });
  });

  const result: any = {};
  const resultOfArray = Array.from(weekdays, ([key, value], idx) => ({
    key,
    value: value.map((obj: any, ix: number) => ({
      ...obj,
      id: idx + ix,
      startTime: new Date("2018-02-23T" + obj.startTime),
      endTime: new Date("2018-02-23T" + obj.endTime),
    })),
  }));

  resultOfArray.map(({ key, value }) => (result[key] = value));

  return result;
};

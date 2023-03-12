import Timetable from "react-timetable-events";
import { Events } from "react-timetable-events/dist/types";

interface SchoolTimeTableProps {
  events: Events | undefined;
}

const SchoolTimeTable = ({ events }: SchoolTimeTableProps) => {
  return events && Object.keys(events).length !== 0 ? (
    <Timetable
      events={events}
      style={{ height: "500px" }}
      hoursInterval={{ from: 9, to: 24 }}
    />
  ) : null;
};

export default SchoolTimeTable;

import { ChangeEvent, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Container, Select } from "ui";
import { querySemesterAvailable } from "../hooks/querySemesterAvailable";
import { sessionStore } from "../store/session";
import { yearSemesterStore } from "../store/yearSemester";

const SemesterSelection = () => {
  const [yearSemester, setYearSemester] = useRecoilState(yearSemesterStore);
  const { data } = querySemesterAvailable();

  const onYearSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { year, semester } = JSON.parse(e.target.value);
    setYearSemester({ year, semester });
  };

  useEffect(() => {
    if (data.length > 0 && (!yearSemester.semester || !yearSemester.year)) {
      const { year, semester } = JSON.parse(data[0].value);
      setYearSemester({ year, semester });
    }
  }, [data]);

  return (
    <Container title="학기 선택">
      <Select
        options={data}
        value={JSON.stringify(yearSemester)}
        onChange={onYearSemesterChange}
      />
    </Container>
  );
};

export default SemesterSelection;

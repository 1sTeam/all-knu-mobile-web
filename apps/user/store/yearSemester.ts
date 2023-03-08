import { atom } from "recoil";

export type YearSemester = {
  year: string;
  semester: "1" | "2";
};

export const yearSemesterStore = atom<YearSemester>({
  key: "yearSemesterStore",
  default: {} as YearSemester,
});

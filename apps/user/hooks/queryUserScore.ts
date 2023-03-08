import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { UserScoreConvert } from "../app/score/page";
import { sessionStore } from "../store/session";
import { YearSemester } from "../store/yearSemester";

export interface UserScore {
  total: {
    stnt_dept: string;
    totl_unit: string;
    smst_unit: number;
    smst_avrg: number;
    totl_avrg: string;
  };
  detail: {
    cnvt_scor: string;
    subj_unit: number;
    fnsh_gubn: string;
    subj_knam: string;
  }[];
}

export const queryUserScore = ({ year, semester }: YearSemester) => {
  const session = useRecoilValue(sessionStore);
  const { data, isError, isFetching, refetch } = useQuery<
    UserScore,
    unknown,
    UserScoreConvert
  >(
    ["score", { year, semester }],
    async () => {
      try {
        const { data } = await axios({
          url: "https://api.all-knu.accongbox.com/knu/grade",
          method: "POST",
          headers: {
            "Content-Type": `application/json`,
          },
          data: {
            sessionInfo: session,
            year,
            semester,
          },
        });
        return data.list.data;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      initialData: { total: {} as UserScore["total"], detail: [] },
      enabled: session ? true : false,
      retry: false,
      staleTime: 6000,
      refetchOnWindowFocus: false,
      select: (data) => {
        if (Object.keys(data).length !== 0) {
          const { detail, total } = data;
          const { totl_avrg, totl_unit, smst_avrg, smst_unit } = total;
          const cTotal = {
            totalAverageScore: totl_avrg,
            totalUnit: totl_unit,
            currentAverageScore: smst_avrg,
            currentUnit: smst_unit,
          };
          const cDetail = detail.map(
            ({ cnvt_scor, subj_knam, subj_unit, fnsh_gubn }) => ({
              majorType: fnsh_gubn,
              subjectName: subj_knam,
              unit: subj_unit,
              score: cnvt_scor,
            })
          );
          return { total: cTotal, detail: cDetail };
        }
        return {} as UserScoreConvert;
      },
    }
  );

  useEffect(() => {
    if (session && year && semester) {
      refetch();
    }
  }, [year, semester]);

  return { data, isError, isFetching };
};

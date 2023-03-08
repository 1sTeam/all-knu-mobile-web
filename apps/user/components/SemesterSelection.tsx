import { ChangeEvent, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Container, Select } from "ui";
import { querySemesterAvailable } from "../hooks/querySemesterAvailable";
import { sessionStore } from "../store/session";
import { yearSemesterStore } from "../store/yearSemester";

const SemesterSelection = () => {
  const setSession = useSetRecoilState(sessionStore);
  const [yearSemester, setYearSemester] = useRecoilState(yearSemesterStore);
  const { data } = querySemesterAvailable();

  const onYearSemesterChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { year, semester } = JSON.parse(e.target.value);
    setYearSemester({ year, semester });
  };

  useEffect(() => {
    setTimeout(() => {
      setSession({
        mobileCookies: {
          JSESSIONID: "4BB2201F42E3290E6250519DF740EB97",
          mast_idno: "MjAxNzA0MDc2",
          mast_mjco: "NTI2Nw==",
          mast_name: "wMy788f1",
          mast_name_e: "JUVDJTlEJUI0JUVDJTgzJTgxJUVEJTk4JTgx",
          mast_pass: "NTkwNDUwNzgyMTI=",
          user_auto: "Tg==",
          user_gubn: "MQ==",
        },
        ssoCookies: {
          JSESSIONID: "9EA8143F7D1530CACAEAAC3A5CC883D7",
          WMONID: "P2cUlIeqc3M",
          _SSO_Global_Logout_url:
            "'get^https://web.kangnam.ac.kr/sso/logout.jsp$\\'",
          careerLoginId: "201704076|cabbe1c6ec23117e88a53d1358b765fb",
          loginTime: "1677839484723",
          sso_token:
            "a5%2BnezJd6bKDYVVBWHe9s45B%2BFVbRLLD%2Fpx7D37cm4hYSOd%2FUSciVUGHHONcv92SXc7weBTTDqa4yrXRvEK4uUFaTr7qJn3Sfm80LX7kqa5S%2B22uwpRE6m2dCm5Qfant3PHUthZJ9wG8x8nvPcVEs%2Fw%2BQki7oHbwnhTZqvNif0tDeoc%2Fbh0Wab87gJSxueaTPV7VCaPzgsRuHVlvw1mFi2g%2FLGFBzADX1wdAFhb1JQg%3D",
        },
        veriusCookies: {
          JSESSIONID: "AAED9D72CB302BAEC8DF282CA896AB8F",
        },
      });
    }, 2000);
  }, []);

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

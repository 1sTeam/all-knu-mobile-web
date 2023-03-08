import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { Button } from "ui";
import useWebViewInteraction from "./useWebViewInteraction";

const Home = () => {
  const { session } = useWebViewInteraction();

  const { data = [], refetch } = useQuery(
    ["data-test"],
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
            year: "2021",
            semester: "1",
          },
        });
        return data.list.data.detail;
      } catch (e) {
        return Promise.reject(e);
      }
    },
    {
      initialData: [],
      enabled: session ? true : false,
      retry: false,
    }
  );

  useEffect(() => {
    if (session) {
      refetch();
    }
  }, [session]);

  return (
    <div>
      <Button />
      {data.map((v) => (
        <p>OMG</p>
      ))}
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { sessionStore } from "../store/session";

const useWebViewInteraction = () => {
  const setSession = useSetRecoilState(sessionStore);

  const onMessageHandler = (e: any) => {
    const { data } = e;
    const { type, action, message } = JSON.parse(data);
    if (type === "auth" && action === "all") {
      setSession(message.sessionInfo);
    }
  };

  useEffect(() => {
    const isUIWebView = () => {
      return navigator.userAgent
        .toLowerCase()
        .match(/\(ip.*applewebkit(?!.*(version|crios))/);
    };

    const receiver = isUIWebView() ? window : document;

    receiver.addEventListener("message", onMessageHandler);
    return () => {
      receiver.removeEventListener("message", onMessageHandler);
    };
  }, []);
};

export default useWebViewInteraction;

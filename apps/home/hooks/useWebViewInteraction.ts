import { useEffect, useState } from "react";

const useWebViewInteraction = () => {
  const [session, setSession] = useState<any>(null);

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

  return { session };
};

export default useWebViewInteraction;

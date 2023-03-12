import Script from "next/script";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAPS}`}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
        <div style={{ display: "flex", height: "6vh", alignItems: "center" }}>
          Hello Tag description
        </div>
      </div>
    </>
  );
};

"use client";

import "./global.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const client = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={client}>{children}</QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;

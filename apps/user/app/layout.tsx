"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import SemesterSelection from "../components/SemesterSelection";

const client = new QueryClient();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <QueryClientProvider client={client}>
            <SemesterSelection />
            {children}
            <ReactQueryDevtools />
          </QueryClientProvider>
        </RecoilRoot>
      </body>
    </html>
  );
};

export default RootLayout;

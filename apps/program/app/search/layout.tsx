import React from "react";
import Searcher from "../../components/search/Searcher";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Searcher />
      {children}
    </>
  );
};

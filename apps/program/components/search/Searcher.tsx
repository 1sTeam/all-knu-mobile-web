"use client";

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { InputText } from "ui";
import { useDebounce } from "../../hooks/useDebounce";
import searchStore from "../../store/search";

const Searcher = () => {
  const [textValue, setTextValue] = useState<string>("");
  const setSearchValue = useSetRecoilState(searchStore);
  const debouncedValue = useDebounce(textValue, 1000);

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue]);

  return (
    <InputText
      value={textValue}
      placeholder="비교과 검색"
      onChange={(e) => setTextValue(e.target.value)}
    />
  );
};

export default Searcher;

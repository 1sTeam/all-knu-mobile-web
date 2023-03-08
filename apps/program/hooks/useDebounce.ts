import { useEffect, useState } from "react";

export const useDebounce = <T>(input: T, delay?: number) => {
  const [value, setValue] = useState<T>(input);

  useEffect(() => {
    const timer = setTimeout(() => setValue(input), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input, delay]);

  return value;
};

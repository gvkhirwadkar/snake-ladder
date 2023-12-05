import { useEffect, useState } from "react";
import { MAX, MIN } from "./Config";

function getValue(value) {
  //min makes sure nothing goes beyond 100 :: 100, 105 - MIN - 100
  //max makes sure nothing goes beneath 0 :: -1,0 - MAX - 0
  return Math.min(MAX - 1, Math.max(MIN, value));
}

function useProgress() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (value < MAX) {
        setValue((prevValue) => {
          // React gives me this value not the Component
          return getValue(prevValue) + 1;
        });
      }
    }, 100);

    return () => clearInterval(id);
  }, []);

  return { value, setValue };
}

export default useProgress;

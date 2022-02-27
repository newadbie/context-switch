import { useState, createContext, useContext } from "react";
import type { ReactElement } from "react";

interface IProps {
  children: ReactElement;
}

interface TPageTwoContext {
  values: string[];
  addValue: () => void;
}

const initialProps: TPageTwoContext = {
  values: [],
  addValue: () => undefined,
};

const TPageTwoContext = createContext<TPageTwoContext>(initialProps);

export const PageTwoContextProvider = ({ children }: IProps) => {
  const [values, setValues] = useState([
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
  ]);

  const addValue = () => {
    setValues((prevValues) => [...prevValues, `${prevValues.length + 1}s`]);
  };

  return (
    <TPageTwoContext.Provider value={{ values, addValue }}>
      {children}
    </TPageTwoContext.Provider>
  );
};

const usePageTwoContext = (): TPageTwoContext => useContext(TPageTwoContext);

export default usePageTwoContext;

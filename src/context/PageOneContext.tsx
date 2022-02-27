import { useState, createContext, useContext } from "react";
import type { ReactElement } from "react";

interface IProps {
  children: ReactElement;
}

interface TPageOneContext {
  values: number[];
  addValue: () => void;
}

const initialProps: TPageOneContext = {
  values: [],
  addValue: () => undefined,
};

const TPageOneContext = createContext<TPageOneContext>(initialProps);

export const PageOneContextProvider = ({ children }: IProps) => {
  const [values, setValues] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const addValue = () => {
    setValues((prevValues) => [...prevValues, prevValues.length + 10]);
  };

  return (
    <TPageOneContext.Provider value={{ values, addValue }}>
      {children}
    </TPageOneContext.Provider>
  );
};

const usePageOneContext = (): TPageOneContext => useContext(TPageOneContext);

export default usePageOneContext;

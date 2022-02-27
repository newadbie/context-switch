import { useState, createContext, useContext } from "react";
import type { ReactElement } from "react";

interface IProps {
  children: ReactElement;
}

interface TPageThreeContext {
  value: string;
  changeString: () => void;
}

const initialProps: TPageThreeContext = {
  value: "",
  changeString: () => undefined,
};

const TPageThreeContext = createContext<TPageThreeContext>(initialProps);

export const PageThreeContextProvider = ({ children }: IProps) => {
  const [value, setValue] = useState("daneTestowe");

  const handleChange = () => {
    setValue((prev) => `${prev}s`);
  };

  return (
    <TPageThreeContext.Provider value={{ value, changeString: handleChange }}>
      {children}
    </TPageThreeContext.Provider>
  );
};

const usePageThreeContext = (): TPageThreeContext =>
  useContext(TPageThreeContext);

export default usePageThreeContext;

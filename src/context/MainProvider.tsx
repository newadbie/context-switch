import { useState, createContext, useContext } from "react";
import type { ReactElement } from "react";
import ContextSwitcher from "./ContextSwitcher";

export type TContextType = "page1" | "page2" | "page3";

interface IProps {
  children: ReactElement;
}

interface TMainContext {
  currentType: TContextType;
  setType: (newType: TContextType) => void;
}

const initialProps: TMainContext = {
  currentType: "page1",
  setType: () => undefined,
};

const MainContext = createContext<TMainContext>(initialProps);

export const MainContextProvider = ({ children }: IProps) => {
  const [currentType, setType] = useState<TContextType>("page1");

  return (
    <MainContext.Provider value={{ currentType, setType }}>
      <ContextSwitcher>{children}</ContextSwitcher>
    </MainContext.Provider>
  );
};

const useMainContext = (): TMainContext => useContext(MainContext);

export default useMainContext;

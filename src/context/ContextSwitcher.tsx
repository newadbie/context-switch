import { ReactElement } from "react";
import useMainContext from "./MainProvider";
import { PageOneContextProvider } from "./PageOneContext";
import { PageThreeContextProvider } from "./PageThreeContext";
import { PageTwoContextProvider } from "./PageTwoContext";

interface IProps {
  children: ReactElement;
}

const ContextSwitcher = ({ children }: IProps) => {
  const { currentType } = useMainContext();

  if (currentType === "page1") {
    return <PageOneContextProvider>{children}</PageOneContextProvider>;
  }
  if (currentType === "page2") {
    return <PageTwoContextProvider>{children}</PageTwoContextProvider>;
  }
  return <PageThreeContextProvider>{children}</PageThreeContextProvider>;
};

export default ContextSwitcher;

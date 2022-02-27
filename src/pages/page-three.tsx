import useMainContext from "context/MainProvider";
import usePageThreeContext from "context/PageThreeContext";
import { useEffect } from "react";

const PageOne = () => {
  const { setType } = useMainContext();
  const { value, changeString } = usePageThreeContext();

  useEffect(() => {
    setType("page3");
  }, [setType]);

  return (
    <div>
      <button onClick={changeString}>Dodaj wartość</button>
      <pre>
        <p>{value}</p>
      </pre>
    </div>
  );
};

export default PageOne;

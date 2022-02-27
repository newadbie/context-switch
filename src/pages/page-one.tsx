import useMainContext from "context/MainProvider";
import usePageOneContext from "context/PageOneContext";
import usePageTwoContext from "context/PageTwoContext";
import { useEffect } from "react";

const PageOne = () => {
  const { setType } = useMainContext();
  const { values } = usePageOneContext();
  const { addValue } = usePageTwoContext();

  useEffect(() => {
    setType("page1");
  }, [setType]);

  return (
    <div>
      <button onClick={addValue}>Dodaj wartość</button>
      <pre>
        {values.map((value) => (
          <p key={value}>{value}</p>
        ))}
      </pre>
    </div>
  );
};

export default PageOne;

/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";

export const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceshowFlag] = useState(false);
  const onClickCountUP = () => {
    setNum((preveState) => preveState + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceshowFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        // faceShowFlag || setFaceshowFlag(true);
      } else {
        // faceShowFlag && setFaceshowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <button onClick={() => onClickCountUP()}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>=_=</p>}
    </>
  );
};

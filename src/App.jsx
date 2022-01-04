import { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
export const App = () => {
  const onClickCountUP = () => {
    setNum((preveState) => preveState + 1);
  };
  const [num, setNum] = useState(0);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color={"blue"}>ほにたん</ColorfulMessage>
      <ColorfulMessage color={"pink"}>みこたん</ColorfulMessage>
      <button onClick={() => onClickCountUP()}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

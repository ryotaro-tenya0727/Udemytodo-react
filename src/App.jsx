import ColorfulMessage from "./components/ColorfulMessage";
export const App = () => {
  const onClickButton = () => {
    alert(1);
  };
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>React</p>
      <ColorfulMessage color={"blue"} message={"なるほど"} />
      <ColorfulMessage color={"pink"} message={"あ"} />
      <button onClick={() => onClickButton()}>1</button>
    </>
  );
};

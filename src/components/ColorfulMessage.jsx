const ColorfukMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfukMessage;

const Row = (props) => {
  let rowClass = false;
  if (props.className) rowClass = true;

  return (
    <div
      style={props.style}
      className={`row${rowClass ? " " + props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Row;

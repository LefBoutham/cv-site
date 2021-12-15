import styles from "../styles/Column.module.css";

const Column = (props) => {
  let columnClass = false;
  if (props.className) columnClass = true;

  return (
    <div
      style={props.style}
      className={`column${columnClass ? " " + props.className : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Column;

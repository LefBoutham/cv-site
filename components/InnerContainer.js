const InnerContainer = ({ children, ...props }) => {
  return (
    <div
      className={`inner-container${
        props.className ? " " + props.className : ""
      }`}
      style={props.style}
    >
      {children}
    </div>
  );
};

export default InnerContainer;

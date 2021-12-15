const InnerContainer = ({ children, ...props }) => {
  return (
    <div
      className={`inner-container${
        props.className ? " " + props.className : ""
      }`}
    >
      {children}
    </div>
  );
};

export default InnerContainer;

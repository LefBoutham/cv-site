import InnerContainer from "./InnerContainer";
import Row from "./Row";
import Timeline from "./Timeline";
const ThirdFold = () => {
  return (
    <InnerContainer>
      <Row>
        <h2
          style={{
            textAlign: "center",
            width: "100%",
            fontSize: "40px",
          }}
        >
          Experience
        </h2>
        <Timeline />
      </Row>
    </InnerContainer>
  );
};

export default ThirdFold;

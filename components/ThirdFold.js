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
          Skills and experience
        </h2>
        <Timeline />
      </Row>
      <Row>
        <div className="skills">
          <p>Skills</p>
          <ul className="skills_list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>WordPress Development</li>
            <li>WordPress API</li>
          </ul>
        </div>
      </Row>
    </InnerContainer>
  );
};

export default ThirdFold;

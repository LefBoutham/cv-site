import Form from "./Form";
import Column from "./Column";
import Row from "./Row";
import InnerContainer from "./InnerContainer";

const FifthFold = () => {
  return (
    <InnerContainer>
      <Row>
        <Column
          //className="grow-3"
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Form />
        </Column>
        <Column>
          <ul>
            <li>LinkedIn</li>
            <li>040 5763555</li>
            <li>alex@melkomedia.fi</li>
            <li>
              A web developer by day and a curious inquisitive mind by night.
            </li>
          </ul>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default FifthFold;

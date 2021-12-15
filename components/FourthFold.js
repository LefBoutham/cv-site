import Row from "./Row";
import Column from "./Column";
import InnerContainer from "./InnerContainer";
const FourthFold = () => {
  return (
    <InnerContainer>
      <Row
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
        }}
      >
        <Column>
          <h2 className="work-ive-done-vertical" style={{ fontSize: "60px" }}>
            Work Ive done
          </h2>
        </Column>
        <Column className="grow-8">
          <h2 style={{ fontSize: "60px" }}>Work Ive done</h2>
          <div className="my-work-grid">
            <article className="single-work work1">
              <h3>Melko Media</h3>
            </article>
            <article className="single-work work2">
              <h3>Örum</h3>
            </article>
            <article className="single-work work3">
              <h3>Nordic Rack and Office</h3>
            </article>
            <article className="single-work work4">
              <h3>Rollector</h3>
            </article>
            <article className="single-work work5">
              <h3>Jyväskylän Padel</h3>
            </article>
          </div>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default FourthFold;

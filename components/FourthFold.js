/* eslint-disable react/no-unescaped-entities */
import Row from "./Row";
import Column from "./Column";
import InnerContainer from "./InnerContainer";
const FourthFold = ({ posts, ...props }) => {
  const workItems = Object.keys(posts.nodes).map((post, i) => {
    return (
      <article key={i} className={`single-work work work${i}`}>
        <a
          target="_blank"
          rel="noreferrer"
          href={posts.nodes[i].websiteUrl.url}
          style={{ textAlign: "center" }}
        >
          <h3 style={{ textAlign: "center" }}>{posts.nodes[i].title}</h3>
        </a>
      </article>
    );
  });

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
          <div className="my-work-grid">{workItems}</div>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default FourthFold;

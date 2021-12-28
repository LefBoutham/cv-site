/* eslint-disable react/no-unescaped-entities */
import Row from "./Row";
import Column from "./Column";
import InnerContainer from "./InnerContainer";
const FourthFold = ({ posts, ...props }) => {
  const workItems = Object.keys(posts.nodes).map((post, i) => {
    return (
      <article key={i} className={`single-work work work${i}`}>
        <h3>{posts.nodes[i].title}</h3>
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
          <p>
            <strong>PHP: </strong>I've completed an MVC building course in
            addition to developing WordPress plugins, Gutenberg blocks and
            themes. So familiarising myself with frameworks such as Laravel
            isn't an issue.
            <br /> <br />
            <strong>JavaScript and modern web development:</strong> In addition
            to vanilla JavaScript, I have experience with frameworks such as
            React (along with Redux and Next.js). I can also create API's using
            Express.js, not to mention utilizing third party API's or the
            WordPress REST API to create a headless CMS (in fact, this website
            was created with the help of WordPress REST API and GraphQL).
            <br /> <br />
          </p>
          <h2 style={{ fontSize: "60px" }}>Work Ive done</h2>
          <div className="my-work-grid">
            {workItems}
            {/* <article className="single-work work1">
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
            </article> */}
          </div>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default FourthFold;

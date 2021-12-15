/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/FirstFold.module.css";
import InnerContainer from "./InnerContainer";
import Row from "./Row";
import Sketch from "./Sketch";

const FirstFold = () => {
  return (
    <InnerContainer>
      <Row>
        <h1 className={styles.headline}>
          Hi, I'm Alex.
          <br />A web developer.
        </h1>
        <div className="tagline-nav">
          <nav>
            <ul>
              <li>
                <a>Who am I, exactly?</a>
              </li>
              <li>
                <a>Skills / Experience</a>
              </li>
              <li>
                <a>Work I've done</a>
              </li>
              <li>
                <a>Contact me</a>
              </li>
            </ul>
          </nav>
        </div>
      </Row>
    </InnerContainer>
  );
};

export default FirstFold;

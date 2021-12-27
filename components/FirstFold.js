/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/FirstFold.module.css";
import InnerContainer from "./InnerContainer";
import Row from "./Row";
import Image from "next/image";

const FirstFold = () => {
  return (
    <InnerContainer>
      <Row>
        <div className="tagline-nav">
          <h1 className={styles.imalex}>
            Hi 👋 I'm Alex Botham,
            <br />
            ready to work as a web developer.
          </h1>
          <div
            className="first-fold-image"
            style={{ height: "350px", width: "350px" }}
          >
            <Image
              src="/Alex-profiili.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <nav>
            <ul>
              <li>
                <a>Why me?</a>
              </li>
              <li>
                <a>Skills / Experience</a>
              </li>
              <li>
                <a>Work I've done</a>
              </li>
              <li>
                <a>More about me + CV</a>
              </li>
            </ul>
          </nav>
        </div>
      </Row>
    </InnerContainer>
  );
};

export default FirstFold;

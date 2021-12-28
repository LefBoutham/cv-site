/* eslint-disable react/no-unescaped-entities */
import styles from "../styles/FirstFold.module.css";
import InnerContainer from "./InnerContainer";
import Row from "./Row";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

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
                <Link smooth={true} to="who-am-i">
                  Why me?
                </Link>
              </li>
              <li>
                <Link smooth={true} to="skills-and-experience">
                  Skills / Experience
                </Link>
              </li>
              <li>
                <Link smooth={true} to="work-ive-done">
                  Work I've done
                </Link>
              </li>
              <li>
                <Link smooth={true} to="contact-me">
                  Get in touch
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Row>
    </InnerContainer>
  );
};

export default FirstFold;

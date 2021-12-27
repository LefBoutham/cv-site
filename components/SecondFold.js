/* eslint-disable react/no-unescaped-entities */
import Column from "./Column";
import Row from "./Row";
import Image from "next/image";
import InnerContainer from "./InnerContainer";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
// import dynamic from "next/dynamic";
// const ReactTooltip = dynamic(() => import("react-tooltip"), {
//   ssr: false,
// });

const SecondFold = () => {
  const email = useRef(null);

  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
    email.current.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("alex@melkomedia.fi");
      setTimeout(ReactTooltip.hide, 2000);
    });
  }, []);

  return (
    <InnerContainer style={{ alignItems: "center" }}>
      {isMounted && (
        <ReactTooltip
          className="tooltip-class"
          event="click"
          type="dark"
          place="bottom"
          backgroundColor="#242424"
        />
      )}
      <Row>
        <h2>Why me?</h2>
      </Row>
      <Row style={{ maxWidth: "800px" }}>
        <h3 style={{ textAlign: "center", width: "100%" }}>
          The heart of a marketer, the mind of a developer.
        </h3>
        <p>
          During the past 6 years I’ve completed a multitude of WordPress
          related projects, which makes me an ideal candidate to work as a
          WordPress developer. I’ve gotten to know the workings of WordPress
          more intimately through developing plugins, theme extensions and
          diving deep into the world of modern web development and PHP.
          <br /> <br />
          Above all else however, I'm a passionate fast learner and love working
          with people. I'm conscientious, responsible and positive.
          <br /> <br />
          <strong>
            Click here to see a thorough overview of my technical skills.
          </strong>
          <br /> <br />
          Even though I'm technically minded, my heart has been forged in the
          fires of marketing. In University, my major is marketing and my minors
          are IT and information system sciences. I've learned advanced Java and
          completed courses on data structures and algorithms, so I'm no
          stranger to fundamental programming principles either.
          <br /> <br />
          I've run my own WordPress development business since 2016, so I have a
          lot of experience working with a multitude of clients and stakeholders
          (such as graphic designers and SEO specialists).
          <br /> <br />
          As supportive aspects, I've implemented GDPR friendly cookie
          management systems using CookieBot via Google Tag Manager and Google
          Analytics, so they're no strangers to me either. I've also worked with
          several e-commerce projects using WooCommerce in addition to learning
          the ropes of Liquid to make customizations to a client's Shopify
          store.
          <br /> <br />
          <strong>
            Click here to see a thorough overview of my work experience.
          </strong>
        </p>

        <ul className="contact">
          <li>Contact me on LinkedIn</li>
          <li>
            <a
              href="#"
              ref={email}
              className="cryptedmail"
              data-name="alex"
              data-domain="melkomedia"
              data-tld="fi"
              data-tip="Copied to clipboard!"
            >
              Email me at{" "}
            </a>
          </li>
        </ul>
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

export default SecondFold;

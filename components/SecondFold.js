/* eslint-disable react/no-unescaped-entities */
import Column from "./Column";
import Row from "./Row";
import Image from "next/image";
import InnerContainer from "./InnerContainer";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";

const SecondFold = () => {
  const email = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

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
          I’ve been practicing web development since 2014, and producing
          WordPress websites for clients since 2015. During the past 6 years
          I’ve worked with a wide range of stakeholders and completed tens of
          website projects, so I understand the intricate technical details
          required to deploy a website successfully. I’ve gotten to know the
          workings of WordPress more intimately, especially in the last couple
          of years through developing plugins and theme extensions for clients.
          I have experience in Full Stack programming with React, Express.js and
          MongoDB, which further complements my skills working with the
          WordPress REST API.
          <br /> <br />
          However, merely understanding the technical aspect is not enough to be
          an effective web developer. It’s important to master the soft skills
          required to communicate, document, and manage expectations at a high
          level. The aforementioned qualities are reflected in my work from
          overseeing website projects and managing multiple stakeholders such as
          the client’s team, SEO professional, digital marketing professional
          and a graphic designer. Furthermore, using tools like Google Tag
          Manager and CookieBot or Complianz to ensure that websites comply with
          GDPR has been central in the past couple of years. One could say that
          my competence is formed through a unique mixture of technical prowess,
          project management activities and social skills.
          <br /> <br />
          Even though I'm technically minded, my heart has been forged in the
          fires of marketing. In University, my major is marketing and my minors
          are IT and information system sciences. I've learned advanced Java and
          completed courses on data structures and algorithms, so I'm no
          stranger to fundamental programming principles either.
        </p>

        <ul className="contact">
          <li>
            <a
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/alex-botham-abb9399a/"
            >
              Contact me on LinkedIn
            </a>
          </li>
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
            <li>Java and OOP</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Express.js</li>
            <li>Redux</li>
            <li>PHP</li>
            <li>GraphQL</li>
            <li>WordPress Development</li>
            <li>WordPress REST API</li>
            <li>And more to come 😎</li>
          </ul>
        </div>
      </Row>
    </InnerContainer>
  );
};

export default SecondFold;

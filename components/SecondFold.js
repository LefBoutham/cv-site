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
    <InnerContainer>
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
        <h2>Who am I?</h2>
      </Row>
      <Row>
        <Column
          style={{
            justifyContent: "flex-end",
          }}
        >
          <p>
            A web developer by day and a curious inquisitive mind by night.
            During the past 5 years I’ve worked with a wide range of
            stakeholders and completed tens of website projects, which gives me
            an edge for web development as well as web related managerial
            positions. I’ve especially gotten to know the workings of WordPress
            more intimately through developing plugins and theme extensions.
            Furthermore, I have experience with JavaScript frameworks such as
            React and Next.js, creating simple API's with Express.js as well as
            utilizing third party API's or the WordPress REST API as a headless
            CMS. I'm a passionate, fast learner and get along with pretty much
            everyone. My other interest include psychology, bits of philosophy
            here and there, marketing / growth hacking, crypto / Web3.0, hitting
            the gym and downhill skiing. ⛷
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
        </Column>
        <Column>
          <div
            className="image-placeholder"
            style={{ height: "350px", width: "100%" }}
          >
            <Image
              src="/Alex-profiili.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default SecondFold;

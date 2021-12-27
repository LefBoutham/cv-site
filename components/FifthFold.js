import Form from "./Form";
import Column from "./Column";
import Row from "./Row";
import InnerContainer from "./InnerContainer";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";

const FifthFold = () => {
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
    <InnerContainer>
      <Row>
        <Column>
          <h2>Get in touch</h2>
        </Column>

        <Column>
          <ul>
            <li className="handshake">
              <a href="https://www.linkedin.com/in/alex-botham-abb9399a/">
                LinkedIn
              </a>
            </li>
            <li className="phone">+358 44 5763555</li>
            <li className="point">
              <a
                href="#"
                ref={email}
                className="cryptedmailGreen"
                data-name="alex"
                data-domain="melkomedia"
                data-tld="fi"
                data-tip="Copied to clipboard!"
              >
                Click to copy:{" "}
              </a>
            </li>
          </ul>
        </Column>
      </Row>
    </InnerContainer>
  );
};

export default FifthFold;

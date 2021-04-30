import InfoPage from "../../components/info-page/info-page";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// this is your .MD file
import mdFile from "./md/gradle-setup.md";

const GradleSetup = (props) => {
  const [mdText, setMdText] = useState();

  useEffect(() => {
    fetch(mdFile)
      .then((response) => response.text())
      .then((text) => {
        setMdText(text);
      });
  });

  return (
    <InfoPage path={props.location.pathname}>
      <ReactMarkdown>{mdText}</ReactMarkdown>
    </InfoPage>
  );
};

export default GradleSetup;

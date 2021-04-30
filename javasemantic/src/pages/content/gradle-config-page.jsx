import InfoPage from "../../components/info-page/info-page";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// this is your .MD file
import mdFile from "./md/grade-config.md";

const GradleConfig = (props) => {
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

export default GradleConfig;

import InfoPage from "../../components/info-page/info-page";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// this is your .MD file
import mdFile from "./md/conventional-commits.md";

const ConventionalCommits = (props) => {
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdText}</ReactMarkdown>
    </InfoPage>
  );
};

export default ConventionalCommits;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const TxtCard = ({ txt }) => {
  return (
    <Fragment>
      <section className="txtCard">
        <Link to={`/text/${txt._id}`}>
          <h1>{txt.name}</h1>
          <div>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {txt.content}
            </ReactMarkdown>
          </div>
        </Link>
      </section>
    </Fragment>
  );
};

export default TxtCard;

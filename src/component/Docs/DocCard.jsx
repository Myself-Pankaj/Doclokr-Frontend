import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const DocCard = ({ myPublicDoc }) => {
  return (
    <Fragment>
      <Link className="docCard" to={`/doc/${myPublicDoc._id}`}>
        <h1>{myPublicDoc.name}</h1>
      </Link>
    </Fragment>
  );
};

export default DocCard;

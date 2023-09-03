import React, { Fragment } from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Fragment>
       <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>

        <p>Page not found, click below to go to home page.</p>
        <Link to="/">Go to Home</Link>
      </main>
    </section>
    </Fragment>
  );
};

export default Error;

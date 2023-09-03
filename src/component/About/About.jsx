import React from "react";
import { Fragment } from "react";
import { motion } from "framer-motion";
// import me from "https://res.cloudinary.com/buymybook/image/upload/v1660735444/IMG_20220221_155501_613_z6ll7f.webp";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
const About = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <Fragment>
      <section className="about">
        <main>
          <h1>About Us</h1>

          <article>
            <h4>DocLoKr</h4>
            <p>We are DocLoKr. The place is to save your docs and notes.</p>

            <p>
              Explore the various type of service. Click below to see the
              Service
            </p>

            <Link to="/account">
              <RiFindReplaceLine />
            </Link>
          </article>

        </main>
      </section>
      <section className="founder">
        <motion.div {...options}>
          <img
            src="https://res.cloudinary.com/buymybook/image/upload/v1660735444/IMG_20220221_155501_613_z6ll7f.webp"
            alt="Founder"
            height={200}
            width={200}
          />
          <h3>Pankaj</h3>

          <p>
            Hey, Everyone I am Pankaj , the founder of DocLoKr.....
            <br />
            Our aim is to serve you !!! .
          </p>
        </motion.div>
      </section>
    </Fragment>
  );
};

export default About;

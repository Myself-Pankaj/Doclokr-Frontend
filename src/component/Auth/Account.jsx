import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard, MdArrowForwardIos } from "react-icons/md";
import { RiAccountBoxLine } from "react-icons/ri";
import { GrDocumentNotes } from "react-icons/gr";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

import { logout } from "../Redux/actions/userAction";
import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import Loader from "../layouts/Loader";

const Account = ({ project }) => {
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
  };
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");
  return (
    <Fragment>
      <section className="profile">
        {loading === false ? (
          <Fragment>
            <main>
              <motion.img src={user.photo} alt="User" {...options} />
              <span>
                <motion.h5 {...options} transition={{ delay: 0.3 }}>
                  {user.name}
                  {/* {project.projectName} */}
                </motion.h5>
              </span>
              {user.role === "admin" && (
                <motion.div {...options} transition={{ delay: 0.5 }}>
                  <Link
                    to="/admin/dashboard"
                    style={{
                      borderRadius: 0,
                      backgroundColor: "rgb(40,40,40)",
                    }}
                  >
                    <MdDashboard /> Dashboard
                  </Link>
                </motion.div>
              )}
            </main>
            <Box
              bgGradient="linear(to-l, #050B14, #5E4B05)"
              width={isNotSmallerScreen ? "900px" : "350px"}
              margin="auto"
              borderRadius={7}
            >
              <Text
                fontSize={20}
                marginTop="2rem"
                bgGradient="linear(to-l, #FFFFFF, #A8CBFE)"
                p={0.5}
                bgClip="text"
                textAlign="center"
                fontFamily="Limelight"
              >
                Services
              </Text>
            </Box>
            <motion.div
              {...options}
              transition={{ delay: 0.3 }}
              className="home_service"
            >
              <Link to="/project">
                <motion.h1>
                  <RiAccountBoxLine />
                </motion.h1>

                <p>Portfolio</p>
              </Link>

              <Link to="/alltxtfiles">
                <h2>
                  <GrDocumentNotes />
                </h2>
                <p>Notes</p>
              </Link>
              <Link to="/home">
                <h3>
                  <BsFillShieldLockFill />
                </h3>
                <p>Docs</p>
              </Link>
              <Link to="/addproject">
                {/*  */}
                <h4>
                  <AiFillSetting />
                </h4>
                <p>Me</p>
              </Link>
            </motion.div>
            <section className="account_box">
              <Link to="/project">
                <div>Project's </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </Link>
              <Link to="/contact_us">
                <div>Contact us </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </Link>
              <Link to="/about_us">
                <div>About us </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </Link>
              <Link to="/term_&_condition">
                <div>Terms and Condition </div>
                <div>
                  <MdArrowForwardIos />
                </div>
              </Link>
            </section>
            <motion.button
              className="sign_out"
              initial={{
                x: "-100vw",
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.3,
              }}
              onClick={logoutHandler}
            >
              <Text
                fontSize={40}
                fontWeight="thin"
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                textAlign="center"
              >
                Logout
              </Text>
            </motion.button>
          </Fragment>
        ) : (
          <Loader />
        )}
      </section>
    </Fragment>
  );
};

export default Account;

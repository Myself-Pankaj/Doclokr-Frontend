import React from "react";
import { MdArrowForward } from "react-icons/md";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();
  const navigator = () =>{
    navigate(`/login`)
  }
  return (
    <section className="start">
      <motion.button
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        onClick={navigator}
      >
        Get Started
        <MdArrowForward />
      </motion.button>
    </section>
  );
};

export default Start;

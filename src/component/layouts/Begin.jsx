import React from "react";
import { MdArrowForward } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Begin = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const navigator = () =>{
    navigate(`/type/${user._id}`)
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

export default Begin;

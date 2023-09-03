import {  Text, useMediaQuery } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { clearErrors, updateRole } from "../Redux/actions/userAction";
import { UPDATE_ROLE_RESET } from "../Redux/constants/userConstant";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";


const UpdateRole = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error, user } = useSelector((state) => state.auth);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
  } = useSelector((state) => state.role);

  const { id } = useParams();

  const [role, setRole] = useState("");

  useEffect(() => {
    if (user && user._id !== id) {
      dispatch(user);
    } else {
      setRole(user.role);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Let's Go");
      navigate("/addDocs");
      dispatch({ type: UPDATE_ROLE_RESET });
    }
  }, [dispatch, error, navigate, isUpdated, updateError, user, id]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("role", role);

    dispatch(updateRole(id, myForm));
  };
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

  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");
  return (
    <Fragment>
      {loading ? (
        <></>
      ) : (
        <section>
        <form className="updateRole" onSubmit={updateUserSubmitHandler}>
        <Text
            fontSize={isNotSmallerScreen ? "5xl" : "4xl"}
            fontWeight={isNotSmallerScreen ? "bold" : "bolder"}
            bgGradient={isNotSmallerScreen ? 'linear(to-l, #F507F5, #07F5F0)' : 'linear(to-l, #0E0D0E,#000707)'} 
            bgClip="text"
            textAlign="center"
          >
            {" "}
            Choose Your Locker Type
          </Text>
          <div>
            <MdOutlineVerifiedUser/>
          <motion.h5 {...options} transition={{ delay: 0.3 }}>
            {user.name}
          </motion.h5>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="General">General</option>
              <option value="Advance">Advance</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={
              updateLoading ? true : false || role === "" ? true : false
            }
          >
            Select
            <MdArrowForward />
          </button>
        </form>
        </section>
      )}
    </Fragment>
  );
};

export default UpdateRole;

import { Button,  useMediaQuery } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  deleteInfo,
  getDetails,
  updateProjectName,
} from "../Redux/actions/projectAction";
import { DELETE_BASIC_INFO_RESET, UPDATE_BASIC_INFO_RESET } from "../Redux/constants/projectConstant";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { motion } from "framer-motion";
import Loader from "../layouts/Loader";

const UpdateProjectName = () => {
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

  const navigate = useNavigate();

  const { loading: detailLoading, error, myInfo } = useSelector((state) => state.details);

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
    error: deleteError, isDeleted, loading: deleteLoading
  } = useSelector((state) => state.manage);

  const { id } = useParams();

  const [projectName, setProjectName] = useState("");
  const [pinfo, setInfo] = useState("");
  const [accessinglink, setAccessingLink] = useState("");

  useEffect(() => {
    if (myInfo && myInfo._id !== id) {
      dispatch(getDetails(id));
    } else {
      setProjectName(myInfo.projectName);
      setInfo(myInfo.pinfo);
      setAccessingLink(myInfo.accessinglink);
    }
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      toast.error(updateError);
      dispatch(clearErrors());
    }
    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success(" Deleted Successfully");
      navigate("/project");
      dispatch({ type: DELETE_BASIC_INFO_RESET });
    }

    if (isUpdated) {
      toast.success("Let's Go");
      navigate("/project");
      dispatch({ type: UPDATE_BASIC_INFO_RESET });
    }
  }, [dispatch, error, navigate, isUpdated, deleteError, isDeleted, updateError, myInfo, id]);

  const updateSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("projectName", projectName);
    myForm.set("pinfo", pinfo);
    myForm.set("accessinglink", accessinglink);


    dispatch(updateProjectName(id, myForm));
  };
  
  const deleteHandler = () => {
    dispatch(deleteInfo(id));
  };

  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");

  return (
    <Fragment>
      {detailLoading ? (
        <Loader/>
      ) : (
        <section>
          <form className="updateRole" onSubmit={updateSubmitHandler}>
            <div>
              <MdOutlineVerifiedUser />
              <motion.h5 {...options} transition={{ delay: 0.3 }}></motion.h5>
              <label className="label">Project Name.</label>
              <div className="fourth">
                <input
                  type="text"
                  placeholder="Enter Project Name."
                  value={projectName}
                  required
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <label className="label">Project Info</label>
              <div className="fourth">
                <input
                  type="text"
                  placeholder="Enter Project Info."
                  value={pinfo}
                  required
                  onChange={(e) => setInfo(e.target.value)}
                />
              </div>
              <label className="label">Accessing Link.</label>
              <div className="fourth">
                <input
                  type="text"
                  placeholder="Enter Project Link."
                  value={accessinglink}
                  required
                  onChange={(e) => setAccessingLink(e.target.value)}
                />
              </div>
            </div>

            <Button
              type="submit"
              width={isNotSmallerScreen ? '15vw' : '40vw'}
              isLoading={
                updateLoading
                  ? true
                  : false || projectName === ""
                  ? true
                  : false
              }
              colorScheme="teal"
              variant="solid"
              disabled={
                updateLoading
                  ? true
                  : false || projectName === ""
                  ? true
                  : false
              }
            >
              Save
            </Button>

            <Button
              isLoading={
                deleteLoading
                  ? true
                  : false
              }
              width={isNotSmallerScreen ? '15vw' : '40vw'}
              colorScheme="red"
              variant="solid"
              disabled={
                deleteLoading
                  ? true
                  : false 
              }
              onClick={deleteHandler}
            >
              Delete Project
            </Button>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default UpdateProjectName;

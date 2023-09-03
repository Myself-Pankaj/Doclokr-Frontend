import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Button, useMediaQuery } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  deleteProject,
  getProjectDetails,
  updateProject,
} from "../Redux/actions/projectAction";
import {
  DELETE_PROJECT_RESET,
  UPDATE_PROJECT_RESET,
} from "../Redux/constants/projectConstant";
import Loader from "../layouts/Loader";

const UpdateProject = () => {
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

  const { loading, error, myProject } = useSelector(
    (state) => state.projectdetail
  );

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
    error: deleteError,
    isDeleted,
    loading: deleteLoading,
  } = useSelector((state) => state.manager);

  const { id } = useParams();

  const [bio, setBio] = useState("");
  const [instaUserName, setInstaUserName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [resumes, setResumes] = useState([]);
  const [oldResume, setOldResumes] = useState([]);
  const [resumePreview, setResumesPreview] = useState([]);

  useEffect(() => {
    if (myProject && myProject._id !== id) {
      dispatch(getProjectDetails(id));
    } else {
      setBio(myProject.bio);
      setInstaUserName(myProject.instaUserName);
      setContactNo(myProject.contactNo);
      setOldResumes(myProject.resumes);
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
      navigate("/addproject");
      dispatch({ type: DELETE_PROJECT_RESET });
    }

    if (isUpdated) {
      toast.success("Let's Go");
      navigate("/project");
      dispatch({ type: UPDATE_PROJECT_RESET });
    }
  }, [
    dispatch,
    error,
    navigate,
    isUpdated,
    deleteError,
    isDeleted,
    updateError,
    myProject,
    id,
  ]);



  const updateSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("bio", bio);
    myForm.set("instaUserName", instaUserName);
    myForm.set("contactNo", contactNo);
    myForm.set("resumes", resumes);
    resumes.forEach((resume) => {
      myForm.append("resumes", resume);
    });

    dispatch(updateProject(id, myForm));
  };

  const ResumeChange = (e) => {
    const MAX_SIZE = 5000000; // 5MB in bytes
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => file.size <= MAX_SIZE)
    if(validFiles.length !== files.length){
      toast.error(`Some files are too large. Please select files smaller than 5MB`);
      e.target.value = '';
    }
    setResumes([]);
    setResumesPreview([]);
    setOldResumes([]);

    validFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setResumesPreview((old) => [...old, reader.result]);
          setResumes((old) => [...old, file]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  const deleteHandler = () => {
    dispatch(deleteProject(id));
    navigate("/addproject");
  };
  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <form className="updateRole" onSubmit={updateSubmitHandler}>
            <div>
              <MdOutlineVerifiedUser />
              <motion.h5 {...options} transition={{ delay: 0.3 }}></motion.h5>
              <label className="label">Bio.</label>
              <div className="fourth">
                <textarea
                  type="text"
                  placeholder="Bio"
                  value={bio}
                  required
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <label className="label">Phone No.</label>
              <div className="fourth">
                <input
                  type="number"
                  placeholder="Enter Phone No."
                  value={contactNo}
                  required
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <label className="label">UserName</label>
              <div className="fourth">
                <input
                  type="text"
                  placeholder="Insta user Name"
                  value={instaUserName}
                  required
                  onChange={(e) => setInstaUserName(e.target.value)}
                />
              </div>
              <label className="label">Resume.</label>
              <div className="fourth">
                <input
                  type="file"
                  name="avatar"
                  onChange={ResumeChange}
                  multiple
                />
              </div>
            </div>
          <p>Currently we are facing error in updating the information so to update it delete the info and add it again Thank You!!!</p>
            <Button
              type="submit"
              isLoading={updateLoading ? true : false}
              width={isNotSmallerScreen ? "15vw" : "40vw"}
              colorScheme="teal"
              variant="solid"
              disabled={updateLoading ? true : false}
            >
              Save
            </Button>

            <Button
              isLoading={deleteLoading ? true : false}
              width={isNotSmallerScreen ? "15vw" : "40vw"}
              colorScheme="red"
              variant="solid"
              disabled={deleteLoading ? true : false}
              onClick={deleteHandler}
            >
              Delete Info
            </Button>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default UpdateProject;

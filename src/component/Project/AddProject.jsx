import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProject, clearErrors } from "../Redux/actions/projectAction";
import { NEW_PROJECT_RESET } from "../Redux/constants/projectConstant";
import { Button } from '@chakra-ui/react';


const AddProject = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.bio);

  const [bio, setBio] = useState("");
  const [instaUserName, setUserName] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [resume, setResume] = useState([]);
  const [ resumePreview ,setResumePreview] = useState([]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Added Successfully");
      navigate("/project");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("bio", bio);
    myForm.set("instaUserName", instaUserName);
    myForm.set("contactNo", contactNo);

    resume.forEach((resume) => {
      myForm.append("resumes", resume);
    });
    dispatch(addProject(myForm));
  };

  const ResumeChange = (e) => {
    // const MAX_SIZE = 5000000; // 5MB in bytes
    // const files = Array.from(e.target.files);
    // const validFiles = files.filter(file => file.size <= MAX_SIZE)
    // if(validFiles.length !== files.length){
    //   toast.error(`Some files are too large. Please select files smaller than 5MB`);
    // }
    // setResume([]);
    // setResumePreview([]);

    // validFiles.forEach((file) => {
    //   const reader = new FileReader();

    //   reader.onload = () => {
    //     if (reader.readyState === 2) {
    //       setResumePreview((old) => [...old, reader.result]);
    //       setResume((old) => [...old, file]);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // });
    const files = Array.from(e.target.files);

    setResume([]);
    setResumePreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setResumePreview((old) => [...old, reader.result]);
          setResume((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <section className="addinfo">
        <main>
          <h1> Basic Information</h1>
          <form encType="multipart/form-data" onSubmit={SubmitHandler}>

            <div>
              <label>Phone No.</label>
              <input
                type="number"
                placeholder="Enter Phone No."
                value={contactNo}
                required
                onChange={(e) => setContactNo(e.target.value)}
              />
            </div>
            <div>
              <label>UserName</label>
              <input
                type="text"
                placeholder="Insta user Name"
                value={instaUserName}
                required
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label>Bio.</label>
              <input
                type="string"
                placeholder="Bio"
                required
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <p>If there is no project leave it blank</p>

            <div>
              <label>Resume.</label>
              <input
                type="file"
                name="avatar"
                onChange={ResumeChange}
                multiple
              />
            </div>
            <p>File must be less than 5 MB</p>

            <Button
              type="submit"
              isLoading={loading ? true : false}
              disabled={loading ? true : false}
              width="15vw"
              colorScheme="teal"
              variant="solid"
            >
              Submit
            </Button>
          </form>
        </main>
      </section>
    </Fragment>
  );
};

export default AddProject;

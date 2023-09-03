import { Button, useMediaQuery } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addInfo, clearErrors } from "../Redux/actions/projectAction";
import { NEW_BASIC_INFO_RESET } from "../Redux/constants/projectConstant";

const AddInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.info);

  const [projectName, setProjectName] = useState("");
  const [pinfo, setPinfo] = useState("");
  const [accessinglink, setAccessingLink] = useState("");

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Added Successfully");
      navigate("/project");
      dispatch({ type: NEW_BASIC_INFO_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("projectName", projectName);
    myForm.set("pinfo", pinfo);
    myForm.set("accessinglink", accessinglink);

    dispatch(addInfo(myForm));
  };
  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");

  return (
    <Fragment>
      <section className="addinfo">
        <main>
          <h1> Project Information</h1>
          <form encType="multipart/form-data" onSubmit={SubmitHandler}>
            <div>
              <label>Project Name.</label>
              <input
                type="text"
                placeholder="Enter Name."
                value={projectName}
                required
                onChange={(e) => setProjectName(e.target.value)}
              />
            </div>
            <div>
              <label>Project Info</label>
              <input
                type="text"
                placeholder="About Project"
                value={pinfo}
                required
                onChange={(e) => setPinfo(e.target.value)}
              />
            </div>
            <div>
              <label>Accessing Link.</label>
              <input
                type="string"
                placeholder="Link"
                required
                value={accessinglink}
                onChange={(e) => setAccessingLink(e.target.value)}
              />
            </div>
            <p>If there is no project leave it blank</p>

            <Button
              type="submit"
              isLoading={loading ? true : false}
              disabled={loading ? true : false}
              width={isNotSmallerScreen ? '15vw' : '20vw'}
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

export default AddInfo;

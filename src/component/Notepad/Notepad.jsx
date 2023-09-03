import { Button, ButtonGroup, useMediaQuery } from "@chakra-ui/react";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../layouts/Loader";
import { clearErrors } from "../Redux/actions/projectAction";
import {
  deletetxtFile,
  gettxtDetails,
  updateTxtFile,
} from "../Redux/actions/textFileAction";
import {
  DELETE_TXT_FILE_RESET,
  UPDATE_TXT_FILE_RESET,
} from "../Redux/constants/textConstant";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

const Notepad = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { loading, error, mytextfile } = useSelector(
    (state) => state.txtdetail
  );

  const {
    loading: updateLoading,
    error: updateError,
    isUpdated,
    error: deleteError,
    isDeleted,
    loading: deleteLoading,
  } = useSelector((state) => state.txtmanager);

  const { id } = useParams();

  const [content, setContent] = useState("");

  useEffect(() => {
    if (mytextfile && mytextfile._id !== id) {
      dispatch(gettxtDetails(id));
    } else {
      setContent(mytextfile.content);
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
      navigate("/alltxtfiles");
      dispatch({ type: DELETE_TXT_FILE_RESET });
    }

    if (isUpdated) {
      toast.success("Let's Go");
      navigate("/alltxtfiles");
      dispatch({ type: UPDATE_TXT_FILE_RESET });
    }
  }, [
    dispatch,
    error,
    navigate,
    isUpdated,
    deleteError,
    isDeleted,
    updateError,
    mytextfile,
    id,
  ]);

  const updateSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("content", content);

    dispatch(updateTxtFile(id, myForm));
  };

  const deleteHandler = () => {
    dispatch(deletetxtFile(id));
  };

  const navigator = () => {
    navigate("/notes");
  };
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Fragment>
      {loading ? (
        <Loader/>
      ) : (
        <section>
          <form onSubmit={updateSubmitHandler}>
            {/* <ReactQuill
              type="text"
              theme="snow"
              value={content}
              required
              onChange={(e) => setContent(e)}
            /> */}
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={content}
              onChange={(e) => setContent(e)}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />

            <ButtonGroup
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              padding={isNotSmallerScreen ? "2rem" : '1rem'}
            >
              <Button
                type="submit"
                isLoading={updateLoading ? true : false}
                colorScheme="teal"
                variant="solid"
                disabled={updateLoading ? true : false}
              >
                Save
              </Button>

              <Button
                isLoading={deleteLoading ? true : false}
                colorScheme="red"
                variant="solid"
                disabled={deleteLoading ? true : false}
                onClick={deleteHandler}
              >
                Delete Project
              </Button>
              <Button colorScheme="teal" variant="solid" onClick={navigator}>
                Create New
              </Button>
            </ButtonGroup>
          </form>
        </section>
      )}
    </Fragment>
  );
};

export default Notepad;

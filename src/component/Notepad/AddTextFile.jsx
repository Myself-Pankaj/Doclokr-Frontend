import { Button } from '@chakra-ui/react';
import React, { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTextFile } from '../Redux/actions/textFileAction';
import { clearErrors } from '../Redux/actions/userAction';
import { NEW_TXT_FILE_FAIL } from '../Redux/constants/textConstant';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar, { modules, formats } from "./EditorToolbar";


const AddTextFile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const { loading, error, success } = useSelector((state) => state.newtxt);
  
    const [name, setName] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          toast.success("Added Successfully");
          navigate("/alltxtfiles");
          dispatch({ type: NEW_TXT_FILE_FAIL });
        }
      }, [dispatch, error, navigate, success]);

      const SubmitHandler = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("content", content);

    
        dispatch(addTextFile(myForm));
      };
  
  return (
    <Fragment>
    <section className="createtxt">
      <main>
        <h1> Add Files</h1>
        <form encType="multipart/form-data" onSubmit={SubmitHandler}>
          <p>
            <label>NAME . </label>
            <input
              type="text"
              placeholder="Enter Title."
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </p>
          <div>
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={content}
              onChange={(e) => setContent(e)}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />
          </div>
          <Button
            marginTop={4}
            type="submit"
            isLoading={loading ? true : false}
            disabled={loading ? true : false}
            // width={isNotSmallerScreen ? '15vw' : '20vw'}
            colorScheme="teal"
            variant="solid"
          >
            Submit
          </Button>
        </form>
      </main>
    </section>
  </Fragment>
  )
}

export default AddTextFile
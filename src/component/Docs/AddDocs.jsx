import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPubDoc } from "../Redux/actions/pubDocAction";
import { clearErrors } from "../Redux/actions/userAction";
import { BiImageAdd } from "react-icons/bi";
import { NEW_PUB_DOC_RESET } from "../Redux/constants/publicDocConstant";
import { Button } from "@chakra-ui/react";

const AddDocs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.publicDoc);
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [image, setImage] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [otherOption, setOtherOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleBlur = () => {
    if (inputValue.trim() === "") {
      setIsValid(false);
      toast("Please Enter Doc Name");
    } else {
      setIsValid(true);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Added Successfully");
      navigate("/login");
      dispatch({ type: NEW_PUB_DOC_RESET });
    }
  }, [dispatch, error, navigate, success]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    if (name === "Other") {
      myForm.set("name", otherOption);
    } else {
      myForm.set("name", name);
    }
    image.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(addPubDoc(myForm));
  };
  const ImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImage([]);
    setImagePreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview((old) => [...old, reader.result]);
          setImage((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  // const MAX_SIZE = 5000000; // 5MB in bytes
  // const accept = "image/*,.pdf";
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept,
  //   onDrop: (acceptedFiles) => {
  //     const files = acceptedFiles.filter((file) => file.size <= MAX_SIZE);
  //     if (files.length !== acceptedFiles.length) {
  //       toast.error(
  //         `Some files are too large. Please select files smaller than 5MB`
  //       );
  //     }
  //     setImage([]);
  //     setImagePreview([]);
  //     files.forEach((file) => {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         setImagePreview([...imagePreview, reader.result]);
  //         setImage([...image, file]);
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   },
  // });

  return (
    <Fragment>
      <section className="addDocument">
        <form encType="multipart/form-data" onSubmit={SubmitHandler}>
          <div>
            <select value={name} onChange={(e) => setName(e.target.value)}>
              <option value={``}></option>
              <option value={`${user.name}_Addhar Card`}>Aadhar Card</option>
              <option value={`${user.name}Pan Card`}>Pan Card</option>
              <option value={`${user.name}Voting Card`}>Voting card</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              placeholder="Enter other option"
              style={{ display: name === "Other" ? "block" : "none" }}
              onBlur={handleBlur}
              onChange={(e) => setOtherOption(e.target.value)}
            />
          </div>
          <h1>
            <div className="dropzone">
              <BiImageAdd />
             <input
              type="file"
              name="avatar"
              required
              accept="image/*,.pdf"
              placeholder="Drop some files"
              onChange={ImagesChange}
              multiple
            />
             <p>Drag 'n' drop some files here, or click to</p><p> choose files</p> 
            </div>
            {/* <div {...getRootProps()} className='dropzone'>
              <input {...getInputProps()} />
              <BiImageAdd />
              <p>Drag 'n' drop some files here, or click to</p><p> select files</p>
            </div> */}
          </h1>
          {/* 

// Note that there will be nothing logged when files are dropped
<Dropzone onDrop={files => console.log(files)}>
  {({getRootProps, getInputProps}) => (
    <div className="container">
      <div
        {...getRootProps({
          className: 'dropzone',
          onDrop: event => event.stopPropagation()
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
    </div>
  )}
</Dropzone> */}
          <span>
            {imagePreview.map((image, index) => (
              <img key={index} src={image} alt="Img" />
            ))}
          </span>
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
          {/* <a to="javascript: void(window.open('https://www.ilovepdf.com/pdf_to_jpg','_blank'))">
            Note convert PDF files to JPG here
          </a> */}
        </form>
      </section>
    </Fragment>
  );
};

export default AddDocs;

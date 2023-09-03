import React, { Fragment, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from "file-saver";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearErrors,
  deleteDoc,
  getDocDetails,
} from "../Redux/actions/pubDocAction";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { DELETE_PUB_DOC_RESET } from "../Redux/constants/publicDocConstant";
import { FcDownload } from "react-icons/fc";
import { MdDeleteSweep } from "react-icons/md";
import FileFormat from "./FileFormat";

const DocDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { publicDoc, error } = useSelector((state) => state.docDetail);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.removeDoc
  );

  const { id } = useParams();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    dispatch(getDocDetails(id));
  }, [dispatch, error, id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      toast.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      toast.success(" Deleted Successfully");
      navigate("/home");
      dispatch({ type: DELETE_PUB_DOC_RESET });
    }
  }, [dispatch, id, error, deleteError, navigate, isDeleted]);

  const deleteHandler = () => {
    dispatch(deleteDoc(id));
  };

  const downloadImage = () => {
    const image = publicDoc.images[0];
    if (
      image.url.endsWith(".jpg") ||
      image.url.endsWith(".pdf") ||
      image.url.endsWith(".png")
    ) {
      saveAs(image.url, `${publicDoc.name}_Doc.${image.url.split(".").pop()}`);
    } else {
      console.log("Invalid file format");
    }
  };

  return (
    <Fragment>
      <Text
        fontSize={50}
        fontWeight="bold"
        bgGradient="linear(to-r, #010101, #C7EFF2)"
        bgClip="text"
        textAlign="center"
      >
        {publicDoc.name}
      </Text>
      <section className="detail">
        <div>
          <ButtonGroup gap="2vw">
            <Button
              leftIcon={<FcDownload />}
              color="white"
              fontWeight="bold"
              width="34vw"
              borderRadius="md"
              onClick={downloadImage}
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              Download
            </Button>
            <Button
              rightIcon={<MdDeleteSweep />}
              color="white"
              fontWeight="bold"
              width="34vw"
              borderRadius="md"
              onClick={deleteHandler}
              bgGradient="linear(to-r, teal.500, green.500)"
              _hover={{
                bgGradient: "linear(to-r, red.500, yellow.500)",
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </div>
        <p>
          <FileFormat />
        </p>
      </section>
    </Fragment>
  );
};

export default DocDetail;

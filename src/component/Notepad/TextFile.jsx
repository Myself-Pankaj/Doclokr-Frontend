import React, { Fragment, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import{AiFillFileAdd} from 'react-icons/ai';
import { showTextFile } from "../Redux/actions/textFileAction";
import { clearErrors } from "../Redux/actions/userAction";
import TxtCard from "./TxtCard";
import Loader from "../layouts/Loader";
import { Link } from "react-router-dom";

const TextFile = () => {
  const dispatch = useDispatch();
  const { loading, error, mytextfile } = useSelector(
    (state) => state.showtxtfile
  );

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(showTextFile());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading === false ? (
        <section className="txtFile">
          <main>
            <h1>All Files</h1>
           <Link to='/notes'> <AiFillFileAdd/></Link>
          </main>
          <div>
          {mytextfile &&
            mytextfile.map((txt) => <TxtCard key={txt._id} txt={txt} />)}
            </div>
        </section>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default TextFile;

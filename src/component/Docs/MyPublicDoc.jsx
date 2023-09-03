import React, { Fragment, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getMyDocs } from "../Redux/actions/pubDocAction";
import { clearErrors } from "../Redux/actions/userAction";
import DocCard from "./DocCard";
import { Link } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
import Loader from "../layouts/Loader";

const MyPublicDoc = () => {
  const dispatch = useDispatch();
  const { loading, error, myPublicDocs } = useSelector((state) => state.mydoc);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getMyDocs());
  }, [dispatch, error]);
  return (
    <Fragment>
      {loading === false ? (
        <section className="docs">
          <main>
            <h1>All Documents</h1>
            <Link to="/addDocs">
              {" "}
              <AiFillFileAdd />
            </Link>
          </main>
          <div>
            {myPublicDocs &&
              myPublicDocs.map((myPublicDoc) => (
                <DocCard key={myPublicDoc._id} myPublicDoc={myPublicDoc} />
              ))}
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default MyPublicDoc;

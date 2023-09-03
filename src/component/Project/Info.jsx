import React, { Fragment, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getAboutMe } from "../Redux/actions/projectAction";
import InfoCard from "./InfoCard";
import { AiFillFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import Loader from "../layouts/Loader";

const Info = () => {
  const dispatch = useDispatch();

  const {loading, error,myInfo } = useSelector((state) => state.myinfo);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getAboutMe());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading === false ? (
        <section className="pro_ject">
        <main>
              <h1>Your Projects</h1>
             <Link to='/addinfo'> <AiFillFileAdd/></Link>
            </main>
            <div>
          {myInfo &&
            myInfo.map((info) => (
              <InfoCard key={info._id} info={info} />
            ))}
            </div>
        </section>
      ):( <Loader/>)}
      
    </Fragment>
  );
};

export default Info;

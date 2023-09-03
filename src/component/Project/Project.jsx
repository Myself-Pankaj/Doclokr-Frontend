import React, { Fragment, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/Loader";
import { clearErrors, getMyInfos } from "../Redux/actions/projectAction";
import ProjectCard from "./ProjectCard";

const Project = () => {
  const dispatch = useDispatch();
  const { loading, error, myProject } = useSelector((state) => state.project);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(getMyInfos());
  }, [dispatch, error]);

  return (
    <Fragment>
      {loading === false ? (
        <section>
          {myProject &&
            myProject.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
        </section>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default Project;

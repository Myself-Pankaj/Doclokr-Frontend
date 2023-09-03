import { Box, Flex, useMediaQuery,} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
import project from '../../Assets/AI.jpg';
const InfoCard = ({ info }) => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");

  return (
    <Fragment>
      <Flex backgroundColor='black' marginBottom={isNotSmallerScreen? '50px' : '20px'}>
        <Box width={isNotSmallerScreen ? '70vw' : '100vw'} height={isNotSmallerScreen ? '70vh': '20vh '} margin="auto">
          <section className="second">
            <img
              src={project}
              alt="Pankaj"
            ></img>
            <div>
              <h1>{info.projectName}</h1>
              <p>{info.pinfo}</p>
              <a
                href={info.accessinglink}
                target="_blank
              "
              >
                Demo..
              </a>
              <h2 className="h2">
              <Link to={`/updateProject/${info._id}`}>
                Modify Project
                <MdModeEdit/>
            </Link>
            </h2>
            </div>
          
          </section>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default InfoCard;

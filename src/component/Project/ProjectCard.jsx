import { Box, Button, ButtonGroup, Flex, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { useSelector } from "react-redux";
import Info from "./Info";
import { saveAs } from "file-saver";
import { AiFillSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // const downloadResume = () => {
  //   saveAs(`${project.resumes[0].url}`, `Resume.pdf`); // Put your image url here.
  // };

  const downloadResume = () => {
    const image = project.resumes[0];
    if (
      image.url.endsWith(".jpg") ||
      image.url.endsWith(".pdf") ||
      image.url.endsWith(".png")
    ) {
      saveAs(image.url, `Resume.${image.url.split(".").pop()}`);
    } else {
      console.log("Invalid file format");
    }
  };
  const navigator =() =>{
    navigate(`/manage/${project._id}`)
  }

  const [isNotSmallerScreen] = useMediaQuery("(min-width:700px)");

  return (
    <Stack backgroundColor="black" position="relative" width="100vw">
      <Flex direction="column">
        <Box width={isNotSmallerScreen ? '100vw' : '100vw'} margin={isNotSmallerScreen ? 'auto' :'auto'} height={isNotSmallerScreen?'60vh' : '50vh'}>
          <Flex direction="row" alignItems="center">
            <section className="first">
              <img src={user.photo} alt="Pankaj"></img>
              <h1>{user.name}</h1>
              <h2>{project.contactNo}</h2>
              <p>{project.bio}</p>
            </section>
            <section className="buttonGroup">
              <ButtonGroup  gap={isNotSmallerScreen ? '2rem' :'1rem'} flexWrap={isNotSmallerScreen ? 'nowrap' : 'wrap'} >
                <Button
                  leftIcon={<BsFillArrowDownCircleFill />}
                  color="black"
                  width={isNotSmallerScreen ? '15rem' : '9rem'}
                  fontWeight="bold"
                  onClick={downloadResume}
                  borderRadius="md"
                  bgGradient="linear(to-r, #DBE3EE, #A8EB12)"
                  _hover={{
                    bgGradient: "linear(to-r, #DBE3EE, #D4E9A4)",
                    color: "teal.500",
                  }}
                >
                  Download CV
                </Button>
                <Button
                  leftIcon={<MdContactSupport />}
                  color="black"
                  width={isNotSmallerScreen ? '15rem' : '8.5rem'}
                  fontWeight="bold"
                  borderRadius="md"
                  bgGradient="linear(to-r, #DBE3EE, #A8EB12)"
                  _hover={{
                    bgGradient: "linear(to-r, #DBE3EE, #D4E9A4)",
                    color: "teal.500",
                  }}
                >
                  Contact Me
                </Button>
                <a
                  href="http://instagram.com/ifeelpankaj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    leftIcon={<BsFillArrowDownCircleFill />}
                    color="black"
                    fontWeight="bold"
                    width={isNotSmallerScreen ? '15rem' : '8.5rem'}
                    borderRadius="md"
                    bgGradient="linear(to-r, #DBE3EE, #A8EB12)"
                    _hover={{
                      bgGradient: "linear(to-r, #DBE3EE, #D4E9A4)",
                      color: "teal.500",
                    }}
                  >
                    InstaGram
                  </Button>
                </a>
                <Button
                    leftIcon={<AiFillSetting />}
                    color="black"
                    fontWeight="bold"
                    width={isNotSmallerScreen ? '15rem' : '8.5rem'}
                    borderRadius="md"
                    onClick={navigator}
                    bgGradient="linear(to-r, #DBE3EE, #A8EB12)"
                    _hover={{
                      bgGradient: "linear(to-r, #DBE3EE, #D4E9A4)",
                      color: "teal.500",
                    }}
                  >
                    Manage
                  </Button>
              </ButtonGroup>
            </section>
          </Flex>
        </Box>
      </Flex>
      <Info />
      {/* <section className="third">
<Link to={`/type/${user._id}`}>
  {" "}
  <Text
    fontSize={20}
    fontWeight="thin"
    bgGradient="linear(to-l, #ACCFFC, #3809F8)"
    bgClip="text"
    textAlign="center"
  >
    Update Instgram
  </Text>
</Link>

<Link to={`/type/${project._id}`}>  {" "}
  <Text
    fontSize={20}
    fontWeight="thin"
    bgGradient="linear(to-l, #ACCFFC, #3809F8)"
    bgClip="text"
    textAlign="center"
  >
    Update Project Accessing Link
  </Text></Link>
<Link to={`/type/${project._id}`}>  {" "}
  <Text
    fontSize={20}
    fontWeight="thin"
    bgGradient="linear(to-l, #ACCFFC, #3809F8)"
    bgClip="text"
    textAlign="center"
  >
  Update Resume
  </Text></Link>
<Link to={`/type/${project._id}`}>  {" "}
  <Text
    fontSize={20}
    fontWeight="thin"
    bgGradient="linear(to-l, #ACCFFC, #3809F8)"
    bgClip="text"
    textAlign="center"
  >
   Remove Project
  </Text></Link>
</section> */}
    </Stack>
  );
};

export default ProjectCard;

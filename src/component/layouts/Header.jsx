import React, { Fragment } from "react";
import { Flex,  IconButton, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, } from 'react-icons/fa';
import { GiPadlockOpen,  } from 'react-icons/gi';
import { RiAccountPinCircleFill,  } from 'react-icons/ri';

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const { isAuthenticated } = useSelector(
        (state) => state.auth
      );
   const Account = () =>{
    navigate('/account')
   }
  return (
    <Fragment>
      <VStack p={2} boxShadow='0 0 5px rgba(15, 15, 15, 0.26)' position='sticky'>
        <Flex w="98vw">
        <IconButton
            ml={15}
            icon={isAuthenticated ? <RiAccountPinCircleFill /> : <GiPadlockOpen />}
            isRound="true"
            colorScheme='red'
            onClick={Account}
            size='lg'
          ></IconButton>
          <Spacer><Flex 
          direction='row'
          justifyContent='center'
          fontSize='4xl'
          color='linear(to-l, #7928CA, #FF0080)' 
          fontWeight='bold'
          ><Text bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip='text'>DocLocKr</Text> </Flex></Spacer>
          <IconButton
            ml={15}
            colorScheme='teal'
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            size='lg'
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
      </VStack >
    </Fragment>
  );
};

export default Header;

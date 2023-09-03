import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";


function Projects() {
  return (
    <Box>
      <HStack spacing='24px'>
        <Box h='40vh' width='25vw' bg='yellow.200'>
          <HStack spacing='2vmax' p={5} display='flex'>
            <Flex direction='row' >
              <Center width='22vw' >
                <MdArrowForwardIos fontSize='2vmax'color='black' />
                <MdArrowForwardIos fontSize='2vmax' color='black'/>
                <MdArrowForwardIos fontSize='2vmax' color='black'/>
                <Text fontSize='2vmax' fontWeight='extrabold' color='black'>Project 1</Text>
                <MdArrowBackIosNew fontSize='2vmax'color='black' />
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>

              </Center>
            </Flex>
          </HStack>
        </Box>


        <Box w='40px' h='40vh' width='25vw' bg='tomato'>
          <HStack spacing='2vmax' p={5} display='flex'>
            <Flex direction='row' >
              <Center width='22vw' >
                <MdArrowForwardIos fontSize='2vmax'color='black' />
                <MdArrowForwardIos fontSize='2vmax' color='black'/>
                <MdArrowForwardIos fontSize='2vmax' color='black'/>
                <Text fontSize='2vmax' fontWeight='extrabold'color='black' >Project 2</Text>
                <MdArrowBackIosNew fontSize='2vmax'color='black' />
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>

              </Center>
            </Flex>
          </HStack>
        </Box>


        <Box w='40px' h='40vh' width='25vw' bg='pink.100'>
          <HStack spacing='2vmax' p={5} display='flex'>
            <Flex direction='row' >
              <Center width='22vw' >
                <MdArrowForwardIos fontSize='2vmax' color='black' />
                <MdArrowForwardIos fontSize='2vmax' color='black'/>
                <MdArrowForwardIos fontSize='2vmax'color='black' />
                <Text fontSize='2vmax' fontWeight='extrabold' color='black' >Project 3</Text>
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>
                <MdArrowBackIosNew fontSize='2vmax' color='black'/>

              </Center>
            </Flex>
          </HStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default Projects
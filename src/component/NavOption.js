import { Box, Flex, IconButton, Link, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { AiTwotoneHome } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { IoLockOpen } from "react-icons/io5";



function NavOption() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (

    <Box as='NavOptions' position='fixed' width='100vw' bottom={isNotSmallerScreen ? "1vmax" : "4vmax"}height='6vh'  
    opacity='0.7'>
      <Flex direction='row'
       bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' 
       justifyContent='center' 
       marginLeft={isNotSmallerScreen ? "35vmax" : "1vmax"} 
       marginRight={isNotSmallerScreen ? "35vmax" : "1vmax"}  
       p={2}
       borderRadius='20px'
       >
        
          <Link  href='/home'>
          <IconButton ml={10} icon={<AiTwotoneHome />} isRound='true'  ></IconButton>
          </Link>
          <Link  href='/contact'>
          <IconButton ml={10} icon={<MdContacts />} isRound='true'  ></IconButton>
          </Link>
          <Link  href='/locker'>
          <IconButton ml={10} icon={<IoLockOpen />} isRound='true'  ></IconButton>
          </Link>
          <Link  href='/about'>
          <IconButton ml={10} icon={<SiAboutdotme />} isRound='true'  ></IconButton>
          </Link>
        
      </Flex>
    </Box>
  )
}

export default NavOption
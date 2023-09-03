import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";

function Header() {
  // const { colorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Stack
      backgroundImage={
        isNotSmallerScreen
          ? "none"
          : "https://res.cloudinary.com/buymybook/image/upload/v1660748070/alex-padurariu-ZR48YvUpk04-unsplash_atxmes.jpg"
      }
      objectFit="cover"
    >
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "22" : "0"}
        alignSelf="flex-start"
      >
        <Box w="100%" p={4} color="white" mt={isNotSmallerScreen ? "0" : 16}>
          <Text
            fontSize={50}
            fontWeight="bold"
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            textAlign="center"
          >
            Pankaj
          </Text>
          <Center paddingTop={10}>
            <ButtonGroup gap={3}>
              <Button
                leftIcon={<BsFillArrowDownCircleFill />}
                color="white"
                fontWeight="bold"
                borderRadius="md"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                Download CV
              </Button>
              <Button
                rightIcon={<MdContactSupport />}
                color="white"
                fontWeight="bold"
                borderRadius="md"
                bgGradient="linear(to-r, teal.500, green.500)"
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
              >
                Contact Me
              </Button>
            </ButtonGroup>
          </Center>
          <Center marginTop={10}>
            <Image
              width={isNotSmallerScreen ? "30vw" : "50vw"}
              height={isNotSmallerScreen ? "90vh" : "40vh"}
              objectFit="cover"
              borderTopRadius={300}
              src="https://res.cloudinary.com/buymybook/image/upload/v1660735444/IMG_20220221_155501_613_z6ll7f.webp"
              alt="Pankaj"
            />
          </Center>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;

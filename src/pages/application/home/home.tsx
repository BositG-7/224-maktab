import { Box, Flex, Title, Text } from "@mantine/core";
import { FunctionComponent } from "react";

import logo from "../../../assets/mk hovli.jpg";
import background from "../../../assets/maktab asosiy.jpg";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const i = 0;

  return (
    <>
      <Flex
        h="80vh"
        justify="center"
        gap={20}
        align="center"
        w="90%"
        opacity={0.8}
        p={16}
        sx={{ overflow: "hidden" }}
        direction="column"
      >
        <Title>224-maktab</Title>
        <Flex gap="20px" sx={{ position: "relative" }} w="100%" h="100%">
          <Box w="50%">
            <img
              src={logo}
              style={{ borderRadius: "5%" }}
              width="100%"
              height="90%"
              alt=""
            />
          </Box>
          <Box w="50%" mt="100px">
            <Title>
              Tarbiya biz uchun yo hayot – yo mamot, yo najot – yo halokat, yo
              saodat – yo falokat masalasidir
            </Title>
            <Text style={{ textAlign: "right" }}>A. Avloniy</Text>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

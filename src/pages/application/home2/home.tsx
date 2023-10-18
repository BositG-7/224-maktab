import { FunctionComponent } from "react";

import img1 from "../../../assets/hona1.jpg";
import img2 from "../../../assets/images/photo_2023-08-29_02-29-14.jpg";
import { Box, Flex, Title } from "@mantine/core";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const i = 0;

  return (
    <>
      <Box h="150vh">
        <Flex justify="center" direction="column" align="center" gap="20px">
          <Title>Informatika</Title>
          <Flex justify="center" gap={20} h="100%" w="100%" p={24}>
            <Flex
              justify="center"
              align="center"
              w="50%"
              h="100%"
              p={25}
              gap={20}
              direction="column"
            >
              <img
                src={img1}
                style={{ borderRadius: "5%" }}
                width="100%"
                height="50%"
                alt=""
              />
              <img
                style={{ borderRadius: "5%" }}
                src={img2}
                width="100%"
                height="50%"
                alt=""
              />
            </Flex>
            <Box w="50%">
              <Title mt={100}>
                Maktabimiz kompyuter xonalari eng so'nggi zamonaviy texnika
                vositalari bilan jihozlangan Informatika xonasida darslar
                mazmunli o‘tkaziladi
              </Title>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;

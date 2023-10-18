import { FunctionComponent } from "react";

import { Flex, Title } from "@mantine/core";

import img1 from "../../../assets/dars1.jpg";
import img2 from "../../../assets/dars2.jpg";
import img3 from "../../../assets/dars3.jpg";
import img4 from "../../../assets/dars4.jpg";
import img5 from "../../../assets/dars5.jpg";
import img6 from "../../../assets/dars6.jpg";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const i = 0;

  return (
    <>
      <Flex
        h="110vh"
        justify="center"
        gap={20}
        align="center"
        w="100%"
        p={24}
        direction="column"
      >
        <Flex justify="center" align="center" w="70%" gap="20px" maw={500}>
          <Title size="25px">
            Mahoratli ustozlar dars jarayonlarini qiziqarli va mazmunli tashkil
            etadilar O‘quvchilar ishtiyoq bilan dars tayyorlashadi
          </Title>
        </Flex>
        <Flex justify="center" align="center" w="70%" gap="20px">
          <img
            style={{ borderRadius: "5%" }}
            src={img1}
            height={300}
            width="100%"
            alt=""
          />
        </Flex>
        <Flex justify="center" align="center" w="70%" gap="20px">
          <img
            style={{ borderRadius: "5%" }}
            src={img2}
            height={200}
            width="33%"
            alt=""
          />
          <img
            style={{ borderRadius: "5%" }}
            src={img3}
            height={200}
            width="33%"
            alt=""
          />
          <img
            style={{ borderRadius: "5%" }}
            src={img4}
            height={200}
            width="100%"
            alt=""
          />
        </Flex>
        <Flex justify="center" align="center" w="70%" gap="20px">
          <img
            style={{ borderRadius: "5%" }}
            src={img5}
            height={200}
            width="50%"
            alt=""
          />
          <img
            style={{ borderRadius: "5%" }}
            src={img6}
            height={200}
            width="50%"
            alt=""
          />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

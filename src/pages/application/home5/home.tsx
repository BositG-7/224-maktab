import { FunctionComponent } from "react";

import { Box, Flex, Title } from "@mantine/core";

import img1 from "../../../assets/images/yutuq1.jpg";
import img2 from "../../../assets/images/yutuq2.jpg";
import img3 from "../../../assets/images/yutuq3.jpg";
import img4 from "../../../assets/images/yutuq4.jpg";
import img5 from "../../../assets/images/yutuq5.jpg";
interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const i = 0;

  return (
    <>
      <Box>
        <Flex
          w="100%"
          justify="center"
          align="center"
          direction="column"
          gap="20px"
        >
          <Title>O‘quvchilar yutug‘i</Title>
          <Flex justify="center" align="center" direction="column" gap="20px">
            <img
              style={{ borderRadius: "5%" }}
              width="100%"
              height="50%"
              src={img1}
              alt=""
            />
            <img
              style={{ borderRadius: "5%" }}
              width="100%"
              height="50%"
              src={img2}
              alt=""
            />
            <Title>
              Toshkent shahar Olmazor hokimdan sovg'a ID yonalish boyicha
            </Title>
          </Flex>

          <Flex justify="center" align="center" direction="column" gap="20px">
            <img
              style={{ borderRadius: "5%" }}
              width="100%"
              height="50%"
              src={img3}
              alt=""
            />
            <Title>
              "Ot izini toy bosar" yoxud kichik Magdiev "O‘zbekiston Open"
              chempioni!
            </Title>
          </Flex>
          <Title>O‘qituvchining yutug‘i</Title>

          <Flex justify="center" align="center" direction="column" gap="20px">
            <img
              style={{ borderRadius: "5%" }}
              width="100%"
              height="50%"
              src={img4}
              alt=""
            />
            <Title>
              O‘qituvchilarimizning Google For Education saytidan olgan
              sertifikatlari
            </Title>
          </Flex>
          <Flex justify="center" align="center" direction="column" gap="20px">
            <img
              style={{ borderRadius: "5%" }}
              width="100%"
              height="50%"
              src={img5}
              alt=""
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;

import { FunctionComponent } from "react";

import { Box, Flex, Title } from "@mantine/core";

import img1 from "../../../assets/images/tadbirlar.jpg";
import img2 from "../../../assets/images/tadbir rasm.jpg";
// @ts-expect-error
import video from "../../../assets/images/tadbir.mp4";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const i = 0;

  return (
    <>
      <Flex justify="center" direction="column" align="center">
        <Flex
          h="170vh"
          justify="center"
          gap={20}
          align="center"
          w="100%"
          p={24}
          direction="column"
        >
          <Flex justify="center" align="center" gap={20} direction="column">
            <Title size="20px" maw={650}>
              Olmazor tumani 224-maktabda Ona tili va adabiyot metod birlashmasi
              faxriy maktabimizning eng bilimli ustozlaridan biri Dadajonova
              Xadicha Djuraevna tashabbuslari bilan "Kitoblar-dunyosi
              shaydosimiz " shiori ostida 6- sinf o‘quvchilari bilan birgalikda
              Gafur Gulomning xayot va ijodi, asarlari xamda Shum bola asarini
              kengroq o‘rganish uchun syujetli dars mashg‘uloti bo‘lib o‘tdi...
            </Title>
            <img
              src={img2}
              style={{ borderRadius: "5%" }}
              width={800}
              height={500}
              alt=""
            />
          </Flex>
          <Flex justify="center" align="center" w="100%" gap="20px" maw={800}>
            <Title size="20px">
              Bugun 29.09.2023 yil kuni Olmazor tumani 224-maktabda 1-oktyabr
              ''Ustoz va murabbiylar kuni''ga bag‘ishlangan
              ''Ta'zimdamiz-ustozim'' shiori ostida bayram tadbiri bo‘lib o‘tti.
            </Title>
          </Flex>
          <Flex justify="center" align="center" w="70%" gap="20px">
            <img
              style={{ borderRadius: "5%" }}
              src={img1}
              height={600}
              width="100%"
              alt=""
            />
          </Flex>
        </Flex>

        <Flex
          h="40vh"
          justify="center"
          gap={20}
          align="center"
          w="100%"
          p={24}
          direction="column"
        >
          <Flex
            justify="center"
            mt={50}
            align="center"
            w="100%"
            gap="20px"
            maw={800}
          >
            <Title size="20px">
              Assalomu alaykum. 7-I sinf o‘quvchilari hamda ota onalari
              1-oktyabr "O‘qituvchi hamda murabbiylar kuni"  bayrami munosabati
              bilan 224-maktabning barcha o‘qituvchilarini tabriklaydilar
            </Title>
          </Flex>
          <Flex justify="center" align="center" w="70%" gap="20px">
            <video
              style={{
                width: 380,
                height: "auto",
                borderRadius: "25px",
                border: "1px solid #000",
              }}
              autoPlay
              loop
              muted
              controls
              src={video}
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;

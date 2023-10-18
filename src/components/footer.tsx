import { useNavigate } from "react-router-dom";

import logo from "../assets/logode.jpg";

import "../assets/styles/footer.scss";
import { Flex, Title } from "@mantine/core";

function Footer() {
  const navigete = useNavigate();

  return (
    <section className="footer">
      <div className="boxes">
        <div className="box">
          <Flex justify="space-between" w="80%" align="center" gap="20px">
            <img src={logo} alt="logo" />
            <div className="social">
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-telegram" />
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-youtube" />
            </div>
            <Title>
              <a
                style={{ color: "white" }}
                href="https://yandex.uz/maps/org/27320269420/?ll=69.222136%2C41.347290&z=15"
              >
                Maktabimiz manzili
              </a>
            </Title>
          </Flex>
        </div>
      </div>
    </section>
  );
}

export default Footer;

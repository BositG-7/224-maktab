import { Box, Button } from "@mantine/core";
import { FunctionComponent } from "react";

import logo from "../assets/logode.jpg";
import { useNavigate } from "react-router-dom";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        h="100px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
        w="90%"
        p={24}
      >
        <Box>
          <img
            src={logo}
            alt=""
            width={100}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <Box
          className="nav"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "30px",
            padding: "24px",
            color: "rgba(17, 17, 17, 0.54)", // rgba ni string sifatida ko'rsating
            fontFamily: "Gilroy",

            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          <Button
            sx={{
              background: "none",
              color: "#FFF",
              ":hover": {
                background: "none", // O'zgarishi mumkin
                color: "blue", // O'zgarishi mumkin
              },
            }}
            className="title"
            // @ts-ignore

            size={14}
            onClick={() => {
              navigate("/");
            }}
          >
            Bosh sahifa
          </Button>
          <Button
            onClick={() => {
              navigate("/home2");
            }}
            sx={{
              background: "none",
              color: "#FFF",
              ":hover": {
                background: "none", // O'zgarishi mumkin
                color: "blue", // O'zgarishi mumkin
              },
            }}
            className="title"
            // @ts-ignore
            size={14}
          >
            Xonalar
          </Button>
          <Button
            onClick={() => {
              navigate("/home3");
            }}
            sx={{
              background: "none",
              color: "#FFF",
              ":hover": {
                background: "none", // O'zgarishi mumkin
                color: "blue", // O'zgarishi mumkin
              },
            }}
            className="title"
            // @ts-ignore
            size={14}
          >
            Darslar
          </Button>
          <Button
            onClick={() => {
              navigate("/home4");
            }}
            sx={{
              background: "none",
              color: "#FFF",
              ":hover": {
                background: "none", // O'zgarishi mumkin
                color: "blue", // O'zgarishi mumkin
              },
            }}
            className="title"
            // @ts-ignore
            size={14}
          >
            Tadbirlar
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() => {
              navigate("/auth");
            }}
            variant="gradient"
            gradient={{ from: "blue", to: "red", deg: 90 }}
          >
            Kirish
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;

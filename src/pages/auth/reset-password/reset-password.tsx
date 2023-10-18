// ResetPassword.tsx

import React, { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Box, Button, Flex, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";

import cursor from "../../../assets/images/cursor.png";
import threeD from "../../../assets/images/threeD.png";

interface ResetPasswordProps {}

const schema = yup.object({
  activation_code: yup.string().min(6).label("Activation Code").required(),
  new_password: yup.string().min(6).label("New Password").required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .label("Confirm password")
    .required(),
});

const ResetPassword: FunctionComponent<ResetPasswordProps> = () => {
  const form = useForm<any>({
    initialValues: {
      activation_code: "", // Initialize with an empty string, not 0
      new_password: "",
      confirm_password: "",
    },
    validate: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Box h="100vh" w="100%">
      <Box
        h="90vh"
        w="100%"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "200px",
        }}
      >
        <div className="right">
          <img src={cursor} alt="cursor" />
        </div>
        <form onSubmit={form.onSubmit(onSubmit)}>
          <Flex
            w="600px"
            direction="column"
            justify="center"
            gap={50}
            align="center"
            p={20}
          >
            <h1>Check Code</h1>

            <PasswordInput
              placeholder="Activation Code"
              sx={{
                border: "none",
                input: {
                  height: "45px",
                  borderRadius: "16px",
                  outline: "none",
                  border: "none",
                  padding: "20px 15px",
                  fontSize: "18px",
                  color: "rgba(17, 17, 17, 0.36)",
                  backgroundColor: "rgba(17, 17, 17, 0.02)",
                },
              }}
              {...form.getInputProps("activation_code")}
              w="100%"
            />
            <PasswordInput
              placeholder="New Password"
              sx={{
                border: "none",
                input: {
                  height: "45px",
                  borderRadius: "16px",
                  outline: "none",
                  border: "none",
                  padding: "20px 15px",
                  fontSize: "18px",
                  color: "rgba(17, 17, 17, 0.36)",
                  backgroundColor: "rgba(17, 17, 17, 0.02)",
                },
              }}
              {...form.getInputProps("new_password")}
              w="100%"
            />
            <PasswordInput
              placeholder="Confirm Password"
              sx={{
                border: "none",
                input: {
                  height: "45px",
                  borderRadius: "16px",
                  outline: "none",
                  border: "none",
                  padding: "20px 15px",
                  fontSize: "18px",
                  color: "rgba(17, 17, 17, 0.36)",
                  backgroundColor: "rgba(17, 17, 17, 0.02)",
                },
              }}
              {...form.getInputProps("confirm_password")}
              w="100%"
            />

            <Button type="submit"> Davom etish</Button>
          </Flex>
        </form>
        <div className="left">
          <img src={threeD} alt="threeD" />
        </div>
      </Box>
    </Box>
  );
};

export default ResetPassword;
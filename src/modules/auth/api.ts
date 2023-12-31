/* eslint-disable no-useless-catch */

import { objectToFormData } from "utils/convertor";
import { IApi } from "./types";
import http from "services/http";

export const Register = ({ ...params }: IApi.Register.Request) =>
  http.post<IApi.Register.Response>(
    "/user/register",
    objectToFormData({ ...params })
  );

export const Login = ({ ...params }: IApi.Login.Request) =>
  http.post<IApi.Login.Response>(
    "/user/token",
    objectToFormData({ ...params })
  );

export const Profile = () => http.get("/user/me");
export const SendEmail = ({ ...params }: IApi.SendEmail.Request) =>
  http.post("/user/send-email", objectToFormData({ ...params }));
export const ResetPassword = ({ ...params }: IApi.ResetPassword.Request) =>
  http.patch("/user/reset-passwd-confirm", objectToFormData({ ...params }));

export const Checkpassword = ({
  email,
  activation_code,
}: IApi.Checkpassword.Request) =>
  http.post(
    "/user/check-activate-code",
    objectToFormData({ email, activation_code })
  );

export const EditProfil = (formData: any) => http.patch("/user/me", formData);

export const UpdateImage = (formData: any) => http.patch("/user/me", formData);

export const SpikkerCart = () => http.get("/speaker_card");
export const ResetEmaill = ({ ...params }: IApi.ResetEmail.Request) =>
  http.post("/user/reset-passwd", objectToFormData({ ...params }));

export const RefleshToken = ({ refresh }: any) => {
  http.post("/user/token/refresh", { refresh });
};

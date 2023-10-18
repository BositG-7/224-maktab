import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { Application, Auth } from "pages";
import AuthProtected from "./auth-protected";

const Routes = () => {
  return (
    <Switch>
      <Route path="" element={<Application.Home.Home />} />
      <Route path="home2" element={<Application.Home2.Home2 />} />
      <Route path="home3" element={<Application.Home3.Home3 />} />
      <Route path="home4" element={<Application.Home4.Home4 />} />

      <Route
        path="auth"
        element={<AuthProtected allowed={true} redirectURL="/" />}
      >
        <Route path="login" element={<Auth.Login />} />
        <Route path="register" element={<Auth.Register />} />
        <Route path="check-password" element={<Auth.CheckPassword />} />
        <Route path="reset-email" element={<Auth.Reset.ResetEmail />} />
        <Route path="reset-password" element={<Auth.Reset.ResetPassword />} />
        <Route path="verification" element={<Auth.Verification />} />
        <Route path="*" index element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to={true ? "/" : "/auth/login"} />} />
    </Switch>
  );
};

export default Routes;

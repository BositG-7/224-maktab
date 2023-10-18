import { Navigate, Route, Routes as Switch } from "react-router-dom";
import { Application, Auth } from "pages";
import AuthProtected from "./auth-protected";
import { getSessionReset, getSessionVerification } from "services/store";
import { useAuth } from "modules/auth/context";

const Routes = () => {
  const { user } = useAuth();

  const verification = getSessionVerification().email;
  const reset = getSessionReset().email;

  console.log(user);

  return (
    <Switch>
      <Route path="" element={<Application.Home.Home />} />
      <Route path="home2" element={<Application.Home2.Home2 />} />
      <Route path="home3" element={<Application.Home3.Home3 />} />
      <Route path="home4" element={<Application.Home4.Home4 />} />
      <Route path="home5" element={<Application.Home5.Home5 />} />

      <Route
        path="auth"
        element={<AuthProtected allowed={!user} redirectURL="/" />}
      >
        <Route path="login" element={<Auth.Login />} />
        <Route
          path="register"
          element={
            verification ? (
              <Auth.Register />
            ) : (
              <Navigate to="/auth/verification" />
            )
          }
        />
        <Route
          path="check-password"
          element={
            verification ? (
              <Auth.CheckPassword />
            ) : (
              <Navigate to="/auth/verification" />
            )
          }
        />
        <Route path="reset-email" element={<Auth.Reset.ResetEmail />} />
        <Route
          path="reset-password"
          element={
            reset ? (
              <Auth.Reset.ResetPassword />
            ) : (
              <Navigate to="/auth/reset-email" />
            )
          }
        />
        <Route path="verification" element={<Auth.Verification />} />
        <Route path="*" index element={<Navigate to="/auth/login" />} />
      </Route>

      <Route path="*" element={<Navigate to={true ? "/" : "/auth/login"} />} />
    </Switch>
  );
};

export default Routes;

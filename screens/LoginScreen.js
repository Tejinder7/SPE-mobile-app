import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState } from "react";
import { Alert } from "react-native";

import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import LoginController from "../controllers/LoginController";
import { AuthContext } from "../store/auth-context";
import { login } from "../util/auth";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const response = await LoginController.loginUser(email, password);
      
      console.log("Auth Id is");
      console.log(response.authId);
      authCtx.authenticate(response.token, response.authId.toString());
      console.log("Printing from async storage");
      console.log(AsyncStorage.getItem("token"));
    } catch (error) {
      // console.log(error.response.message);
      Alert.alert(
        "Authentication failed!",
        "Could not log you in, please check your credentials or try again later"
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;

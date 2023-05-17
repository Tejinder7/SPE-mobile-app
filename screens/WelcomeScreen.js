import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import Button from "../components/ui/Button";
import { AuthContext } from "../store/auth-context";
import RestaurantsScreen from "./RestaurantsScreen";

function WelcomeScreen() {
  // const [fetchedMessage, setFetchedMessage] = useState("");
  const navigation = useNavigation();

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://react-native-course-912ff-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth=" +
  //         token
  //     )
  //     .then((response) => {
  //       setFetchedMessage(response.data);
  //     });
  // }, [token]);

  function navigationHandler(){
    navigation.navigate("Restaurants")
  }

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <View style={styles.buttons}>
        <Button onPress={navigationHandler}>
          Tap me!
        </Button>
      </View>
      {/* <Text>{fetchedMessage}</Text> */}
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

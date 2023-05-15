import { View, Image, StyleSheet } from "react-native";
import {Colors} from "../constants/styles";

function SplashScreen() {
  return (
    <View style={styles.inputContainer}>
      <Image
        style={styles.image}
        source={require("../assets/images/waiter.png")}
      />
    </View>
  );
}

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Colors.primary100,
  },
});

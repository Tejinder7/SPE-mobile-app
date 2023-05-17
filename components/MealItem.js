import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import MealsDetails from "./MealDetails";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "./ui/IconButton";
import Button from "./ui/Button";
import { CartContext } from "../store/cart-context";

function MealItem({ id, name, imageUrl, category, price }) {
  const navigation = useNavigation();
  const cartCtx = useContext(CartContext);
  const[isAddedToCart, setIsAddedToCart]= useState(false)

  const dish = {
    dishId: id,
    name: name,
    price: price,
  };

  function headerButtonPressHandler() {
    navigation.navigate("Cart");
  }

  function changeAddedToCartStatus() {
    if (isAddedToCart) {
      cartCtx.removeFromCart(dish);
      setIsAddedToCart((currentValue) => !currentValue)
    } else {
      cartCtx.addToCart(dish);
      setIsAddedToCart((currentValue) => !currentValue)
    }

    // console.log(cartCtx.dishList);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="cart"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <View style={styles.mealItem}>
      <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
        <MealsDetails category={category} price={price} />
        <View style={styles.buttons}>
          <Button onPress={changeAddedToCartStatus}>
            {isAddedToCart ? "Remove" : "Add to Cart"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS == "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
    // justifyContent: "left"
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 8,
  },
  price: {
    textAlign: "center",
    fontSize: 16,
    color: "#e13260",
  },
  buttons: {
    marginBottom: 12,
    // justifyContent:"center",
    alignItems: "center",
    // width:"50%"
  },
});

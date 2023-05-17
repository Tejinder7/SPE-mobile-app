import { useEffect, useLayoutEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import RestaurantController from "../controllers/RestaurantController";
import IconButton from "../components/ui/IconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

function DishScreen({ route, navigation }) {
  const [displayedMeals, setDisplayedMeals] = useState([]);
  
  const restaurantId = route.params.categoryId;
  AsyncStorage.setItem("restaurantId", restaurantId.toString());
  console.log("Restaurant Id is: ");
  console.log(restaurantId);

  useEffect(() => {
    async function getDishes() {
      try {
        const response = await RestaurantController.fetchDishes();
        console.log(response);
        setDisplayedMeals(response);
      } catch (error) {
        Alert.alert("No Dish Found")
      }
    }
    getDishes();
  }, []);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.dishId,
      name: item.name,
      imageUrl: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
      category: item.category,
      price: item.price,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.dishId}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default DishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

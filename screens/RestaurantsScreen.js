import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import FoodCourtController from "../controllers/FoodCourtController";
import { CATEGORIES } from "../data/dummy-data";

function RestaurantsScreen({ navigation }) {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        async function getRestaurants() {
          try {
            const response = await FoodCourtController.fetchRestaurants();
            console.log(response);
            setRestaurants(response);
          } catch (error) {
            Alert.alert("No Restaurants fetched");
          }
        }
        getRestaurants();
      }, []);

  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("Dishes", {
        categoryId: itemData.item.authId,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.name}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.authId}
      renderItem={renderCategoryItem}
      numColumns={1}
    />
  );
}

export default RestaurantsScreen;
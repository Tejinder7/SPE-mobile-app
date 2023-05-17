import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalService from "../util/GlobalService";

const fetchDishes = async () => {
  const restaurantId= await AsyncStorage.getItem("restaurantId");

  const childURL = `restaurant/${restaurantId}/fetchDishes`;
  const token = await AsyncStorage.getItem("token");

  console.log("Sending token");
  console.log(token);

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await GlobalService.hitGetService({
    childURL: childURL,
    header: header,
  });

  console.log("Is the response correct");
  console.log(response);

  return response.data;
};

const RestaurantController = { fetchDishes };
export default RestaurantController;

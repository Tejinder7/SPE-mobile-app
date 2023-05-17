import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalService from "../util/GlobalService";

const fetchRestaurants = async (props) => {
  // const foodCourtId = localStorage.getItem("userId");
  console.log("Reached here!!!");
  const childURL = `foodCourt/202/allRestaurants`;
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

const FoodCourtController = { fetchRestaurants };
export default FoodCourtController;

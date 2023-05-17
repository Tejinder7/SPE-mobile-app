import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalService from "../util/GlobalService";

async function placeOrder(dishList) {
  const postData = {
    dishList: dishList,
  };

  console.log(postData);

  const restaurantId = await AsyncStorage.getItem("restaurantId")
  const userId = await AsyncStorage.getItem("userId")

  const token = await AsyncStorage.getItem("token");

  console.log(userId)
  console.log(restaurantId);

  const header = {
    headers: { Authorization: `Bearer ${token}` },
  };

  var childURL = `customer/placeOrder/${userId}/7/${restaurantId}`;

  const response = await GlobalService.hitPostService({
    childURL: childURL,
    postData: postData,
    header: header
  });

  console.log("Is the response correct");
  console.log(response);

  return response.data;
}

const CustomerController = { placeOrder };
export default CustomerController;
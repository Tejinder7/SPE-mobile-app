import { useContext } from "react";
import { Text, StyleSheet, View, FlatList, Alert } from "react-native";
import CartItem from "../components/CartItem";
import Button from "../components/ui/Button";
import CustomerController from "../controllers/CustomerController";
import { CartContext } from "../store/cart-context";

function CartScreen() {
  // const [displayedMeals, setDisplayedMeals] = useState([]);

  // const restaurantId = route.params.categoryId;
  // AsyncStorage.setItem("restaurantId", restaurantId.toString());
  // console.log("Restaurant Id is: ");
  // console.log(restaurantId);

  // useEffect(() => {
  //   async function getDishes() {
  //     try {
  //       const response = await RestaurantController.fetchDishes();
  //       console.log(response);
  //       setDisplayedMeals(response);
  //     } catch (error) {
  //       Alert.alert("No Dish Found")
  //     }
  //   }
  //   getDishes();
  // }, []);
  const cartCtx = useContext(CartContext);

  displayedMeals = cartCtx.dishList;

  console.log(cartCtx.dishList);

  function renderMealItem(itemData) {
    const item = itemData.item;
    console.log(item);
    const mealItemProps = {
      id: item.dishId,
      name: item.name,
      // imageUrl: "https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg",
      price: item.price,
    };
    return <CartItem {...mealItemProps} />;
  }

  async function placeOrderHandler() {
    try {
      console.log("Here");
      const response = await CustomerController.placeOrder(displayedMeals);
      Alert.alert("Order placed ");
    } catch (error) {
      // console.log(error.response.message);
      Alert.alert("Order Placement Failed!");
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.dishId}
        renderItem={renderMealItem}
      />
      <View style={styles.buttons}>
        <Button onPress={placeOrderHandler}>Place Order</Button>
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  buttons: {
    marginBottom: 12,
    // height: "3px"
    // alignItems: "center",
  },
});

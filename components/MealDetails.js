import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  category,
  // price,
  // affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      {/* <Text style={[styles.detailItem, textStyle]}>{price}</Text> */}
      <Text style={[styles.detailItem, textStyle]}>
        {category.toUpperCase()}
      </Text>
      {/* <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text> */}
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

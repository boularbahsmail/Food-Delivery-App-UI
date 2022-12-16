import { View, ScrollView, StyleSheet } from "react-native";
import FoodCard from "./FoodCard";

const FeaturedFood = () => {
  return (
    <View
      className="mt-4 p-0 flex justify-start items-start"
      style={{ maxHeight: 300, height: "100%" }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        className="px-4"
      >
        <FoodCard isLast={false} />
      </ScrollView>
    </View>
  );
};

export default FeaturedFood;

const styles = StyleSheet.create({
  scrollViewWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

import { View, ScrollView } from "react-native";
import ActiveFood from "./ActiveFood";
import InActiveFood from "./InActiveFood";

const FoodTypes = () => {
  return (
    <View
      className="mt-8 mb-4 p-0 flex justify-center items-center"
      style={{ height: 40 }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        className="px-4"
      >
        <ActiveFood />
        <InActiveFood
          title="Fresh Fruits"
          foodIcon="fruit-cherries"
          lastChild={false}
        />
        <InActiveFood
          title="Variant"
          foodIcon="food-variant"
          lastChild={false}
        />
        <InActiveFood
          title="Turkish Food"
          foodIcon="food-turkey"
          lastChild={false}
        />
        <InActiveFood title="Gym Meal" foodIcon="food-steak" lastChild={true} />
      </ScrollView>
    </View>
  );
};

export default FoodTypes;

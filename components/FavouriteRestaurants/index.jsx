import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import RestaurantCard from "./RestaurantCard";

const FavouriteRestaurants = () => {
  return (
    <View className="mt-2 py-4 flex flex-col justify-start items-center w-full">
      <View className="flex flex-row justify-between items-center w-full px-4">
        <Text className="text-2xl font-bold text-gray-900">
          Favourite Restaurants
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text className="text-md font-semibold text-gray-600">See all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={false}
        className="mt-4 mb-6 px-4"
      >
        <RestaurantCard />
      </ScrollView>
    </View>
  );
};

export default FavouriteRestaurants;

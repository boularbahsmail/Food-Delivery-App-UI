import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import plate1 from "../../../assets/images/food/plate-1.png";
import StarIcon from "react-native-vector-icons/AntDesign";

import restaurants from "./data";

const RestaurantCard = () => {
  return restaurants.map((restaurant, index) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.8}
      className={`flex flex-row justify-start items-center border border-gray-200 rounded-xl px-4 ${
        restaurant.isLast == true ? "mr-8" : "mr-4"
      }`}
      style={{ maxWidth: "100%" }}
    >
      <View className="py-2">
        <Image
          source={plate1}
          alt="Food Image"
          style={{ maxWidth: 105, height: 105 }}
        />
      </View>
      <View className="ml-2">
        <Text className="font-bold text-gray-900" style={{ fontSize: 18 }}>
          {restaurant.name}
        </Text>
        <View className="py-1.5 flex flex-row justify-start items-center gap-1">
          {Array.from({ length: restaurant.stars }).map((_, index) => (
            <StarIcon key={index} name="star" size={14} color="#FEBD2E" />
          ))}
        </View>
        <Text className="font-normal text-gray-400" style={{ fontSize: 14 }}>
          Rabat Agdal, Morocco
        </Text>
      </View>
    </TouchableOpacity>
  ));
};

export default RestaurantCard;

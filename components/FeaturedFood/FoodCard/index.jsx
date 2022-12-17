import { Image, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import plate1 from "../../../assets/images/food/plate-1.png";

import foods from "./data";

const FoodCard = () => {
  return foods?.map((food, index) => (
    <View
      key={index}
      className={`border border-gray-200 rounded-xl p-3 px-4 max-w-max w-100 mb-0 ${
        food.isLast == true ? "mr-8" : "mr-4"
      }`}
      style={{ height: "96%" }}
    >
      <TouchableOpacity
        activeOpacity={0.6}
        className="flex justify-center items-center"
      >
        <Image
          source={plate1}
          alt="Food Image"
          style={{ maxWidth: 165, height: 165 }}
        />
      </TouchableOpacity>
      <View className="mt-3 flex flex-col justify-center items-start">
        <Text className="text-xl text-black font-semibold">{food.name}</Text>
        <Text className="my-1 text-md text-gray-400 font-semibold">
          {food.type}
        </Text>
        <View
          className="mt-2 flex flex-row justify-between items-center"
          style={{ maxWidth: "100%", width: "100%" }}
        >
          <Text className="text-xl text-black font-semibold">
            ${food.price}
          </Text>
          <Icon
            name={food.isFavourite == true ? "heart" : "heart-outline"}
            size={22}
            color={food.isFavourite == true ? "orangered" : "gray"}
          />
        </View>
      </View>
    </View>
  ));
};

export default FoodCard;

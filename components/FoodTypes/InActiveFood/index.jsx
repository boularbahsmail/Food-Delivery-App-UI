import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InActiveFood = ({ title, foodIcon, lastChild }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mr-3 p-1 pr-4 flex flex-row justify-center items-center rounded-full bg-gray-100"
      style={{ marginRight: lastChild == true ? 34 : 12 }}
    >
      <View className="flex justify-center items-center bg-white p-2 rounded-full">
        <Icon name={foodIcon} size={16} color="#303030" />
      </View>
      <View>
        <Text
          className="text-gray-600 ml-2 font-normal"
          style={{ fontSize: 16 }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default InActiveFood;

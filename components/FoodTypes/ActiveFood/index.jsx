import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ActiveFood = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="mr-3 p-1 pr-4 flex flex-row justify-center items-center rounded-full"
      style={{ backgroundColor: "#FEBD2E" }}
    >
      <View className="flex justify-center items-center bg-white p-2 rounded-full">
        <Icon name="fastfood" size={20} color="#303030" />
      </View>
      <View>
        <Text className="text-white ml-2 font-bold" style={{ fontSize: 16 }}>
          Fast Food
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveFood;

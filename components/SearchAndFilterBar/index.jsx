import { TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchAndFilterBar = () => {
  return (
    <View className="mt-8 px-4 flex flex-row justify-between items-center w-screen">
      <View
        className="overflow-hidden h-12 px-4 bg-gray-50 flex flex-row justify-start items-center rounded-xl"
        style={{ width: "83%" }}
      >
        <Icon name="search" size={20} color="#404040" />
        <TextInput
          autoCorrect={false}
          autoComplete="off"
          placeholder="Healty Food"
          placeholderTextColor="#606060"
          className="text-gray-800 ml-1 h-11 w-full"
          style={{ fontSize: 16 }}
        />
      </View>
      <View
        className="flex justify-center items-center sbg-white px-3 h-11 rounded-xl"
        style={{ backgroundColor: "#FEBD2E" }}
      >
        <TouchableOpacity activeOpacity={0.5}>
          <Icon name="tune" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchAndFilterBar;

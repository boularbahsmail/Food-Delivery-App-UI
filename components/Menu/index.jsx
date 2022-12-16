import { TouchableOpacity, View } from "react-native";
import HomeIcon from "react-native-vector-icons/Ionicons";
import PersnIcon from "react-native-vector-icons/Ionicons";
import HeartIcon from "react-native-vector-icons/Ionicons";
import CartIcon from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState("HOME");

  return (
    <View className="absolute bottom-4 left-4 right-4 rounded-full flex flex-row justify-between items-center bg-black py-3 px-4">
      <View>
        <TouchableOpacity
          style={{ height: 40, width: 40 }}
          className="flex justify-center items-center"
          activeOpacity={0.8}
          onPress={() => {
            setActive("HOME");
          }}
        >
          <HomeIcon
            name={active == "HOME" ? "home" : "home-outline"}
            size={25}
            color={active == "HOME" ? "#FEBD2E" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ height: 40, width: 40 }}
          className="flex justify-center items-center"
          activeOpacity={0.8}
          onPress={() => {
            setActive("PROFILE");
          }}
        >
          <PersnIcon
            name={active == "PROFILE" ? "person" : "person-outline"}
            size={25}
            color={active == "PROFILE" ? "#FEBD2E" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity
          style={{ height: 40, width: 40 }}
          className="flex justify-center items-center"
          activeOpacity={0.8}
          onPress={() => {
            setActive("FAVOURITE");
          }}
        >
          <HeartIcon
            name={active == "FAVOURITE" ? "heart" : "heart-outline"}
            size={25}
            color={active == "FAVOURITE" ? "#FEBD2E" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={{ height: 40, width: 40 }}
          className="flex justify-center items-center"
          activeOpacity={0.8}
          onPress={() => {
            setActive("CART");
          }}
        >
          <CartIcon
            name={active == "CART" ? "cart" : "cart-outline"}
            size={25}
            color={active == "CART" ? "#FEBD2E" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

import { Text, View, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Assets
import user_avatar from "../../assets/images/user_avatar.jpg";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <View className="px-4 flex flex-row justify-between items-center w-screen">
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            setMenuOpen(!menuOpen);
          }}
          className="p-2"
        >
          <Icon
            name={menuOpen == true ? "close" : "menu"}
            size={30}
            color="#262626"
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text className="text-2xl text-gray-900 font-bold">Search Food</Text>
      </View>

      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={{ height: 40, width: 40, borderRadius: 10 }}
            source={user_avatar}
            alt="User Avatar"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

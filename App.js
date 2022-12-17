import { useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";
import FavouriteRestaurants from "./components/FavouriteRestaurants";
import FeaturedFood from "./components/FeaturedFood";
import FoodTypes from "./components/FoodTypes";
import Header from "./components/Header";
import Menu from "./Modals/Menu";
import SearchAndFilterBar from "./components/SearchAndFilterBar";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <View
      className="relative p-4 pt-3 flex flex-1 justify-start items-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <View>
        <StatusBar />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <SearchAndFilterBar />
        <FoodTypes />
        <ScrollView style={{ marginBottom: menuOpen == true ? 65 : 0 }}>
          <FeaturedFood />
          <FavouriteRestaurants />
        </ScrollView>
      </View>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </View>
  );
}

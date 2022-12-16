import { View, StatusBar, ScrollView } from "react-native";
import FavouriteRestaurants from "./components/FavouriteRestaurants";
import FeaturedFood from "./components/FeaturedFood";
import FoodTypes from "./components/FoodTypes";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchAndFilterBar from "./components/SearchAndFilterBar";

export default function App() {
  return (
    <View
      className="relative p-4 flex flex-1 justify-start items-center"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <View>
        <StatusBar />
        <Header />
        <SearchAndFilterBar />
        <FoodTypes />
        <ScrollView style={{ marginBottom: 70 }}>
          <FeaturedFood />
          <FavouriteRestaurants />
        </ScrollView>
      </View>
      <Menu />
    </View>
  );
}

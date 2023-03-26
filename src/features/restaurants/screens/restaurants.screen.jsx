/* eslint-disable prettier/prettier */
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};
export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    // backgroundColor: "blue",
  },
});

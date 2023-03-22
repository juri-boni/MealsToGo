import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const isAndroid = Platform.OS === "android";
// console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // paddingTop: Platform.OS === "android" ? ExpoStatusBar.currentHeight : 0,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
  },
  // statusBar: {
  //   backgroundColor: "black",
  // },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
    borderWidth: 1,
  },
});

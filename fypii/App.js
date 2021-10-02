import React from "react";
import { StyleSheet, StatusBar, Platform, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootStackScreen from "./src/navigations/RootStackScreen";
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: width / 3,
    height: height / 3,
  },
  footer: {
    flex: 1,
    backgroundColor: "red",
  },
});

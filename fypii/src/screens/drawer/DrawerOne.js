import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { useIsDrawerOpen } from "@react-navigation/drawer";

const { width, height } = Dimensions.get("screen");
const DrawerOne = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <View>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            {useIsDrawerOpen() ? (
              <EvilIcons name="close" size={width * 0.11} />
            ) : (
              <EvilIcons name="navicon" size={width * 0.11} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DrawerOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "red",
  },
});

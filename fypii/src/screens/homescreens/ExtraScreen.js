import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.08;

const ExtraScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="ios-arrow-back-circle" size={width * 0.08} />
        </TouchableOpacity>
        <Text>Extra Screen</Text>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          delay={100}
          source={require("../../../assets/graduated.png")}
          style={styles.logo}
          resizeMode="cover"
        />
      </View>
      <View style={styles.containerScreen}></View>
    </View>
  );
};

export default ExtraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 1,
    left: 5,
    right: 5,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerScreen: {
    flex: 10,
    backgroundColor: "#47A1E0",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    right: 10,
  },
});

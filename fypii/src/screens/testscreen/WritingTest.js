import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import AppText from "../../components/AppText";
import styling from "../../components/styling";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get("screen");

const WritingTest = ({ navigation }) => {
  return (
    <LinearGradient colors={["#ddd6f3", "#faaca8"]} style={styling.container}>
      <View style={styling.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-circle"
            size={width * 0.08}
            color="black"
          />
        </TouchableOpacity>
        <AppText style={styling.headerText}>Writing Test</AppText>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            delay={100}
            source={require("../../../assets/graduated.png")}
            style={styling.avator}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={[styling.textContainer, { borderWidth: 2 }]}></View>
    </LinearGradient>
  );
};

export default WritingTest;

const styles = StyleSheet.create({});

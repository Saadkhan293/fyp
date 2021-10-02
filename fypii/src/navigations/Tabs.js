import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import HomeStackScreen from "./HomeStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import CaptureStackScreen from "./CaptureStackScreen";
import HistoryStackScreen from "./HistoryStackScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      justifyContent: "center",
      alignItems: "center",
      ...styles.shadow,
    }}
  >
    <LinearGradient
      colors={["#abbaab", "#ffffff", "#faaca8"]}
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#3598DB",
      }}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
);
const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          position: "absolute",
          borderRadius: 10,
          height: 80,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="home"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="account-circle"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Capture"
        component={CaptureStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="camera"
              size={35}
              style={{ color: "black" }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <MaterialCommunityIcons
                name="calendar"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                Top: 10,
              }}
            >
              <Ionicons
                name="settings-sharp"
                size={30}
                style={{ color: focused ? "#3598DB" : "#05375a" }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 0,
  },
});

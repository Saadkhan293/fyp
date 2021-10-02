import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/profileScreens/CameraScreen";

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator headerMode="none" initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="CameraScreen" component={CameraScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;

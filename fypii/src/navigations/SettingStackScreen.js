import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/SettingScreen";

const SettingStack = createStackNavigator();
const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator headerMode="none">
      <SettingStack.Screen name="Setting" component={SettingScreen} />
    </SettingStack.Navigator>
  );
};

export default SettingStackScreen;

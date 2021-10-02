import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HistoryScreen from "../screens/HistoryScreen";
const HistoryStack = createStackNavigator();
const HistoryStackScreen = () => {
  return (
    <HistoryStack.Navigator headerMode="none">
      <HistoryStack.Screen name="History" component={HistoryScreen} />
    </HistoryStack.Navigator>
  );
};

export default HistoryStackScreen;

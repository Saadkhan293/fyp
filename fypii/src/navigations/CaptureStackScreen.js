import React from "react";
import CaptureScreen from "../screens/CaptureScreen";
import { createStackNavigator } from "@react-navigation/stack";
const CaptureStack = createStackNavigator();
const CaptureStackScreen = () => {
  return (
    <CaptureStack.Navigator headerMode="none">
      <CaptureStack.Screen name="Capture" component={CaptureScreen} />
    </CaptureStack.Navigator>
  );
};

export default CaptureStackScreen;

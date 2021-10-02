import React from "react";
import { Text } from "react-native";
import styling from "./styling";
const AppText = ({ children, style }) => {
  return <Text style={[styling.text, style]}>{children}</Text>;
};
export default AppText;

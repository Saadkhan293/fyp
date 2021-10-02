import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Text>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#ddd6f3",
  },
});

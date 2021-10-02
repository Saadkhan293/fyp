import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HistoryScreen = ({ navigations }) => {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd6f3",
  },
});

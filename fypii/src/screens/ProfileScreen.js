import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <View style={styles.image}>
        <Text style={{ color: "red" }}>Ali Hassan</Text>
        <TouchableOpacity onPress={() => console.log("CameraScreen")}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd6f3",
  },
  image: {
    alignItems: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "contain",
    overflow: "hidden",
  },
});

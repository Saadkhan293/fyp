import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import shorthash from "shorthash";
const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      const photoId = shorthash.unique(photo.uri);
      AsyncStorage.setItem(photoId, photo.uri);
    }
  };
  const cameraRef = useRef();
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Camera
      style={{ width: "100%", height: "100%" }}
      type={Camera.Constants.Type.front}
      ref={(camera) => (cameraRef.current = camera)}
    >
      <TouchableOpacity
        onPress={snap}
        style={{
          paddingTop: 200,
        }}
      >
        <Text>Take Picture</Text>
      </TouchableOpacity>
    </Camera>
  );
};

export default CameraScreen;

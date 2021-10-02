import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import AppText from "./AppText";

const Progress = ({ step, steps, height }) => {
  const [widthN, setWidthN] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);
  React.useEffect(() => {
    //-width + width * setp/steps
    reactive.setValue(-widthN + (widthN * step) / steps);
  }, [step, widthN]);
  return (
    <>
      <View style={{ justifyContent: "center", flexDirection: "row" }}>
        <AppText style={{ fontSize: 20, fontWeight: "bold" }}>
          Question No: {step}/{steps}
        </AppText>
      </View>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidthN(newWidth);
        }}
        style={{
          height,
          backgroundColor: "rgba(0,0,0,0.1)",
          borderRadius: height,
          overflow: "hidden",
        }}
      >
        <Animated.View
          style={{
            height,
            borderRadius: height,
            backgroundColor: "#28CBB0",
            width: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            transform: [{ translateX: animatedValue }],
          }}
        />
      </View>
    </>
  );
};

export default Progress;

const styles = StyleSheet.create({});

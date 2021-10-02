import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { Title, Paragraph } from "react-native-paper";
import styling from "../../components/styling";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/AppText";
import { LinearGradient } from "expo-linear-gradient";
const { height, width } = Dimensions.get("screen");
const Progress = ({ step, steps, height }) => {
  const [widthN, setWidthN] = React.useState(0);
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  console.log(animatedValue);
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
      <AppText>
        {step}/{steps}
      </AppText>
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
            backgroundColor: "rgba(0,0,0,0.5)",
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

const SelfAssessmentScreen = ({ navigation }) => {
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });
    return () =>
      parent.setOptions({
        tabBarVisible: true,
      });
  }, []);
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styling.container}>
      <LinearGradient colors={["#C3E9E4", "#C3E9E4"]}>
        <View style={styling.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons name="ios-arrow-back-circle" size={width * 0.08} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Animatable.Image
              animation="bounceIn"
              duraton="1500"
              delay={100}
              source={require("../../../assets/graduated.png")}
              style={styling.avator}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: height * 0.6 }}>
          <Image
            source={require("../../../assets/selfassess.png")}
            style={{ height: height * 0.55, width: "100%" }}
            resizeMode="contain"
          />
        </View>
        {/* <Progress step={index} steps={10} height={20} /> */}

        <Animatable.View
          style={{
            height: height * 0.245,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 15,
            backgroundColor: "white",
          }}
          animation="fadeInUpBig"
          delay={200}
        >
          <Title style={{ fontSize: 25, fontWeight: "bold", paddingBottom: 5 }}>
            Self Assessment Form
          </Title>
          <Paragraph>Tell User what to do in this form</Paragraph>
          <TouchableOpacity
            style={{
              width: "80%",
              height: height * 0.05,
              borderRadius: 20,
              backgroundColor: "#ea4c89",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("Form")}
          >
            <Title style={{ fontSize: 25, fontWeight: "bold", color: "white" }}>
              Start
            </Title>
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
    </View>
  );
};

export default SelfAssessmentScreen;

const styles = StyleSheet.create({});

import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AppText from "../../components/AppText";
import styling from "../../components/styling";
const { height, width } = Dimensions.get("screen");

const DyslexiaTestScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#ddd6f3", "#faaca8"]} style={styling.container}>
      <View style={styling.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="ios-arrow-back-circle"
            size={width * 0.08}
            color="black"
          />
        </TouchableOpacity>
        <AppText style={styling.headerText}>Dyslexia Tests</AppText>
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
      <View style={styling.containerScreen}>
        {/* Verbal Test Container */}

        <View style={styles.boxOne}>
          <View style={{ width: width / 2.2 }}>
            <AppText style={[styling.heading, { padding: 10 }]}>
              Verbal Test
            </AppText>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="assistive-listening-systems"
                size={width * 0.06}
                style={{ paddingLeft: 10 }}
              />
              <AppText style={[styling.text, {}]}> Listening Skill</AppText>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <MaterialCommunityIcons
                name="text-to-speech"
                size={width * 0.06}
                style={{ paddingLeft: 10 }}
              />
              <AppText style={[styling.text, {}]}> Reading Skill</AppText>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <LinearGradient
                colors={["#EDE574", "#E1F5C4"]}
                style={{
                  width: "50%",
                  height: 30,
                  flexDirection: "row",
                  marginTop: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("VerbalTest")}
                >
                  <AppText style={styling.buttonText}>Start {`>`}</AppText>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              width: width / 2.1,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/readingtest.png")}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* Writing Text Container */}

        <LinearGradient
          colors={["#abbaab", "#ffffff"]}
          style={[styles.boxOne, { marginTop: 20 }]}
        >
          <View style={{ width: width / 2.2 }}>
            <AppText style={[styling.heading, { padding: 10 }]}>
              Writing Test
            </AppText>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="assistive-listening-systems"
                size={width * 0.06}
                style={{ paddingLeft: 10 }}
              />
              <AppText style={[styling.text, {}]}> abc Skill</AppText>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <MaterialCommunityIcons
                name="text-to-speech"
                size={width * 0.06}
                style={{ paddingLeft: 10 }}
              />
              <AppText style={[styling.text, {}]}> xyz Skill</AppText>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <LinearGradient
                colors={["#abbaab", "#CDCFCE", "#ddd6f3"]}
                style={{
                  width: "50%",
                  height: 30,
                  flexDirection: "row",
                  marginTop: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("WritingTest")}
                >
                  <AppText style={styling.buttonText}>Start {`>`}</AppText>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              width: width / 2.1,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};
export default DyslexiaTestScreen;

const styles = StyleSheet.create({
  boxOne: {
    height: height / 4,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,
    backgroundColor: "#ffefef",
    borderRadius: 39,
  },
  boxImage: {
    width: width * 0.28,
    height: height * 0.2,
    overflow: "hidden",
  },
  image: {
    width: width / 2.75,
    height: height / 2.5,
    overflow: "visible",
  },
});

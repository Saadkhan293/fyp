import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import AppText from "../components/AppText";
import * as Animatable from "react-native-animatable";
import styling from "../components/styling";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient colors={["#ddd6f3", "#faaca8"]} style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Animatable.Text
          style={styling.headerText}
          duration={400}
          animation="fadeInLeftBig"
        >
          Welcome Ali Hassan
        </Animatable.Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            delay={100}
            source={require("../../assets/graduated.png")}
            style={styles.avator}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <Animatable.View
        style={styles.header}
        animation="fadeInUpBig"
        delay={100}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("DyslexiaTestScreen")}
          >
            <Animatable.View
              style={[styles.card, { backgroundColor: "greenyellow" }]}
              animation="fadeInUp"
              delay={500}
              duration={400}
            >
              <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                delay={1000}
                source={require("../../assets/reading.png")}
                style={styles.boxImage}
                resizeMode="contain"
              />
              <AppText>Dyslexia Test</AppText>
            </Animatable.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("SelfAssessmentScreen")}
          >
            <Animatable.View
              style={[styles.card, { backgroundColor: "burlywood" }]}
              animation="fadeInUp"
              delay={700}
              duration={600}
            >
              <Animatable.Image
                animation="bounceIn"
                duraton="2000"
                delay={1000}
                source={require("../../assets/presentation.png")}
                style={styles.boxImage}
                resizeMode="contain"
              />
              <AppText>Self Assessment </AppText>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ReportScreen")}
          >
            <Animatable.View
              style={[styles.card, { backgroundColor: "yellow" }]}
              animation="fadeInUp"
              delay={500}
              duration={400}
            >
              <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                delay={1000}
                source={require("../../assets/work.png")}
                style={styles.boxImage}
                resizeMode="contain"
              />
              <AppText>Writing Test</AppText>
            </Animatable.View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ExtraScreen")}
          >
            <Animatable.View
              style={[styles.card, { backgroundColor: "lightcoral" }]}
              animation="fadeInUp"
              delay={800}
              duration={700}
            >
              <Animatable.Image
                animation="bounceIn"
                duraton="2000"
                delay={1000}
                source={require("../../assets/student.png")}
                style={styles.boxImage}
                resizeMode="contain"
              />
              <AppText>Extra</AppText>
            </Animatable.View>
          </TouchableWithoutFeedback>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default HomeScreen;

const { height, width } = Dimensions.get("screen");
const height_logo = height * 0.085;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    flex: 7,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  avator: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    right: 10,
    backgroundColor: "white",
  },

  card: {
    width: width / 2.3,
    height: height / 3.5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  boxImage: {
    width: width * 0.28,
    height: height * 0.2,
    overflow: "hidden",
  },
});

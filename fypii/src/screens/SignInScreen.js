import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Speech from "expo-speech";

const SignInScreen = ({ navigation }) => {
  const [data, setDate] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const [speaker, setSpeaker] = useState(false);

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setDate({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setDate({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setDate({ ...data, password: val });
  };
  const updateSecureTextEntry = () => {
    setDate({ ...data, secureTextEntry: !data.secureTextEntry });
  };

  const UpdateSpeaker = () => {
    if (speaker) {
      setSpeaker(!speaker);
      Speech.stop();
    } else {
      setSpeaker(!speaker);
      const thingToSay =
        "Welcome! Email Your Email Password Enter Password Sign In Sign Up";
      Speech.speak(thingToSay);
    }
  };
  return (
    <LinearGradient colors={["#ddd6f3", "#faaca8"]} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              right: 10,
            }}
          >
            <TouchableOpacity onPress={UpdateSpeaker}>
              {speaker ? (
                <FontAwesome5 name="volume-up" color="green" size={30} />
              ) : (
                <FontAwesome5 name="volume-mute" color="#05375a" size={30} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.text_footer}>Email</Text>

          <View style={styles.action}>
            <Fontisto name="email" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>

          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="#05375a" size={20} />
              ) : (
                <Feather name="eye" color="#05375a" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <LinearGradient
              colors={["#aed3ec", "#CDCFCE", "#ddd6f3", "#faaca8"]}
              style={styles.signIn}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Drawer")}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Sign In</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUpScreen")}
              style={[
                styles.signIn,
                { borderColor: "#05375a", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <Text style={[styles.textSign, { color: "#05375a" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </LinearGradient>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aed3ec",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#05375a",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

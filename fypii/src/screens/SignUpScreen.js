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
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import * as Speech from "expo-speech";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignUpScreen = ({ navigation }) => {
  const [data, setDate] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    name_textInputChange: false,
    age_textInputChange: false,
    gender_textInputChange: false,
    email_textInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

  const [speaker, setSpeaker] = useState(false);
  const NameTextInputChange = (val) => {
    if (val.length !== 0) {
      setDate({
        ...data,
        name: val,
        name_textInputChange: true,
      });
    } else {
      setDate({
        ...data,
        name: val,
        name_textInputChange: false,
      });
    }
  };
  const ageTextInputChange = (val) => {
    if (val.length !== 0) {
      setDate({
        ...data,
        age: val,
        age_textInputChange: true,
      });
    } else {
      setDate({
        ...data,
        age: val,
        age_textInputChange: false,
      });
    }
  };
  const genderTextInputChange = (val) => {
    if (val.length !== 0) {
      setDate({
        ...data,
        gender: val,
        gender_textInputChange: true,
      });
    } else {
      setDate({
        ...data,
        gender: val,
        gender_textInputChange: false,
      });
    }
  };
  const emailTextInputChange = (val) => {
    if (val.length !== 0) {
      setDate({
        ...data,
        email: val,
        email_textInputChange: true,
      });
    } else {
      setDate({
        ...data,
        email: val,
        email_textInputChange: false,
      });
    }
  };
  const handlePasswordChange = (val) => {
    setDate({ ...data, password: val });
  };
  const updateSecureTextEntry = () => {
    setDate({ ...data, secureTextEntry: !data.secureTextEntry });
  };
  const handleConfirmPasswordChange = (val) => {
    setDate({ ...data, confirmPassword: val });
  };

  const updateConfirmSecureTextEntry = () => {
    setDate({ ...data, confirmSecureTextEntry: !data.confirmSecureTextEntry });
  };
  const UpdateSpeaker = () => {
    if (speaker) {
      setSpeaker(!speaker);
      Speech.stop();
    } else {
      setSpeaker(!speaker);
      const thingToSay =
        "Register Now! Name Your Name Age Your Age Gender Email Your Email Password Enter Password Confirm Password Enter Confirm password Sign Up Already have account? Sign in";
      Speech.speak(thingToSay);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
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
          <Text style={styles.text_footer}>Name</Text>
          <View style={styles.action}>
            <FontAwesome name="user-circle-o" color="#05375a" size={20} />

            <TextInput
              placeholder="Your Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => NameTextInputChange(val)}
            />
            {data.name_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 10 }]}>Age</Text>
          <View style={styles.action}>
            <FontAwesome name="child" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Age"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => ageTextInputChange(val)}
            />
            {data.age_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text style={[styles.text_footer, { marginTop: 10 }]}>Gender</Text>
          <View style={styles.action}>
            <MaterialCommunityIcons name="google-street-view" size={20} />
            <TextInput
              placeholder="Your Gender"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => genderTextInputChange(val)}
            />
            {data.gender_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={25} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 10 }]}>Email</Text>
          <View style={styles.action}>
            <Fontisto name="email" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => emailTextInputChange(val)}
            />
            {data.email_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.text_footer, { marginTop: 10 }]}>Password</Text>

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
          <Text style={[styles.text_footer, { marginTop: 10 }]}>
            Confirm Password
          </Text>

          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Enter Confirm Password"
              secureTextEntry={data.confirmSecureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirmSecureTextEntry ? (
                <Feather name="eye-off" color="#05375a" size={20} />
              ) : (
                <Feather name="eye" color="#05375a" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <LinearGradient
              colors={["#aed3ec", "#CDCFCE"]}
              style={styles.signIn}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Sign Up</Text>
              </TouchableOpacity>
            </LinearGradient>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignInScreen")}
              style={[
                styles.signIn,
                { borderColor: "#05375a", borderWidth: 1, marginTop: 15 },
              ]}
            >
              <Text style={[styles.textSign, { color: "#05375a" }]}>
                Already have account? Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default SignUpScreen;

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
    flex: 4,
    backgroundColor: "#FFFFFF",
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

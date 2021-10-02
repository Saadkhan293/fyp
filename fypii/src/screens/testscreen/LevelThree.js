import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Button,
  Title,
  Subheading,
  Paragraph,
  TextInput,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import styling from "../../components/styling";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/AppText";
import * as Speech from "expo-speech";

const { width, height } = Dimensions.get("screen");
const questions = [
  {
    questionText: "dog",
    answerOptions: [{ answerText: "New York", isCorrect: false }],
  },
  {
    questionText: "cat",
    answerOptions: [{ answerText: "Jeff Bezos", isCorrect: false }],
  },
  {
    questionText: "lion",
    answerOptions: [{ answerText: "Apple", isCorrect: true }],
  },
  {
    questionText: "rat",
    answerOptions: [{ answerText: "1", isCorrect: false }],
  },
];
const LevelThree = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [report, setReport] = useState(false);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
  const [text, setText] = useState("");
  const [hide, setHide] = useState(false);
  const handleAnswerOptionClick = (isCorrect) => {
    setNextBtn(false);
    setAnswer(true);
    if (isCorrect) {
      setScore(score + 1);
      setCorrect(true);
      setWrong(false);
    } else {
      setCorrect(false);
      setWrong(true);
    }
  };
  const handleNextQuestion = () => {
    setHide(false);
    setText("");
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswer(false);
      setCorrect(false);
      setWrong(false);
      setNextBtn(true);
    } else {
      setNextBtn(false);
      setReport(true);
      if (score < 3) {
        setNextBtn(true);
      }
    }
  };
  const handleSpeech = (question) => {
    const thingToSay = question;
    Speech.speak(thingToSay);
  };
  const handleReset = () => {
    setReport(false);
    setScore(0);
    setCurrentQuestion(0);
    setCorrect(false);
    setAnswer(false);
    setWrong(false);
    setNextBtn(true);
  };

  const handleDone = (text) => {
    if (questions[currentQuestion].questionText == text.toLowerCase()) {
      setCorrect(true);
      setWrong(false);
      setScore(score + 1);
    } else {
      setCorrect(false);
      setWrong(true);
    }
    setHide(true);
    setNextBtn(false);
  };
  return (
    <LinearGradient colors={["#cbcaa5", "#334d50"]} style={styling.container}>
      <View style={styling.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-circle"
            size={width * 0.08}
            color="black"
          />
        </TouchableOpacity>
        <AppText style={styling.headerText}>Dyslexia Test</AppText>
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
      <ScrollView>
        {report ? (
          <View
            style={{
              alignItems: "center",
              height: height / 1.45,
              justifyContent: "space-evenly",
            }}
          >
            <View style={{}}>
              <Animatable.Image
                animation="bounceIn"
                duraton="1500"
                delay={100}
                source={require("../../../assets/level-up.png")}
                style={[
                  styling.avator,
                  { width: 60, height: 60, borderColor: null, right: 0 },
                ]}
                resizeMode="cover"
              />
              <Title>Level 3</Title>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: width,
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animatable.Image
                  animation="bounceIn"
                  duraton="1500"
                  delay={100}
                  source={require("../../../assets/brainstorming.png")}
                  style={[
                    styling.avator,
                    { width: 60, height: 60, borderColor: null, right: 0 },
                  ]}
                  resizeMode="cover"
                />
                <Title>Diffculty</Title>
                <Paragraph>Hard</Paragraph>
              </View>

              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Animatable.Image
                  animation="bounceIn"
                  duraton="1500"
                  delay={100}
                  source={require("../../../assets/medal.png")}
                  style={[
                    styling.avator,
                    { width: 60, height: 60, borderColor: null, right: 0 },
                  ]}
                  resizeMode="cover"
                />
                <Title>Score</Title>
                <Paragraph>{score}</Paragraph>
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Title>Remarks</Title>
              <Subheading>You have to correct 3 questions out of 5</Subheading>
              <Subheading>move to next level</Subheading>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: width,
                justifyContent: "space-around",
              }}
            >
              <Button mode="contained" onPress={() => handleReset()}>
                Reset Level
              </Button>

              <Button
                mode="contained"
                disabled={nextBtn}
                onPress={() => console.log("End Level")}
              >
                Next Level
              </Button>
            </View>
          </View>
        ) : (
          <View style={styles.testContainer}>
            <View>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: height * 0.12,
                }}
              >
                <Title>Level 3</Title>
                <Subheading>
                  Please Click the button below to listen word
                </Subheading>
                <Title>Question {currentQuestion + 1}/4</Title>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* <Title>{questions[currentQuestion].questionText}</Title> */}
                {/* <Button mode="contained">Listen</Button> */}
                <TouchableOpacity
                  onPress={() =>
                    handleSpeech(questions[currentQuestion].questionText)
                  }
                >
                  <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    delay={100}
                    source={require("../../../assets/listenicon.png")}
                    style={[
                      styling.avator,
                      { borderColor: "green", right: 10 },
                    ]}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginBottom: 5, marginTop: 5 }}>
              <Title> Write the pronounced word: </Title>
            </View>
            <View>
              <View
                style={{
                  height: height * 0.35,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  borderWidth: 2,
                }}
              >
                <View>
                  <View
                    style={{
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: width * 0.9,
                        padding: 1,
                        backgroundColor: "#F6F6F7",
                        marginBottom: 10,
                      }}
                    >
                      <TextInput
                        mode="flat"
                        label="Write pronounced word"
                        placeholder="Type here"
                        onChangeText={(text) => setText(text)}
                        disabled={hide}
                        value={text}
                      />
                    </View>
                    <View>
                      {text == "" ? (
                        <Button
                          mode="contained"
                          onPress={() => handleDone(text)}
                          disabled={true}
                        >
                          Done
                        </Button>
                      ) : (
                        <Button
                          mode="contained"
                          onPress={() => handleDone(text)}
                          disabled={hide}
                        >
                          Done
                        </Button>
                      )}
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Title>Answer: </Title>
                  {correct ? (
                    <View
                      style={{
                        backgroundColor: "green",
                        borderRadius: 10,
                        justifyContent: "center",
                        flexDirection: "row",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                    >
                      <Title>Correct</Title>
                    </View>
                  ) : null}
                  {wrong ? (
                    <View
                      style={{
                        backgroundColor: "red",
                        borderRadius: 10,
                        justifyContent: "center",
                        flexDirection: "row",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                    >
                      <Title>wrong</Title>
                    </View>
                  ) : null}
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    paddingRight: width / 8,
                  }}
                >
                  <Button
                    mode="contained"
                    style={{ width: "30%" }}
                    onPress={() => handleNextQuestion()}
                    disabled={nextBtn}
                  >
                    Next
                  </Button>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default LevelThree;
const styles = StyleSheet.create({
  testContainer: {
    flex: 1,
  },
});

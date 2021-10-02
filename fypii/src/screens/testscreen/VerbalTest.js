import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Button, Title, Subheading, Paragraph } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import styling from "../../components/styling";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppText from "../../components/AppText";
import * as Speech from "expo-speech";

const { width, height } = Dimensions.get("screen");
const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];

const VerbalTest = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [report, setReport] = useState(false);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [nextBtn, setNextBtn] = useState(true);
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
  return (
    <LinearGradient colors={["#ddd6f3", "#faaca8"]} style={styling.container}>
      <View style={styling.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back-circle"
            size={width * 0.08}
            color="black"
          />
        </TouchableOpacity>
        <AppText style={styling.headerText}>Verbal Test</AppText>
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
      {report ? (
        <View
          style={{
            alignItems: "center",
            height: height / 1.45,
            justifyContent: "space-evenly",
          }}
        >
          <View>
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
            <Title>Level 1</Title>
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
              <Paragraph>Simple</Paragraph>
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
              onPress={() =>
                navigation.navigate("LevelTwo", { levelOneScore: score })
              }
            >
              Next Level
            </Button>
          </View>
        </View>
      ) : (
        <View style={styling.textContainer}>
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: height * 0.12,
              }}
            >
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
                  style={[styling.avator, { borderColor: "green", right: 10 }]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginBottom: 5, marginTop: 5 }}>
            <Title> Select the correct option: </Title>
          </View>
          <View>
            <View
              style={{
                height: height * 0.44,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View>
                {questions[currentQuestion].answerOptions.map(
                  (answerOption, i) => (
                    <View
                      style={{
                        justifyContent: "center",
                        height: height * 0.06,
                        margin: 4,
                      }}
                      key={i}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                          disabled={answer}
                        >
                          <View
                            style={{
                              width: "100%",
                              borderRadius: 10,
                              borderWidth: 2,
                              flexDirection: "row",
                              justifyContent: "center",
                            }}
                          >
                            <Title> {answerOption.answerText}</Title>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                )}
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
    </LinearGradient>
  );
};

export default VerbalTest;

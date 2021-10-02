import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import {
  Button,
  Title,
  RadioButton,
  Text,
  Paragraph,
} from "react-native-paper";
import Progress from "../../components/Progress";
import AppText from "../../components/AppText";
import styling from "../../components/styling";
import * as Animatable from "react-native-animatable";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get("screen");
const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York" },
      { answerText: "London" },
      { answerText: "Paris" },
      { answerText: "Dublin" },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos" },
      { answerText: "Elon Musk" },
      { answerText: "Bill Gates" },
      { answerText: "Tony Stark" },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple" },
      { answerText: "Intel" },
      { answerText: "Amazon" },
      { answerText: "Microsoft" },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1" },
      { answerText: "4" },
      { answerText: "6" },
      { answerText: "7" },
    ],
  },
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York" },
      { answerText: "London" },
      { answerText: "Paris" },
      { answerText: "Dublin" },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos" },
      { answerText: "Elon Musk" },
      { answerText: "Bill Gates" },
      { answerText: "Tony Stark" },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple" },
      { answerText: "Intel" },
      { answerText: "Amazon" },
      { answerText: "Microsoft" },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1" },
      { answerText: "4" },
      { answerText: "6" },
      { answerText: "7" },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos" },
      { answerText: "Elon Musk" },
      { answerText: "Bill Gates" },
      { answerText: "Tony Stark" },
    ],
  },
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York" },
      { answerText: "London" },
      { answerText: "Paris" },
      { answerText: "Dublin" },
    ],
  },
];

const Form = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checked, setChecked] = useState("");
  const [nextBtn, setNextBtn] = useState(true);
  const [data, setData] = useState([]);
  const [userForm, setUserForm] = useState(false);
  const [hide, setHide] = useState(true);
  const handleNextBtn = (id, question, answer) => {
    const nextQuestion = currentQuestion + 1;
    setData((data) => [
      ...data,
      { id: id, question: question, answer: answer },
    ]);
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setChecked("");
    } else {
      setUserForm(true);
    }
    console.log(data);
  };
  useEffect(() => {
    if (checked == "") {
      setNextBtn(true);
    } else {
      setNextBtn(false);
    }
  }, [checked]);
  const Item = ({ question, answer, id }) => (
    <View style={{ paddingLeft: 10 }}>
      <AppText style={styling.text}>
        Question {id + 1}: {question}
      </AppText>
      <AppText style={[styling.text, { fontWeight: "bold" }]}>{answer}</AppText>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item question={item.question} answer={item.answer} id={item.id} />
  );

  return (
    <View>
      {userForm ? (
        <View style={{ paddingTop: StatusBar.currentHeight }}>
          <View style={styling.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="ios-arrow-back-circle"
                size={width * 0.08}
                color="black"
              />
            </TouchableOpacity>

            <AppText style={styling.headerText}>User Response</AppText>
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

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <AntDesign name="checkcircle" size={width * 0.2} color="black" />
            <Title>Sereignty Level: Low</Title>
            <Button
              mode="contained"
              onPress={() => setHide(!hide)}
              style={{ marginTop: 15 }}
            >
              {hide ? "show" : "hide"} User Responses
            </Button>
          </View>
          {hide ? null : (
            <View
              style={{ borderWidth: 1, borderRadius: 20, height: height * 0.5 }}
            >
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                nestedScrollEnabled
              />
            </View>
          )}
          <Title>Ali Hassan</Title>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back-circle" size={width * 0.08} />
            </TouchableOpacity>
            <Progress step={currentQuestion + 1} steps={10} height={20} />
            <Title style={{ fontSize: 25, fontWeight: "bold", marginTop: 20 }}>
              {questions[currentQuestion].questionText}
            </Title>
          </View>
          <View style={styles.optionsContainer}>
            {questions[currentQuestion].answerOptions.map((answerOption, i) => (
              <View
                onPress={() => console.log("ALi Hassan")}
                key={i}
                style={{
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: height * 0.028,
                }}
              >
                <View
                  style={{
                    width: "90%",
                    borderRadius: 10,
                    borderWidth: 2,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: height * 0.05,
                  }}
                >
                  <Title> {answerOption.answerText}</Title>
                  <RadioButton
                    value={answerOption.answerText}
                    status={
                      checked === answerOption.answerText
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => setChecked(answerOption.answerText)}
                  />
                </View>
              </View>
            ))}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Button
              mode="contained"
              style={styles.buttonsContainer}
              onPress={() =>
                handleNextBtn(
                  currentQuestion,
                  questions[currentQuestion].questionText,
                  checked
                )
              }
              disabled={nextBtn}
            >
              <Title
                style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
              >
                {currentQuestion == 9 ? "Submit Form" : "Next Question"}
              </Title>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};
export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  header: {
    width: width,
    height: height * 0.3,
    backgroundColor: "#C3E9E5",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    justifyContent: "flex-start",
  },
  optionsContainer: {
    width: width,
    height: height * 0.5,
    justifyContent: "center",
  },
  buttonsContainer: {
    height: height * 0.05,
    borderRadius: 15,
    backgroundColor: "#ea4c89",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});

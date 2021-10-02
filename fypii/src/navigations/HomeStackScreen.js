import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/homescreens/ReportScreen";
import DyslexiaTestScreen from "../screens/homescreens/DyslexiaTestScreen";
import ExtraScreen from "../screens/homescreens/ExtraScreen";
import SelfAssessmentScreen from "../screens/homescreens/SelfAssessmentScreen";
import VerbalTest from "../screens/testscreen/VerbalTest";
import LevelTwo from "../screens/testscreen/LevelTwo";
import LevelThree from "../screens/testscreen/LevelThree";
import WritingTest from "../screens/testscreen/WritingTest";
import Form from "../screens/testscreen/Form";
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="DyslexiaTestScreen"
        component={DyslexiaTestScreen}
      />
      <HomeStack.Screen
        name="SelfAssessmentScreen"
        component={SelfAssessmentScreen}
      />
      <HomeStack.Screen name="ReportScreen" component={ReportScreen} />
      <HomeStack.Screen name="ExtraScreen" component={ExtraScreen} />
      <HomeStack.Screen name="VerbalTest" component={VerbalTest} />
      <HomeStack.Screen name="LevelTwo" component={LevelTwo} />
      <HomeStack.Screen name="LevelThree" component={LevelThree} />
      <HomeStack.Screen name="WritingTest" component={WritingTest} />
      <HomeStack.Screen name="Form" component={Form} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

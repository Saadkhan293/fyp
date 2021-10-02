import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../screens/drawer/DrawerContent";
import Tabs from "./Tabs";
const DrawerApp = createDrawerNavigator();
const Drawers = ({ navigation }) => {
  return (
    <DrawerApp.Navigator
      drawerPosition="left"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerApp.Screen name="Tabs" component={Tabs} />
    </DrawerApp.Navigator>
  );
};

export default Drawers;

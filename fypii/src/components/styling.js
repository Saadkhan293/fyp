import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.08;

const styling = StyleSheet.create({
  avator: {
    width: height_logo,
    height: height_logo,
    borderRadius: height_logo / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "white",
    right: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerScreen: {
    flex: 1,
    padding: 10,
    marginTop: height * 0.08,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
  },
  heading: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
  },
  headerText: {
    color: "black",
    fontSize: 22,
    paddingTop: 15,
    left: 10,
    fontWeight: "500",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    fontWeight: "800",
  },
  textContainer: {
    flex: 1,
  },
});
export default styling;

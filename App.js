import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes/index";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

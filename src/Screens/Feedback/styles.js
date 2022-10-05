import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../Utills/AppColors";
import FontFamily from "../../Utills/FontFamily";

export const styles = StyleSheet.create({
  topEmoji: {
    marginTop: height(4),
    flexDirection: "column",
    alignItems: "center",
  },
  topText: {
    marginTop: height(4),
    margin: width(2),
  },
  textInputContainer: {
    backgroundColor: "#8989e3",
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    height: "100%",
    paddingBottom: height(8),
    borderRadius: 35,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textInput: {
    height: "70%",
    marginTop: 30,
    margin: 20,
    borderWidth: 1,
    borderColor: "transparent",
    color: AppColors.lightGray,
    fontSize: width(4),
    fontFamily: FontFamily.SoftMedium,
    padding: 10,
  },
});

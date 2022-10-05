import { StyleSheet } from "react-native";
import AppColors from "../../../Utills/AppColors";
import { height } from "react-native-dimension";

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  headingText: {
    color: AppColors.white,
    textAlign: "center",
    marginTop: height(4),
    lineHeight: height(2.5),
  },
  descriptionText: {
    color: AppColors.mediumTurquoise,
    alignSelf: "center",
    marginTop: height(0.75),
  },
  questionContainer: {
    marginTop: height(3),
  },
  button: {
    position: "absolute",
    bottom: height(3),
  },
});
export default styles;

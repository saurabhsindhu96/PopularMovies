import { StyleSheet } from "react-native";
import AppColors from "../../../Utills/AppColors";
import { height, width } from "react-native-dimension";

const styles = StyleSheet.create({
  descriptionText: {
    color: AppColors.white,
    marginTop: height(10),
    marginHorizontal: width(5),
    fontSize: width(3.85),
    lineHeight: height(2.5),
  },
  textInputContainer: {
    marginTop: height(5),
  },
});
export default styles;

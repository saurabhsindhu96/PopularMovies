import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../Utills/AppColors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainViewContainer: {
    flex: 1,
  },
  contentContainer: {
    // paddingVertical: height(2)
  },
  // modal Wrapper
  modalContainer: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-end",
  },
  modalViewContainer: {
    paddingVertical: height(3),
    backgroundColor: AppColors.white,
    borderTopLeftRadius: width(10),
    borderTopRightRadius: width(10),
    alignItems: "center",
    justifyContent: "center",
  },
});
export default styles;

import { StyleSheet } from "react-native";
import AppColors from "../../Utills/AppColors";
import { width, height } from "react-native-dimension";

const styles = StyleSheet.create({
  // main app button styled
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: width(85),
    alignSelf: "center",
    marginTop: height(4),
  },
  linearShareBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: width(85),
    borderRadius: width(10),
    height: height(6),
  },
  btnText: {
    color: AppColors.white,
    fontSize: width(4),
  },
  // social button styles
  socailButtonContainer: {
    width: width(90),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingRight: width(2.5),
    height: height(6.5),
    borderRadius: width(1),
    backgroundColor: AppColors.seaSerpent,
    marginTop: height(2),
  },
  socailViewContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  socailImage: {
    height: width(6),
    width: width(6),
  },
  socialButtonTitle: {
    color: AppColors.white,
    fontSize: width(3.85),
    marginLeft: width(3),
  },
  //circle Button
  circleButton: {
    width: width(20),
    height: width(20),
    borderRadius: width(10),
    backgroundColor: AppColors.darkslateblue,
    alignItems: "center",
    justifyContent: "center",
  },
  //questionButton
  questionButtonContainer: {
    width: width(90),
    alignSelf: "center",
    height: height(6.5),
    borderRadius: width(2),
    backgroundColor: AppColors.mediumTurquoise45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    marginTop: height(1.5),
  },
  resourcesButtonContainer: {
    width: width(86.3),
    alignSelf: "center",
    height: height(6.5),
    borderRadius: width(2),
    // backgroundColor:AppColors.mediumTurquoise45,
    backgroundColor: "#3f5e80",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal:width(5),
    // marginTop:height(1.5)
  },
  bgMusicBtn: {
    width: width(60),
    alignSelf: "center",
    height: height(6.5),
    borderRadius: width(2),
    // backgroundColor:AppColors.mediumTurquoise45,
    backgroundColor: "#3f5e80",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width(2),
    // paddingHorizontal:width(5),
    // marginTop:height(1.5)
  },
  selectedQuestionButton: {
    borderWidth: width(0.3),
    borderColor: "#FFFFFF",
    backgroundColor: "#43487C",
  },
  questionTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  questionImage: {
    width: width(5),
    height: width(5),
    marginRight: width(3),
  },
  qustionButtonTitle: {
    fontSize: width(3.75),
    color: AppColors.white,
    textTransform: "capitalize",
  },
  plusminusContainer: {
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: width(4),
    flexDirection: "row",
    borderColor: AppColors.white,
  },
  plusminusContainerDisabled: {
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: width(4),
    flexDirection: "row",
    borderColor: AppColors.slateGray,
  },
  minusButton: {
    fontSize: width(5),
    paddingHorizontal: width(2),
    paddingVertical: height(0.1),
  },
  plusButton: {
    fontSize: width(5),
    paddingHorizontal: width(1.5),
    paddingVertical: height(0.1),
  },
  titleText: {
    borderRadius: 1,
    marginLeft: width(2),
    flexDirection: "row",
    width: "35%",
    justifyContent: "center",
  },
  currentStreakMain: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingHorizontal: width(7),
    // marginTop: height(4)
  },
  currentStreakInnerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  currentStreakText: {
    color: AppColors.white,
    marginLeft: width(1),
    fontSize: width(5),
  },
  currentStreakText2: {
    color: AppColors.white,
    marginLeft: width(3),
    fontSize: width(5),
    alignSelf: "center",
  },
  currentStreakDigit: {
    color: "#60C9CD",
    fontSize: width(4.4),
  },
  currentStreakIcon: {
    width: width(12),
    height: height(4),
  },
  shareIconButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  shareIcon: {
    width: width(6.5),
    marginHorizontal: width(2),
  },
});
export default styles;

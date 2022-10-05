import { StyleSheet } from "react-native";
import { height, width } from "react-native-dimension";
import AppColors from "../../Utills/AppColors";
import FontFamily from "../../Utills/FontFamily";
const styles = StyleSheet.create({
  headerContainer: {
    width: width(100),
    paddingTop: height(5),
    paddingHorizontal: width(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "rgb(50,63,80)",
  },
  backButtonContainer: {
    width: width(10),
  },
  headerTitle: {
    fontSize: width(5),
    fontWeight: "bold",
    color: AppColors.white,
    marginRight: width(10),
  },
  headerTitleCenter: {
    fontSize: width(5),
    fontWeight: "bold",
    color: AppColors.white,
    textAlign: "center",
    alignSelf: "center",
    width: "80%",
    // marginRight:width(16)
  },
  emptyContainer: {
    width: width(10),
  },
  // Auth Header
  authHeaderContainer: {
    width: width(100),
    // paddingTop:height(5),
    // paddingHorizontal:width(4),
    flexDirection: "row",
    alignItems: "center",
    top: height(7),
    marginLeft: width(4),
  },
  authHeaderTitle: {
    fontSize: width(4.25),
    color: AppColors.white,
  },
});
export default styles;

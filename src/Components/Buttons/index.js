import React from "react";
import {
  View,
  Image,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import AppColors from "../../Utills/AppColors";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import { resourcesIcon, fwdIcon } from "../../assets/images/index";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { shareIcon } from "../../assets/images/index";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { width, height } from "react-native-dimension";

export const Button = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  buttonId,
  gradientColor,
  textColor,
  shareButton,
}) => {
  const loadingButtonId = useSelector((state) => state.Config.buttonId);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || buttonId == loadingButtonId || isLoading}
      activeOpacity={activeOpacity}
      style={[styles.container, containerStyle]}
    >
      <LinearGradient
        start={{ x: 1, y: 0.3 }}
        end={{ x: 0.3, y: 13 }}
        colors={gradientColor ? gradientColor : AppColors.buttonLinerGradient}
        style={[styles.linearShareBtn, shareButton && containerStyle]}
      >
        {loadingButtonId == Number(buttonId) || isLoading ? (
          <ActivityIndicator color={loaderColor} size="small" />
        ) : (
          <View>
            {!shareButton ? (
              <Text style={[styles.btnText, textStyle]}>{title}</Text>
            ) : (
              <View style={styles.shareIconButton}>
                <Image
                  source={shareIcon}
                  style={styles.shareIcon}
                  resizeMode={"contain"}
                />
                <Text style={[styles.btnText, textStyle]}>{title}</Text>
              </View>
            )}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const SocialButton = ({
  title,
  onPress,
  disabled = false,
  isLoading = false,
  loaderColor = AppColors.white,
  image,
  activeOpacity = 0.7,
  containerStyle = {},
  textStyle = {},
  buttonId,
}) => {
  const loadingButtonId = useSelector((state) => state.Config.buttonId);
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || buttonId == loadingButtonId || isLoading}
      activeOpacity={activeOpacity}
      style={[
        loadingButtonId == Number(buttonId)
          ? [
              styles.socailButtonContainer,
              {
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              },
            ]
          : styles.socailButtonContainer,
        containerStyle,
      ]}
    >
      {loadingButtonId == Number(buttonId) || isLoading ? (
        <ActivityIndicator color={loaderColor} size="small" />
      ) : (
        <>
          <View style={styles.socailViewContainer}>
            <Image
              source={image}
              style={styles.socailImage}
              resizeMode="contain"
            />
            <Text style={[styles.socialButtonTitle, textStyle]}>{title}</Text>
          </View>
          <Feather
            name="chevron-right"
            size={width(6)}
            color={AppColors.white}
          />
        </>
      )}

      {/* {isLoading ? (
          <ActivityIndicator color={loaderColor} size="large" />
        ) : (
          <Text style={[styles.text, textStyle]}>{title}</Text>
        )} */}
    </TouchableOpacity>
  );
};
export const CircleButton = ({ onPress, Icon, containerStyle = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.circleButton, containerStyle]}
      onPress={onPress}
    >
      {Icon}
    </TouchableOpacity>
  );
};
export const QuestionButton = ({
  disable,
  onPress,
  Icon = null,
  containerStyle = {},
  title = "",
  isSelected,
  dailyFrequency,
  value,
  onPressPlus,
  onPressMinus,
  resourcesButton,
  resource,
  bgMusicBtn,
}) => {
  return (
    <>
      {dailyFrequency ? (
        <TouchableOpacity
          disabled={disable}
          style={[
            styles.questionButtonContainer,
            isSelected && styles.selectedQuestionButton,
            containerStyle,
          ]}
          onPress={onPress}
        >
          <View style={styles.questionTextContainer}>
            {Icon && (
              <Image
                source={Icon}
                resizeMode="contain"
                style={styles.questionImage}
              />
            )}
            <View style={{ width: "46%" }}>
              <Text style={styles.qustionButtonTitle}>{title}</Text>
            </View>
            <View style={[styles.questionTextContainer]}>
              <TouchableOpacity
                style={styles.plusminusContainer}
                onPress={onPressMinus}
              >
                <Text style={[styles.qustionButtonTitle, styles.minusButton]}>
                  -
                </Text>
              </TouchableOpacity>
              <View style={styles.titleText}>
                <Text
                  style={[styles.qustionButtonTitle, { textTransform: "none" }]}
                >
                  {!isNaN(value) ? value + "x" : value}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.plusminusContainer}
                onPress={onPressPlus}
              >
                <Text style={[styles.qustionButtonTitle, styles.plusButton]}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <Ionicons name={isSelected ? 'checkmark-circle' : 'md-radio-button-off-sharp'} size={width(5)} color={AppColors.white} /> */}
        </TouchableOpacity>
      ) : resourcesButton ? (
        <TouchableOpacity
          style={[styles.resourcesButtonContainer]}
          onPress={onPress}
        >
          <View style={[styles.currentStreakMain, { marginLeft: width(1.5) }]}>
            <View style={styles.currentStreakInnerLeft}>
              <Image
                source={resourcesIcon}
                style={styles.currentStreakIcon}
                resizeMode={"contain"}
              />
              <Text style={styles.currentStreakText}>Resources</Text>
            </View>
            <Image
              source={fwdIcon}
              style={{ width: width(5), height: height(4) }}
              resizeMode={"contain"}
            />
          </View>
        </TouchableOpacity>
      ) : bgMusicBtn ? (
        <TouchableOpacity style={[styles.bgMusicBtn]} onPress={onPress}>
          <View style={[styles.currentStreakMain, { marginLeft: width(1.5) }]}>
            <View style={styles.currentStreakInnerLeft}>
              <MaterialIcons
                name="music-note"
                size={width(6)}
                color={AppColors.white}
              />
              <Text style={styles.currentStreakText2}>{title}</Text>
            </View>
            <FontAwesome
              name="chevron-right"
              size={width(4.5)}
              color={AppColors.white}
            />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={[
            styles.questionButtonContainer,
            isSelected && styles.selectedQuestionButton,
            containerStyle,
          ]}
          onPress={onPress}
        >
          <View style={styles.questionTextContainer}>
            {Icon && (
              <Image
                source={Icon}
                resizeMode="contain"
                style={[
                  styles.questionImage,
                  resource && { width: width(7), height: height(7) },
                ]}
              />
            )}
            <Text
              style={[
                styles.qustionButtonTitle,
                resource && { fontSize: width(4.25) },
              ]}
            >
              {title}
            </Text>
          </View>
          {resource && (
            <Image
              source={fwdIcon}
              style={{ width: width(5), height: height(4) }}
              resizeMode={"contain"}
            />
          )}
          {/* <Ionicons name={isSelected ? 'checkmark-circle' : 'md-radio-button-off-sharp'} size={width(5)} color={AppColors.white} /> */}
        </TouchableOpacity>
      )}
    </>
  );
};

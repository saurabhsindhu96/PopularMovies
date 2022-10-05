import React from "react";
import { View, TouchableOpacity, Text, Platform } from "react-native";
import { width } from "react-native-dimension";
import Feather from "react-native-vector-icons/Feather";
import AppColors from "../../Utills/AppColors";
import styles from "./styles";
export const Header = ({ title = "", onPress = () => {}, headerMain }) => {
  return (
    <>
      {title == "AMBIENCE" ? (
        <View
          style={[
            styles.headerContainer,
            headerMain,
            { justifyContent: "flex-start" },
          ]}
        >
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={onPress}
          >
            <Feather
              name={Platform.OS == "ios" ? "chevron-left" : "arrow-left"}
              size={width(9)}
              color={AppColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
          <View style={styles.emptyContainer} />
        </View>
      ) : (
        <View style={[styles.headerContainer, headerMain]}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={onPress}
          >
            <Feather
              name={Platform.OS == "ios" ? "chevron-left" : "arrow-left"}
              size={width(9)}
              color={AppColors.white}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{title}</Text>
          <View style={styles.emptyContainer} />
        </View>
      )}
    </>
  );
};

export const HeaderCenter = ({
  title = "",
  onPress = () => {},
  onPressDone = () => {},
  headerMain,
}) => {
  return (
    <View style={[styles.headerContainer, headerMain]}>
      {/* <TouchableOpacity style={[styles.backButtonContainer]} onPress={onPress}>
                    <Feather name={Platform.OS == 'ios' ? 'chevron-left' : 'arrow-left'} size={width(9)} color={AppColors.white} />
                </TouchableOpacity> */}

      <TouchableOpacity
        style={[{ width: "100%", height: 45 }]}
        onPress={onPressDone}
      >
        <Text
          style={[
            styles.headerTitleCenter,
            { fontSize: width(4), textAlign: "center", marginTop: 25 },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>

      {/* <View style={styles.emptyContainer} /> */}
    </View>
  );
};
export const AuthHeader = ({
  title = "",
  resources = false,
  onPress = () => {},
  authHeaderStyle,
  size,
}) => {
  return (
    <View style={[styles.authHeaderContainer, authHeaderStyle]}>
      <TouchableOpacity style={styles.backButtonContainer} onPress={onPress}>
        <Feather
          name={Platform.OS == "ios" ? "chevron-left" : "arrow-left"}
          size={width(8.5)}
          color={AppColors.white}
        />
      </TouchableOpacity>
      <Text
        style={[
          styles.authHeaderTitle,
          { fontSize: resources ? width(5) : width(4.25) },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

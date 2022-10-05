import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoarding from "../Screens/Auth/OnBoarding";
import NewPassword from "../Screens/Auth/NewPassword";
import Landing from "../Screens/General/Landing";
import Feedback from "../Screens/Feedback";

const Stack = createNativeStackNavigator();
export default function Routes() {
  console.log("Coming");
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName=""
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="TvShows" component={NewPassword} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Details" component={Feedback} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

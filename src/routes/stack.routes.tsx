import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

import { Home } from "../pages/Home";

export type AppStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const { Navigator, Screen } = createStackNavigator<AppStackParamList>();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}

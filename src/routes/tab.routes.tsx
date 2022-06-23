import React from "react";
import { useTheme } from "styled-components";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Profile } from "../pages/Profile";

export type AppStackParamList = {
  Home: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const { Navigator, Screen } =
  createMaterialBottomTabNavigator<AppStackParamList>();

export function TabRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      activeColor={colors.secundary}
      labeled={true}
      shifting={true}
      sceneAnimationEnabled={true}
      barStyle={{
        height: 60,
        backgroundColor: colors.primary_dark,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={20} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={20} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

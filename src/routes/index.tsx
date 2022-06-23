import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/auth";

import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {!user ? <StackRoutes /> : <TabRoutes />}
    </NavigationContainer>
  );
}

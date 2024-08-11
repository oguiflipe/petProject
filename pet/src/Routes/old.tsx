import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Account from "../pages/CreateAccount";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Pets from "../pages/Pets";
import AddPets from "../pages/CratePets";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pets"
        component={Pets}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddPets"
        component={AddPets}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;

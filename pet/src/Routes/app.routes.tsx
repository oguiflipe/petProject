import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./tab.routes";

const Stack = createNativeStackNavigator();

/*Para chamar o botton tabs é necessário chamar ela dentro de uma stack screen
  Caso contrário resultara em erro.
*/
function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabRoutes"
        component={TabRoutes}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;

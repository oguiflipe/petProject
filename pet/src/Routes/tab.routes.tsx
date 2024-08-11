import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import Home from "../pages/Home";
import Settings from "../pages/Settings";
import Pets from "../pages/Pets";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
      <Tab.Navigator
      screenOptions={{
        tabBarStyle:{
            position: "absolute",
            backgroundColor: "#fff",
            borderTopWidth: 0,

            bottom: 15,
            left: 15,
            right: 15,
            elevation: 1,
            borderRadius: 10,
            height: 60

        },
        headerShown: false,
        tabBarShowLabel: false
      }}
      
      >
        <Tab.Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              focused ?
                <Ionicons 
                  name="home" 
                  size={24} 
                  color={focused ? color="#818AF9" : color="#9CA8FB"} />
                : 
                <Ionicons 
                name="home-outline" 
                size={24} 
                color="#9CA8FB" />
            ),
          }}
        />
        <Tab.Screen
          name="Pets"
          component={Pets}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
                focused ?
                <Ionicons 
                  name="paw-sharp" 
                  size={24} 
                  color={focused ? color="#818AF9" : color="#9CA8FB"} />
                : 
                <Ionicons 
                name="paw-outline" 
                size={24} 
                color="#9CA8FB" />
            ),
          }}
        />
        <Tab.Screen
          name="Configurações"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              focused ?
                <Ionicons 
                  name="person" 
                  size={24} 
                  color={focused ? color="#818AF9" : color="#9CA8FB"} />
                : 
                <Ionicons 
                name="person-outline" 
                size={24} 
                color="#9CA8FB" />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

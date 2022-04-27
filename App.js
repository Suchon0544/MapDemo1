import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import style from "./style/style";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TripPlanScreen } from "./page/TripScreen";
import { MapScreen } from "./page/MapScreen";
import { HomeScreen } from "./page/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="map" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Trip"
          component={TripPlanScreen}
          options={{
            tabBarLabel: "Trip",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bookmark" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name = 'TabNavigator' component={Tab}/>
      <Stack.Screen name = 'Details' component={Details}/>
    </Stack.Navigator>
  </NavigationContainer>
};

export default App;
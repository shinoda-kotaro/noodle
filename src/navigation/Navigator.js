import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import GroupScreen from "../screens/GourpScreen";
import ChatScreen from "../screens/ChatScreen";
import QAScreen from "../screens/QAScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Group" component={GroupScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="QA" component={QAScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/splash";
import Login from "../screens/login";
import Register from "../screens/register";

// Stack Navigation
const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavigation;

import React from "react";
import { SafeAreaView,Text } from "react-native";

import LoginScreen from './src/screens/login/LoginScreen'
import RegisterScreen from './src/screens/register/RegisterScreen'
import HomeScreen from "./src/screens/home/HomeScreen";

export default function App() {
  return(
    <SafeAreaView>
 <HomeScreen></HomeScreen>


    </SafeAreaView>
  )
}
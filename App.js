import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  return(

<NavigationContainer>
  <AuthStack/>
</NavigationContainer>
  )
}
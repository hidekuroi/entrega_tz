import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { useMyTheme } from "../hooks/useMyTheme"
import { RootStackParamList } from "../types/navigation-types"
import MainTabNavigator from "./MainTabNavigator"
import Basket from "../screens/Basket"

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="MainTabNavigator"
          options={{
            headerShown: false,
            animation: "fade",
          }}
          component={MainTabNavigator}
        />
        <RootStack.Screen name="Basket" options={{headerTransparent: true, headerBlurEffect: 'systemThinMaterial'}} component={Basket} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator

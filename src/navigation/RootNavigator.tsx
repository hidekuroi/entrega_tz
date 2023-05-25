import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React, { useEffect } from "react"
import { useMyTheme } from "../hooks/useMyTheme"
import { Platform } from "react-native"
import { RootStackParamList } from "../types/navigation-types"
import Loading from "../screens/Loading"
import MainTabNavigator from "./MainTabNavigator"

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>()
  const { colors, dark } = useMyTheme()

  // useEffect(() => {
  //   dispatch(initializeApp())
  // }, [])

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
      </RootStack.Group>
    </RootStack.Navigator>
  )
}

export default RootNavigator

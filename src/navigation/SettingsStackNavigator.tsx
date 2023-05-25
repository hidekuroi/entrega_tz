import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Platform } from "react-native"
import { useMyTheme } from "../hooks/useMyTheme"
import { SettingsStackParamList } from "../types/navigation-types"
import Settings from "../screens/SettingsScreens/Settings"
import About from "../screens/SettingsScreens/About"
import DebugScreen from "../screens/SettingsScreens/DebugScreen"
import StoreView from "../screens/SettingsScreens/StoreView"

const SettingsStackNavigator = () => {
  const SettingsStack = createNativeStackNavigator<SettingsStackParamList>()

  const { colors } = useMyTheme()

  return (
    <SettingsStack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        // headerStyle: {backgroundColor: colors.background},
        headerTransparent: Platform.OS === "ios" ? true : false,
        headerBlurEffect: "systemThinMaterial",
        headerLargeStyle: { backgroundColor: colors.background },
        animation: "default",
      }}
    >
      <SettingsStack.Screen
        name={"Settings"}
        options={{
          headerLargeTitle: true,
          title: "Settings",
        }}
        component={Settings}
      />
      <SettingsStack.Screen name="About" component={About} />
      <SettingsStack.Screen name="Debug" component={DebugScreen} />
      <SettingsStack.Screen name="StoreView" component={StoreView} />
    </SettingsStack.Navigator>
  )
}

export default SettingsStackNavigator

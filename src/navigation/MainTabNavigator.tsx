import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { BlurView } from "expo-blur"
import { Platform, StyleSheet } from "react-native"
import { useMyTheme } from "../hooks/useMyTheme"
// import SettingsStackNavigator from "./SettingsStackNavigator"
import { MainTabParamList } from "../types/navigation-types"
import SettingsStackNavigator from "./SettingsStackNavigator"
import ListStackNavigator from "./ListStackNavigator"

const MainTabNavigator = () => {
  const MainTab = createBottomTabNavigator<MainTabParamList>()

  const { dark } = useMyTheme()

  return (
    <MainTab.Navigator
      initialRouteName="ListStackNavigator"
      screenOptions={{
        headerShown: false,
        tabBarBackground:
          Platform.OS === "ios"
            ? () => (
                <BlurView
                  tint={dark ? "dark" : "light"}
                  intensity={100}
                  style={StyleSheet.absoluteFill}
                />
              )
            : undefined,
        tabBarStyle: { position: "absolute" },
      }}
    >
      <MainTab.Screen
        name="ListStackNavigator"
        component={ListStackNavigator}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="SettingsStackNavigator"
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons
              name={focused ? "cog" : "cog-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  )
}

export default MainTabNavigator

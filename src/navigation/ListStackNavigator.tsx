import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Platform } from "react-native"
import { useMyTheme } from "../hooks/useMyTheme"
import { ListStackParamList } from "../types/navigation-types"
import List from "../screens/List"
import ProductModalScreen from "../screens/ProductModalScreen"

const ListStackNavigator = () => {
  const ListStack = createNativeStackNavigator<ListStackParamList>()

  const { colors } = useMyTheme()

  return (
    <ListStack.Navigator
      initialRouteName="List"
      screenOptions={{
        // headerStyle: {backgroundColor: colors.background},
        headerTransparent: Platform.OS === "ios" ? true : false,
        headerBlurEffect: "systemThinMaterial",
        headerLargeStyle: { backgroundColor: colors.background },
        animation: "default",
      }}
    >
      <ListStack.Screen
        name={"List"}
        options={{
          headerLargeTitle: true,
          title: "Products",
        }}
        component={List}
      />
      <ListStack.Screen
        options={{
          presentation: "modal",
          headerShown: false,
        }}
        name={"Product"}
        component={ProductModalScreen}
      />
    </ListStack.Navigator>
  )
}

export default ListStackNavigator

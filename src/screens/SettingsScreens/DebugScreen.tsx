import { useHeaderHeight } from "@react-navigation/elements"
import { StatusBar } from "expo-status-bar"
import React, { FC, useState } from "react"
import { View, ScrollView, Text } from "react-native"
import Card from "../../components/Card"
import { useMyTheme } from "../../hooks/useMyTheme"
import { useStore } from "../../hooks/useStore"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { SettingsStackParamList } from "../../types/navigation-types"

type DebugScreenProps = NativeStackScreenProps<SettingsStackParamList, "Debug">

const DebugScreen: FC<DebugScreenProps> = ({ navigation }) => {
  const { colors } = useMyTheme()
  const headerHeight = useHeaderHeight()
  const store = useStore()

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ backgroundColor: colors.background }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: headerHeight / 2,
        }}
      >
        <Card cardHeader="Store" colors={colors}>
          <Card.Item
            text="Store debug"
            chevron
            onPress={() => navigation.navigate("StoreView", { store })}
          />
        </Card>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}

export default DebugScreen

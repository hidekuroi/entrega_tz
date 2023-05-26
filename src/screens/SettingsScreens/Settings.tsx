import { StatusBar } from "expo-status-bar"
import React, { FC } from "react"
import {
  View,
  StyleSheet,
  ScrollView,
  Button,
  ActionSheetIOS,
  Platform,
} from "react-native"
import { useMyTheme } from "../../hooks/useMyTheme"
import Card from "../../components/Card"
import { SettingsStackParamList } from "../../types/navigation-types"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

type SettingsScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  "Settings"
>

const Settings: FC<SettingsScreenProps> = ({ navigation }) => {
  const { colors, dark } = useMyTheme()

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Card colors={colors}>
          <Card.Item
            text="Debug"
            chevron
            onPress={() => navigation.navigate("Debug")}
            icon={{
              iconName: "bug",
              color: "#FF5000",
            }}
          />
          <Card.Item
            text="Placeholder"
            chevron
            disabled
            icon={{
              iconName: "cog",
              color: "gray",
            }}
          />
        </Card>
        <Card colors={colors}>
          <Card.Item
            text={"About"}
            onPress={() => navigation.navigate("About")}
            icon={{
              iconName: "information-circle",
              // shape: "square",
              color: colors.primary,
            }}
            chevron
          />
        </Card>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    width: Platform.OS === "ios" ? "91.5%" : "100%",
    borderRadius: 11,
    marginBottom: 36,
  },
  cardItem: {
    fontSize: 17,
    paddingVertical: 0,
  },
})

export default Settings

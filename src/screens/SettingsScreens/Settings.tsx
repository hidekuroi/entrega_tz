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
        {/* <Card colors={colors}> */}
        {/* <Card.Item
            text={i18n.t('general')}
            // disabled
            onPress={
              // alert(
              //   `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
              // )
              () => navigation.navigate("General")
            }
            icon={{
              iconName: "cog-outline",
              shape: "square",
              color: colors.inputPlaceholder,
            }}
            chevron
          /> */}
        {/* <Card.Item
            text={i18n.t('appearence')}
            helperText={dark ? i18n.t('appearenceDark') : i18n.t('appearenceLight')}
            onPress={() => navigation.navigate("Appearence")}
            icon={{
              iconName: "color-palette",
              shape: "square",
              color: "#ff69cc",
            }}
            chevron
          /> */}

        {/* </Card> */}

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

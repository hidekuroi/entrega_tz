import React, { FC, useEffect } from "react"
import { useHeaderHeight } from "@react-navigation/elements"
import { Button, ScrollView, Text, View } from "react-native"
import { useMyTheme } from "../../hooks/useMyTheme"
import { StatusBar } from "expo-status-bar"
import Card from "../../components/Card"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { SettingsStackParamList } from "../../types/navigation-types"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { observer } from "mobx-react-lite"

type StoreViewScreenProps = NativeStackScreenProps<
  SettingsStackParamList,
  "StoreView"
>

const StoreView: FC<StoreViewScreenProps> = observer(
  ({ navigation, route }) => {
    const { colors } = useMyTheme()
    const headerHeight = useHeaderHeight()
    const bottomTabBarHeight = useBottomTabBarHeight()
    const item = route.params
    const title = route.params.title
    console.log(item)

    useEffect(() => {
      navigation.setOptions({ title: title ? title : "Store" })
    }, [item])

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
            marginBottom: bottomTabBarHeight,
          }}
        >
          <Card colors={colors}>
            {/* @ts-ignore */}
            {Object.keys(item.store).map((i, index) =>
              typeof item.store[i] === "object" ? (
                <Card.Item
                  key={i}
                  text={i}
                  chevron
                  onPress={() =>
                    navigation.navigate("StoreView", {
                      store: item.store[i],
                      title: i,
                    })
                  }
                />
              ) : (
                <Card.Item
                  key={i}
                  text={i}
                  helperText={item.store[i].toString()}
                />
              )
            )}
          </Card>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    )
  }
)

export default StoreView

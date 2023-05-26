import { StatusBar } from "expo-status-bar"
import { useMyTheme } from "../hooks/useMyTheme"
import React, { FC } from "react"
import {
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ListStackParamList } from "../types/navigation-types"
import { useStore } from "../hooks/useStore"

type ProductModalScreenProps = NativeStackScreenProps<
  ListStackParamList,
  "Product"
>

const ProductModalScreen: FC<ProductModalScreenProps> = ({
  navigation,
  route,
}) => {
  const { colors, dark } = useMyTheme()
  const product = route.params.product
  const {basketStore} = useStore()

  return (
    <View style={{ height: "100%", width: "100%" }}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: "100%", width: "100%" }}
      >
        <Image
          style={{ width: "100%", height: 300 }}
          source={require("../img/placeholder.jpg")}
        />
        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ width: "91.5%", marginTop: 20 }}>
            <Text style={{ color: colors.helperText, fontSize: 15 }}>
              {product.description ? product.description : "Описания нет."}
            </Text>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: colors.divider,
                marginVertical: 15,
              }}
            />
            <View style={{ marginBottom: 130 + 15 }}>
              <Text style={{ color: colors.helperText }}>
                Калории: {product.calories}
              </Text>
              <Text style={{ color: colors.helperText }}>
                Жиры: {product.fat}
              </Text>
              <Text style={{ color: colors.helperText }}>
                Протеины: {product.protein}
              </Text>
            </View>
          </View>
        </View>
        <StatusBar style="light" />
      </ScrollView>
      <View>
        <View
          style={{
            width: "100%",
            height: 130,
            backgroundColor: dark ? colors.modalBackground : colors.card,
            position: "absolute",
            bottom: 0,
            alignItems: "center",
            borderTopWidth: 0.5,
            borderTopColor: colors.divider,
          }}
        >
          <View style={{ width: "91.5%" }}>
            <View style={{ width: "100%", height: "50%" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: "85%",
                    height: "100%",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: colors.text, fontSize: 17 }}>
                    {product.name}
                  </Text>
                  <Text style={{ color: colors.helperText }}>
                    {product.weight} гр
                  </Text>
                </View>
                <View
                  style={{
                    width: "15%",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ color: colors.text, fontSize: 15 }}>
                    {product.price} ₽
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "50%",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: colors.detailsSwipeButton,
                  width: "30%",
                  height: "90%",
                  borderRadius: 16,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: colors.contrastText,
                    fontWeight: "500",
                    fontSize: 17,
                  }}
                >
                  -
                </Text>
                <Text
                  style={{
                    color: colors.contrastText,
                    fontWeight: "500",
                    fontSize: 17,
                  }}
                >
                  0
                </Text>
                <Text
                  style={{
                    color: colors.contrastText,
                    fontWeight: "500",
                    fontSize: 17,
                  }}
                >
                  +
                </Text>
              </View>
              <TouchableHighlight
                onPress={() => {
                  basketStore.addProduct(product)
                  navigation.goBack()
                }}
                underlayColor={"rgb(227, 201, 0)"}
                style={{
                  backgroundColor: "rgb(252, 224, 0)",
                  height: "90%",
                  borderRadius: 16,
                  width: "60%",
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Text
                    style={{ color: "black", fontWeight: "500", fontSize: 17 }}
                  >
                    Add to basket
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ProductModalScreen

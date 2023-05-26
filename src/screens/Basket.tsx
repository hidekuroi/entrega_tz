import React, { useEffect } from "react"
import {
  FlatList,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native"
import { useStore } from "../hooks/useStore"
import { ProductType } from "../types/common"
import { useMyTheme } from "../hooks/useMyTheme"
import { Ionicons } from "@expo/vector-icons"
import { observer } from "mobx-react-lite"

const Basket = observer(() => {
  const { basketStore } = useStore()
  const { colors } = useMyTheme()

  let total = 0
  basketStore.basketProducts.map((p) => (total += Number(p.price)))

  const renderItem = ({ item }: { item: ProductType }) => {
    return (
      <View
        style={{
          width: "100%",
          height: 130,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            backgroundColor: colors.card,
            height: "100%",
            width: "91.5%",
            borderRadius: 22,
            flexDirection: "row",
          }}
        >
          <View style={{ width: "30%" }}>
            <View style={{ padding: 5 }}>
              <Image
                source={require("../img/placeholder.jpg")}
                style={{ height: "100%", width: "100%", borderRadius: 22 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "70%",
              padding: 5,
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{ color: colors.text, fontSize: 15, fontWeight: "500" }}
              >
                {item.name}
              </Text>
            </View>
            <View>
              <Text
                style={{ color: colors.text, fontSize: 17, fontWeight: "500" }}
              >
                {item.price} ₽
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => basketStore.deleteProduct(item.guid)}
            style={{ position: "absolute", right: 7, top: 7 }}
          >
            <Ionicons
              name="close-circle"
              size={24}
              color={colors.notification}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <>
      <FlatList
        ListEmptyComponent={
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: colors.text }}>Basket is empty</Text>
          </View>
        }
        extraData={basketStore.basketProducts.length}
        data={basketStore.basketProducts}
        renderItem={renderItem}
        contentInsetAdjustmentBehavior="automatic"
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          height: 85,
          width: "100%",
          backgroundColor: colors.card,
          borderTopColor: colors.divider,
          borderTopWidth: 0.5,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "91.5%",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ height: "50%", justifyContent: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: colors.contrastText }}>{total} ₽</Text>
          </View>
          <TouchableHighlight
            onPress={basketStore.basketProducts.length ? () => {} : undefined}
            underlayColor={"rgb(227, 201, 0)"}
            style={{
              backgroundColor: basketStore.basketProducts.length ? "rgb(252, 224, 0)" : "rgb(237, 228, 154)",
              height: "50%",
              borderRadius: 16,
              width: "100%",
              marginBottom: 7
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Text style={{ color: "black", fontWeight: "500", fontSize: 17 }}>
                Order
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </>
  )
})

export default Basket

import React from "react"
import { Image, Text, TouchableHighlight, View } from "react-native"
import { ProductType } from "../types/common"
import { ColorsType } from "../themes/colors"

type ProductCardPropsType = {
  item: ProductType
  colors: ColorsType
  dark: boolean
  disabled?: boolean

  onPress?: () => void
}

const ProductCard = ({
  item,
  colors,
  dark,
  onPress,
  disabled = false,
}: ProductCardPropsType) => {
  console.log("renderITEM")
  return (
    <View style={{ minHeight: 200, width: "50%" }}>
      <View
        style={{
          backgroundColor: colors.card,
          borderRadius: 22,
          //   padding: 32,
          margin: "4%",
          height: 270,
        }}
      >
        <TouchableHighlight
          style={{ height: "100%", width: "100%", borderRadius: 22 }}
          activeOpacity={1}
          underlayColor={colors.touching}
          onPress={() => onPress && onPress()}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
              alignItems: "center",
              padding: 7,
            }}
          >
            {/* <View> */}
            <Image
              style={{
                height: "50%",
                width: "100%",
                backgroundColor: colors.background,
                borderTopLeftRadius: 22,
                borderTopRightRadius: 22,
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
              source={require("../img/placeholder.jpg")}
            />
            {/* </View> */}
            <View
              style={{
                justifyContent: "space-between",
                width: "100%",
                height: "50%",
                //   borderWidth: 1,
                paddingTop: 5,
              }}
            >
              <Text
                style={{
                  color: disabled ? "red" : colors.text,
                  fontWeight: "500",
                  fontSize: 17,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  height: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.modalInput,
                  borderRadius: 22,
                  shadowColor: dark
                    ? "rgba(255, 255, 255, 0)"
                    : colors.disabledText,
                  shadowOpacity: 0.2,
                  shadowOffset: { height: 1.5 },
                  shadowRadius: 1,
                }}
              >
                <Text style={{ color: colors.text, fontSize: 17 }}>
                  {item.price} ₽
                </Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default React.memo(ProductCard, (prevProps, nextProps) => {
  return (
    prevProps.item._id === nextProps.item._id &&
    prevProps.colors === nextProps.colors
  )
})

import React, { FC } from "react"
import { View, StyleSheet, Platform, Text } from "react-native"
import { ColorsType, defaultColors } from "../themes/colors"
import CardItem, { CardItemProps } from "./CardItem"

const Card: FC<{
  children: Array<React.ReactNode> | React.ReactNode
  isModalCard?: boolean
  noMargin?: boolean
  cardHeader?: string
  cardDescription?: string
  colors?: ColorsType
}> & { Item: FC<CardItemProps> } = ({
  children,
  isModalCard,
  noMargin,
  cardHeader,
  cardDescription,
  colors,
}): JSX.Element => {
  // const { colors } = useMyTheme()

  if (!colors) {
    colors = defaultColors
  }

  let childrenWithProps

  const childrenArray = React.Children.toArray(children)

  childrenWithProps = childrenArray.map((c, i) => {
    return React.cloneElement(
      c as JSX.Element,
      //! Damn, mb 'll optimize later
      childrenArray.length === 1
        ? { isSingle: true, isModalCard: isModalCard, colors }
        : i === 0
        ? { isFirst: true, isModalCard: isModalCard, colors }
        : i + 1 === childrenArray.length
        ? { isLast: true, isModalCard: isModalCard, colors }
        : { isModalCard, colors }
    )
  })

  return (
    <View
      style={{
        width: Platform.OS === "ios" ? "91.5%" : "100%",
        marginBottom: !noMargin ? (isModalCard ? 16 : 35) : 0,
      }}
    >
      {cardHeader && (
        <View>
          <View style={{ marginLeft: 16, marginBottom: 7, marginTop: 3 }}>
            <Text style={{ color: colors.disabledText, fontSize: 12.5 }}>
              {cardHeader.toUpperCase()}
            </Text>
          </View>
        </View>
      )}
      <View
        style={[
          styles.card,
          { backgroundColor: isModalCard ? colors.modalCard : colors.card },
          // isModalCard && { marginBottom: 16 },
          noMargin && { marginBottom: 0 },
        ]}
      >
        <View>{childrenWithProps ? childrenWithProps : children}</View>
      </View>
      {cardDescription && (
        <View style={{ marginHorizontal: 16, marginTop: 7 }}>
          <Text style={{ color: colors.disabledText, fontSize: 13.3 }}>
            {cardDescription}
          </Text>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 11,
  },
})

Card.Item = CardItem

export default Card

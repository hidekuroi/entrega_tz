import React, { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native"
import { useMyTheme } from "../hooks/useMyTheme"
import { useStore } from "../hooks/useStore"
import { observer } from "mobx-react-lite"
import { ProductType } from "../types/common"
import ProductCard from "../components/ProductCard"
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs"
import { StatusBar } from "expo-status-bar"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ListStackParamList } from "../types/navigation-types"

type ListScreenProps = NativeStackScreenProps<ListStackParamList, "List">

const List: FC<ListScreenProps> = observer(({ navigation }) => {
  const { colors, dark } = useMyTheme()
  const { productsStore } = useStore()
  const tabBarHeight = useBottomTabBarHeight()

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  console.log("render")

  useEffect(() => {
    productsStore.fetchProducts()
    productsStore.fetchStopLists()
  }, [])

  const RenderItem = ({ item }: { item: ProductType }) => (
    <ProductCard
      colors={colors}
      disabled={false}
      item={item}
      dark={dark}
      onPress={() => navigation.navigate("Product", { product: item })}
    />
  )

  const keyExtractor = (item: ProductType) => item?._id

  const endReached = () => {
    if (productsStore.currentPage < productsStore.totalPages)
      productsStore.fetchNextPage()
  }

  const refreshHandler = () => {
    setIsRefreshing(true)
    productsStore.fetchProducts()
    setIsRefreshing(false)
  }

  let isBlockedExists = 0
  productsStore.blockedProducts.map((bp) => {
    productsStore.products.map((p) => {
      p.specifications.map((specItem) => {
        specItem.composition.map((id) => {
          if (id === bp) isBlockedExists++
        })
      })
    })
  })

  return (
    <>
      <FlatList
        // ! DELETE <TEXT>ISBLOCKEDEXISTS</TEXT>
        ListFooterComponent={
          <View style={{ height: tabBarHeight }}>
            <Text>{isBlockedExists}</Text>
          </View>
        }
        numColumns={2}
        ListEmptyComponent={<ActivityIndicator />}
        keyExtractor={keyExtractor}
        data={productsStore.products}
        renderItem={RenderItem}
        onEndReached={endReached}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={refreshHandler}
          />
        }
        contentInsetAdjustmentBehavior="automatic"
      />
      <StatusBar style="auto" />
    </>
  )
})

export default List

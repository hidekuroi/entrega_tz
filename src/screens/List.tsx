import React, { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  Text,
  TouchableHighlight,
  TouchableOpacity,
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
import { Ionicons } from "@expo/vector-icons"

type ListScreenProps = NativeStackScreenProps<ListStackParamList, "List">

const List: FC<ListScreenProps> = observer(({ navigation }) => {
  const { colors, dark } = useMyTheme()
  const { productsStore, basketStore } = useStore()
  const tabBarHeight = useBottomTabBarHeight()

  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  console.log("render")

  useEffect(() => {
    productsStore.fetchProducts()
    productsStore.fetchStopLists()
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {navigation.navigate('Basket')}}>
          <Ionicons name="cart-outline" color={colors.contrastText} size={27} />
          <View style={{ position: "absolute", backgroundColor: "yellow", right: 0, borderRadius: 50, padding: 2 }}>
            <Text style={{fontSize: 12, fontWeight: '600'}}>{basketStore.basketProducts.length}</Text>
          </View>
        </TouchableOpacity>
      ),
    })
  }, [dark, basketStore.basketProducts.length])

  const RenderItem = ({ item }: { item: ProductType }) => (
    <ProductCard
      colors={colors}
      disabled={productsStore.blockedProducts.some((p) => p === item.guid)}
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

  return (
    <>
      <FlatList
        // ! DELETE <TEXT>ISBLOCKEDEXISTS</TEXT>
        ListFooterComponent={<View style={{ height: tabBarHeight }} />}
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

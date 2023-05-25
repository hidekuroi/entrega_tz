import { NavigatorScreenParams } from "@react-navigation/native"
import { ProductType } from "./common"

export type RootStackParamList = {
  Loading: undefined
  MainTabNavigator: NavigatorScreenParams<MainTabParamList>
}

export type MainTabParamList = {
  ListStackNavigator: NavigatorScreenParams<ListStackParamList>
  SettingsStackNavigator: NavigatorScreenParams<SettingsStackParamList>
}

export type ListStackParamList = {
  List: undefined
  Product: { product: ProductType }
}

export type SettingsStackParamList = {
  Settings: undefined
  About: undefined
  Debug: undefined
  StoreView: { store: object; title?: string }
}

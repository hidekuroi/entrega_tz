import { createContext } from "react"
import { ProductsStore } from "./ProductsStore"
import { BasketStore } from "./BasketStore"

export class RootStore {
  productsStore: ProductsStore
  basketStore: BasketStore

  constructor() {
    this.productsStore = new ProductsStore()
    this.basketStore = new BasketStore()
  }
}

export const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider

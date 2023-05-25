import { createContext } from "react"
import { ProductsStore } from "./ProductsStore"

export class RootStore {
  productsStore: ProductsStore

  constructor() {
    this.productsStore = new ProductsStore()
  }
}

export const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider

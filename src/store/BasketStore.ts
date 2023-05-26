import { makeAutoObservable } from "mobx"
import { ProductType } from "../types/common"

export class BasketStore {
  private _products: ProductType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setProduct(products: ProductType[]) {
    this._products = products
  }

  addProduct(product: ProductType) {
    let newarr = this._products
    newarr.push(product)
    this.setProduct(newarr)
  }
  deleteProduct(guid: string) {
    let newarr = this._products.filter((p) => p.guid !== guid)
    this.setProduct(newarr)
  }

  get basketProducts() {
    return this._products
  }
}

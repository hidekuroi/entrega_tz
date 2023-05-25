import { productsAPI } from "../api/products-api"
import { ProductType, StopList } from "../types/common"
import { makeAutoObservable } from "mobx"

export class ProductsStore {
  private _products: Array<ProductType> = []
  private _organizationGuid: string = "d391a743-4e13-11ea-a9ab-86b1f8341741"
  private _limit: number = 12
  private _currentPage: number = 0
  private _totalPages: number = 0
  private _dataQuantity: number = 0

  private _blockedProducts: Array<string> = []
  private _organizationToStop: string = "51c52db8-4e30-11ea-a9ab-86b1f8341741"

  constructor() {
    makeAutoObservable(this)
  }

  //*SETTERS
  setProducts(products: Array<ProductType>) {
    this._products = products
  }
  setDataQuantity(dataQuantity: number) {
    this._dataQuantity = dataQuantity
  }
  setTotalPages(totalPages: number) {
    this._totalPages = totalPages
  }
  setCurrentPage(page: number) {
    this._currentPage = page
  }
  setBlockedProducts(blockedProducts: Array<string>) {
    this._blockedProducts = blockedProducts
  }
  //*

  //*AXIOS CALLS
  fetchProducts(
    limit = this._limit,
    page = 0,
    organizationGuid = this._organizationGuid
  ) {
    productsAPI
      .getOrganizationProducts(organizationGuid, limit, page)
      .then((data) => {
        if (data) {
          this.setProducts(data.data)
          this.setDataQuantity(data.dataQuantity)
          this.setTotalPages(Math.floor(data.dataQuantity / this._limit))
          this.setCurrentPage(0)
        }
      })
  }
  fetchNextPage() {
    productsAPI
      .getOrganizationProducts(
        this._organizationGuid,
        this._limit,
        this._currentPage + 1
      )
      .then((data) => {
        if (data) {
          this.setCurrentPage(this._currentPage + 1)
          this.setProducts([...this._products, ...data.data])
        }
      })
  }
  fetchStopLists() {
    productsAPI.getStopLists(this._organizationGuid).then((data) => {
      if (data) {
        data.StopLists.map((list) => {
          if (list.organizationId === this._organizationToStop) {
            this.setBlockedProducts(list.products)
          }
        })
      }
    })
  }
  //*

  //*GETTERS
  get products() {
    return this._products
  }
  get dataQuantity() {
    return this._dataQuantity
  }
  get totalPages() {
    return this._totalPages
  }
  get currentPage() {
    return this._currentPage
  }
  get blockedProducts() {
    return this._blockedProducts
  }
  //*
}

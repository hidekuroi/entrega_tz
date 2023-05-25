export type ProductType = {
  accessibility: {
    delivery: boolean
    pickup: boolean
    inPlace: boolean
  }
  show: boolean
  active: boolean
  available: boolean
  onlyWithSpecifications: boolean
  groupWith: string
  groupName: string
  groupWeight: string
  quantity: number
  calories: number
  fat: number
  protein: number
  carbohydrate: number
  weight: string
  alcohol: false
  _id: string
  guid: string
  organizationGuid: string
  name: string
  price: string
  fakeprice: string
  categoryGuid: string
  description: string
  measure: string
  image: string
  imageGrid: string
  specifications: Array<SpecItem>
  updated: string
  //?Date type?
}

export type SpecItem = {
  _id: string
  composition: Array<string>
}

export type StopList = {
  organizationId: string
  products: Array<string>
}

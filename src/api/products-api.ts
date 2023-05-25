import { ProductType, StopList } from "../types/common"
import { DefaultResponseType, instance } from "./api"

export const productsAPI = {
  getOrganizationProducts(
    organizationGuid: string,
    limit: number,
    page: number
  ) {
    return instance
      .post<DefaultResponseType<ProductType>>(`api/products-by-organization/`, {
        organizationGuid,
        limit,
        page,
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        alert("Some error occurred\n" + err)
      })
  },

  getStopLists(organizationGuid: string) {
    return instance
      .get<{ StopLists: Array<StopList> }>(
        `uploads/stoplist/${organizationGuid}.json`
      )
      .then((response) => response.data)
  },
}

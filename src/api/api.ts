import axios from "axios"

export const instance = axios.create({
  baseURL: "http://marketplace.entrega.su",
  withCredentials: true,
})

// DEFUALT RESPONSE GENERIC
export type DefaultResponseType<D = {}> = {
  data: [D]
  success: boolean
  dataQuantity: number
}

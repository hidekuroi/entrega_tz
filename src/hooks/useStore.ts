import { useContext } from "react"
import { StoreContext } from "../store"

export const useStore = () => useContext(StoreContext)

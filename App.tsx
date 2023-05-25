import { NavigationContainer } from "@react-navigation/native"
import { Platform, useColorScheme } from "react-native"
import {
  ReactNavigationDarkTheme,
  ReactNavigationDefaultTheme,
} from "./src/themes/ReactNavigationThemes"
import { ThemeProvider } from "./src/themes/ThemeProvider"
import RootNavigator from "./src/navigation/RootNavigator"
import { StoreProvider, rootStore } from "./src/store"

export default function App() {
  let scheme = useColorScheme()

  console.log(scheme)

  //
  Platform.OS === "web" ? (scheme = "light") : (scheme = scheme)
  //

  return (
    <StoreProvider value={rootStore}>
      <ThemeProvider>
        <NavigationContainer
          theme={
            scheme === "dark"
              ? ReactNavigationDarkTheme
              : ReactNavigationDefaultTheme
          }
        >
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </StoreProvider>
  )
}

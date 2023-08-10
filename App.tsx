import { Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito'
import { ThemeProvider, useTheme } from '@shopify/restyle'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { Fragment, useEffect } from 'react'

import { Box, Text } from './src/features/core/components'
import theme, { type Theme } from './src/features/core/theme'

void SplashScreen.preventAutoHideAsync()

export default function App (): JSX.Element {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(console.error)
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <Fragment/>
  }

  return (
    <ThemeProvider theme={theme}>
      <Root/>
    </ThemeProvider>
  )
}

const Root = (): JSX.Element => {
  const theme = useTheme<Theme>()

  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: theme.colors.mainBackground,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto"/>
    </Box>
  )
}

import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Box, Text } from './src/features/core/components'
import theme from './src/features/core/theme'

export default function App (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Box style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto"/>
      </Box>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

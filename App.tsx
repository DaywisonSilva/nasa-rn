import React from 'react'
import { Center, NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/router'

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

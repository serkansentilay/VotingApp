import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './src/Router'
import { NativeBaseProvider } from "native-base";
import { ApolloProvider } from '@apollo/client';
import client from './src/Apollo';

const App = () => {
  return (
    <NativeBaseProvider>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({})
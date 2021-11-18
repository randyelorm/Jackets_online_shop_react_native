import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RootNavigator from './Navigator/RootNavigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4FB"
  },
});

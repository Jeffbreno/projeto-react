import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Cesta from './src/view/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    <AppLoading />
  }
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100vw",
  },
});
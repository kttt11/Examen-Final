import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Splash from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

Splash.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadApp() {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      Splash.hideAsync();
      navigation.replace('AppNavigator');
    }
    loadApp();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Image
        source={require("../assets/songam.png")}
        style={styles.image}
      />
      <Text style={styles.loadingText}>LOADING...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E5E5E",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "600",
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
  loadingText: {
    marginTop: 20,
    color: "#fff",
  },
});

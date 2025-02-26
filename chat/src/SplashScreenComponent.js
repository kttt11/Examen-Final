import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as Splash from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native';

Splash.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadApp() {
      await new Promise((resolve) => setTimeout(resolve, 8000));
      Splash.hideAsync();
      navigation.replace('chatbot');
    }
    loadApp();
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <Image
        source={require("../assets/cne.png")}
        style={styles.image}
      />
      
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
    width: 100,
    height: 100,
    marginTop: 20,
  },
  loadingText: {
    marginTop: 20,
    color: "#fff",
  },
});

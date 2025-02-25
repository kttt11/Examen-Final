/*}import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // Importa TouchableOpacity
import * as Splash from 'expo-splash-screen';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

// Evita que el splash desaparezca automáticamente
Splash.preventAutoHideAsync();

export default function SplashScreenComponent() {
  const navigation = useNavigation(); // Hook de navegación

  // Función para manejar el "tap" y navegar a la pantalla del chatbot
  const handleTap = async () => {
    await Splash.hideAsync(); // Oculta el splash cuando el usuario toque la pantalla
    navigation.replace('Chatbot'); // Redirige a la pantalla del chatbot
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleTap} activeOpacity={0.8}>
      <Text style={styles.title}>STORY</Text>
      <Image
        source={require("./assets/songam.png")} // Asegúrate de que la ruta sea correcta
        style={styles.image}
      />
      <Text style={styles.loadingText}>Tap to continue...</Text> {/* Texto que indica que se puede tocar
    </TouchableOpacity>
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
    fontWeight: "600", // Cambia a string para evitar advertencias
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
git add .
git commit -m "Primer commit del proyecto"
git remote add origin https://github.com/usuario/nombre-repositorio.git */{}

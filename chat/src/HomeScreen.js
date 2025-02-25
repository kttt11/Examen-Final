import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native'; // Importa Linking para abrir URLs

// Avatar animado (puede ser un GIF o MP4)
const avatarUrl = require('../assets/smi-me.gif');  // O usa un archivo MP4 si prefieres video

export default function HomeScreen() {
  
  // Función para redirigir al LinkedIn
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/tu-perfil'); // Reemplaza con tu perfil de LinkedIn
  };

  return (
    <View style={styles.container}>
      {/* Presentación y nombre */}
      <Text style={styles.title}>¡Hola! Soy [Tu Nombre]</Text>
      <Text style={styles.subtitle}>Desarrollador de Software | Entusiasta de la Tecnología</Text>

      {/* Avatar animado */}
      <Image source={avatarUrl} style={styles.avatar} /> 

      {/* Botón para ir a LinkedIn */}
      <TouchableOpacity style={styles.linkButton} onPress={openLinkedIn}>
        <Image
          source={require('../assets/logolink.png')} // Asegúrate de tener el logo de LinkedIn en tu proyecto
          style={styles.linkIcon}
        />
        <Text style={styles.linkText}>Visítame en LinkedIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  avatar: {
    width: 150, 
    height: 150,
    borderRadius: 75, // Hace que el avatar sea circular
    marginVertical: 20,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  linkIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#0077b5', // Color de LinkedIn
  },
});

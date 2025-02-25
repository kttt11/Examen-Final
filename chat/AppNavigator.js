import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from './src/HomeScreen';
import Chatbot from './src/chatbot';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#FFFFFF' },
        tabBarActiveTintColor: '#09726F',
        tabBarInactiveTintColor: 'rgb(80, 79, 79)',
        tabBarActiveBackgroundColor: '#FFFFFF',
        tabBarIconStyle: {
          borderWidth: 0,
          borderColor: 'transparent',
          borderRadius: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="body-outline" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chatbot"
        component={Chatbot}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox-ellipses-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

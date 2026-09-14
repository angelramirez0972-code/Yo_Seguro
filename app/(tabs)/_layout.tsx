// app/(tabs)/_layout.tsx

import React from 'react';
import { Tabs } from 'expo-router';
// Importa un componente de ícono (ejemplo con Ionicons)
// Asegúrate de tener 'expo-vector-icons' instalado
import { Ionicons } from '@expo/vector-icons'; 

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        // Oculta el título en la cabecera
        headerShown: false, 
        // Color para la pestaña activa e inactiva
        tabBarActiveTintColor: '#007bff', 
        tabBarInactiveTintColor: 'gray',
      }}
    >
      {/* 1. Pestaña de Inicio */}
      <Tabs.Screen
        // El nombre "index" es especial, es la pestaña por defecto
        name="index" // <-- Nota: estoy usando 'index.tsx' como tu home
        options={{
          title: 'Inicio', // El texto de la pestaña
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* 2. Pestaña de Reportar */}
      <Tabs.Screen
        name="report-screen" // Coincide con tu archivo 'report-screen.tsx'
        options={{
          title: 'Reportar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}
      />

      {/* 3. Pestaña de Historial */}
      <Tabs.Screen
        name="history-screen" // Coincide con 'history-screen.tsx'
        options={{
          title: 'Historial',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      {/* 4. Pestaña de Configuración */}
      <Tabs.Screen
        name="settings-screen" // Coincide con 'settings-screen.tsx'
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />

      {/* --- PANTALLAS OCULTAS --- */}
      {/* Estas son pantallas DENTRO de (tabs) pero que NO tienen un ícono
          en la barra de pestañas. 'href: null' las oculta. */}
      
      <Tabs.Screen name="home-screen" options={{ href: null }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
      <Tabs.Screen name="page" options={{ href: null }} />

    </Tabs>
  );
}
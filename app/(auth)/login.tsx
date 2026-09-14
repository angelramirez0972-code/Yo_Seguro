import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, Button, Text, TextInput, View } from 'react-native';
// import { supabase } from '../../lib/supabaseClient'; // <-- Desconectado para pruebas

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // --- LÓGICA DE LOGIN SIMULADA ---
  const handleLogin = () => {
    if (loading) return;
    setLoading(true);

    // Comprobamos las credenciales de prueba
    if (email === 'admint@mail.com' && password === '1234') {
      console.log("¡Login de prueba exitoso! Redirigiendo a /tabs...");
      
      // ¡Éxito! Navegamos a las pestañas
      router.replace('/(tabs)');
      
      // No necesitamos setLoading(false) porque la pantalla va a desaparecer
    } else {
      // Usuario o contraseña incorrectos
      Alert.alert(
        'Error de Prueba',
        'Credenciales incorrectas. Usa admint@mail.com y 1234.'
      );
      setLoading(false); // Permitimos que vuelva a intentarlo
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        Iniciar Sesión (Modo Prueba)
      </Text>
      <TextInput
        placeholder="Correo (admint@mail.com)" // Hint
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10 }}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña (1234)" // Hint
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20 }}
      />
      
      {/* Mostramos el 'spinner' o el botón */}
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" style={{ marginVertical: 10 }}/>
      ) : (
        <Button title="Iniciar sesión (Prueba)" onPress={handleLogin} />
      )}

      <Text
        style={{ textAlign: 'center', marginTop: 15, color: '#007bff' }}
        onPress={() => router.push('/(auth)/signup')}
      >
        ¿No tienes cuenta? Regístrate
      </Text>
    </View>
  );
}
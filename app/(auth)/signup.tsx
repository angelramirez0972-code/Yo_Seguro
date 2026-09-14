import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { supabase } from '../../lib/supabaseClient';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) Alert.alert('Error', error.message);
    else {
      Alert.alert('Éxito', 'Verifica tu correo electrónico para activar tu cuenta');
      router.replace('/(auth)/login');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
        Crear cuenta
      </Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginBottom: 20 }}
      />
      <Button title="Registrarse" onPress={handleSignup} />
      <Text
        style={{ textAlign: 'center', marginTop: 15, color: '#007bff' }}
        onPress={() => router.push('/(auth)/login')}
      >
        ¿Ya tienes cuenta? Inicia sesión
      </Text>
    </View>
  );
}

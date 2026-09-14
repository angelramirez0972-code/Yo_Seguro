// lib/supabaseClient.ts

import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 1. IMPORTANTE: NO importamos 'SupabaseClient' aquí
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';

// Lee las variables de entorno estándar de Expo
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Faltan variables de entorno en .env (EXPO_PUBLIC_SUPABASE_URL o EXPO_PUBLIC_SUPABASE_ANON_KEY)");
}

// 2. IMPORTANTE: NO hay ': SupabaseClient' aquí.
// Dejamos que TypeScript infiera el tipo automáticamente.
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      // Usar AsyncStorage SÓLO en 'ios' o 'android'.
      storage: (Platform.OS === 'ios' || Platform.OS === 'android') ? AsyncStorage : undefined,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
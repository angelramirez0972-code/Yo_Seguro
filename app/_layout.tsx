// app/_layout.tsx (RAÍZ - MODO MÍNIMO)
// Esta es la versión más simple posible.
// No contiene lógica de Supabase, ni redirecciones, ni hooks.
// Su único trabajo es renderizar la pantalla que Expo Router
// decida que es la de inicio (app/(auth)/login.tsx).

import { Slot } from "expo-router";

export default function RootLayout() {
  console.log("--- MODO MÍNIMO: Renderizando <Slot /> ---");
  
  // Renderizamos el <Slot /> inmediatamente.
  // Esto le pasa el control a la siguiente ruta (tus pestañas o auth).
  return <Slot />;
}
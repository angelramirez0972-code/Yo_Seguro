import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabaseClient";

export default function SettingsScreen() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [emergencyAlerts, setEmergencyAlerts] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [anonymousReports, setAnonymousReports] = useState(false);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configuración</Text>
        <Text style={styles.headerSubtitle}>Personaliza tu experiencia</Text>
      </View>

      {/* Profile Section */}
      <Card style={styles.card}>
        <View style={styles.profileRow}>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Juan Pérez</Text>
            <Text style={styles.profileEmail}>juan.perez@email.com</Text>
            <Text style={styles.profileDate}>Miembro desde Enero 2024</Text>
          </View>
        </View>
        <Button label="Editar Perfil" variant="outline" style={{ marginTop: 8 }} />
      </Card>

      {/* Notifications */}
      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Notificaciones</Text>

        <View style={styles.row}>
          <View style={styles.textGroup}>
            <Text style={styles.label}>Notificaciones Push</Text>
            <Text style={styles.helper}>Recibe alertas de incidentes cercanos</Text>
          </View>
          <Switch value={pushNotifications} onValueChange={setPushNotifications} />
        </View>

        <View style={styles.row}>
          <View style={styles.textGroup}>
            <Text style={styles.label}>Notificaciones por Email</Text>
            <Text style={styles.helper}>Resumen semanal de actividad</Text>
          </View>
          <Switch value={emailNotifications} onValueChange={setEmailNotifications} />
        </View>

        <View style={styles.row}>
          <View style={styles.textGroup}>
            <Text style={styles.label}>Alertas de Emergencia</Text>
            <Text style={styles.helper}>Incidentes de alta prioridad únicamente</Text>
          </View>
          <Switch value={emergencyAlerts} onValueChange={setEmergencyAlerts} />
        </View>
      </Card>

      {/* Privacy */}
      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Privacidad</Text>

        <View style={styles.row}>
          <View style={styles.textGroup}>
            <Text style={styles.label}>Compartir Ubicación</Text>
            <Text style={styles.helper}>Permite mostrar tu ubicación en reportes</Text>
          </View>
          <Switch value={locationSharing} onValueChange={setLocationSharing} />
        </View>

        <View style={styles.row}>
          <View style={styles.textGroup}>
            <Text style={styles.label}>Reportes Anónimos</Text>
            <Text style={styles.helper}>Ocultar tu nombre en los reportes públicos</Text>
          </View>
          <Switch value={anonymousReports} onValueChange={setAnonymousReports} />
        </View>
      </Card>

      {/* App Settings */}
      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Aplicación</Text>

        <Button label="Ayuda y Soporte" variant="ghost" style={styles.appBtn} />
        <Button label="Términos y Condiciones" variant="ghost" style={styles.appBtn} />
        <Button label="Política de Privacidad" variant="ghost" style={styles.appBtn} />
        <Button label="Acerca de la App" variant="ghost" style={styles.appBtn} />
      </Card>

      {/* Logout */}
      <View style={{ marginTop: 16 }}>
        <Button
          label="Cerrar Sesión"
          variant="solid"
          style={{ backgroundColor: "red" }}
          onPress={async () => {
          await supabase.auth.signOut();
          router.replace("/(auth)/login"); // ✅ Te saca directo al login, SIN volver atrás
        }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { alignItems: "center", paddingVertical: 16 },
  headerTitle: { fontSize: 22, fontWeight: "bold", marginBottom: 4 },
  headerSubtitle: { fontSize: 14, color: "#666" },

  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 16,
    elevation: 2,
  },

  profileRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  avatar: { width: 64, height: 64, borderRadius: 32, marginRight: 12 },
  profileInfo: { flex: 1 },
  profileName: { fontWeight: "bold", fontSize: 16 },
  profileEmail: { fontSize: 14, color: "#666" },
  profileDate: { fontSize: 12, color: "#999" },

  sectionTitle: { fontWeight: "bold", fontSize: 16, marginBottom: 12 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  textGroup: { flex: 1, paddingRight: 8 },
  label: { fontWeight: "600", fontSize: 14 },
  helper: { fontSize: 12, color: "#666" },

  appBtn: { marginBottom: 8, alignItems: "flex-start" },
});


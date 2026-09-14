import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

type Incident = {
  id: number
  type: string
  severity: "high" | "medium" | "low"
  time: string
  lat: number
  lng: number
}

export default function HomeScreen() {
  const incidents: Incident[] = [
    { id: 1, type: "Bache", severity: "medium", time: "2h", lat: 19.4326, lng: -99.1332 },
    { id: 2, type: "Robo", severity: "high", time: "30min", lat: 19.43, lng: -99.135 },
    { id: 3, type: "Alumbrado", severity: "low", time: "1h", lat: 19.435, lng: -99.13 },
    { id: 4, type: "Basura", severity: "medium", time: "45min", lat: 19.428, lng: -99.138 },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return styles.high
      case "medium":
        return styles.medium
      case "low":
        return styles.low
      default:
        return styles.default
    }
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Mi Vecindario</Text>
        <Text style={styles.subtitle}>Reporta y mantente informado</Text>
      </View>

      {/* Quick Report Button */}
      <TouchableOpacity style={styles.reportButton}>
        <Text style={styles.reportButtonText}>+ Reportar Incidente</Text>
      </TouchableOpacity>

      {/* Map Placeholder */}
      <View style={styles.mapCard}>
        <Text style={styles.mapText}>🗺️ Mapa Interactivo</Text>
        <Text style={styles.mapSubText}>Toca para ver incidentes cercanos</Text>

        {/* Incident Markers (simulados en posiciones absolutas) */}
        {incidents.map((incident, index) => (
          <View
            key={incident.id}
            style={[
              styles.marker,
              getSeverityColor(incident.severity),
              {
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`,
              },
            ]}
          />
        ))}
      </View>

      {/* Recent Incidents */}
      <View>
        <Text style={styles.sectionTitle}>Incidentes Recientes</Text>
        {incidents.slice(0, 3).map((incident) => (
          <View key={incident.id} style={styles.incidentCard}>
            <View style={styles.incidentRow}>
              <View style={styles.incidentInfo}>
                <View style={[styles.incidentDot, getSeverityColor(incident.severity)]} />
                <View>
                  <Text style={styles.incidentType}>{incident.type}</Text>
                  <Text style={styles.incidentTime}>Hace {incident.time}</Text>
                </View>
              </View>
              <Text style={styles.badge}>
                {incident.severity === "high"
                  ? "Urgente"
                  : incident.severity === "medium"
                  ? "Moderado"
                  : "Leve"}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Reportes este mes</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Resueltos</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { alignItems: "center", paddingVertical: 16 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 4, color: "#111" },
  subtitle: { fontSize: 14, color: "#666" },
  reportButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  reportButtonText: { fontSize: 16, color: "#fff", fontWeight: "600" },
  mapCard: {
    height: 200,
    backgroundColor: "#E5E7EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },
  mapText: { fontSize: 16, fontWeight: "600", color: "#444" },
  mapSubText: { fontSize: 12, color: "#666" },
  marker: {
    position: "absolute",
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#fff",
  },
  sectionTitle: { fontSize: 18, fontWeight: "600", marginBottom: 8, color: "#111" },
  incidentCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  incidentRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  incidentInfo: { flexDirection: "row", alignItems: "center", gap: 8 },
  incidentDot: { width: 12, height: 12, borderRadius: 6, marginRight: 8 },
  incidentType: { fontWeight: "600", color: "#111" },
  incidentTime: { fontSize: 12, color: "#666" },
  badge: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 8,
    color: "#111",
  },
  statsRow: { flexDirection: "row", justifyContent: "space-between", marginTop: 16 },
  statCard: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: "center",
  },
  statNumber: { fontSize: 20, fontWeight: "bold", color: "#007AFF" },
  statLabel: { fontSize: 12, color: "#666" },

  // Colores según severidad
  high: { backgroundColor: "#EF4444" }, // rojo
  medium: { backgroundColor: "#F59E0B" }, // amarillo
  low: { backgroundColor: "#10B981" }, // verde
  default: { backgroundColor: "#9CA3AF" }, // gris
})

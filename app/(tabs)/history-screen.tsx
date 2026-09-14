import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HistoryScreen() {
  const reports = [
    {
      id: 1,
      category: "Seguridad",
      description: "Robo en la esquina de Reforma y Juárez",
      date: "2024-01-15",
      status: "resolved",
      priority: "high",
      icon: "🚨",
    },
    {
      id: 2,
      category: "Infraestructura",
      description: "Bache grande en Av. Universidad",
      date: "2024-01-14",
      status: "in-progress",
      priority: "medium",
      icon: "🚧",
    },
    {
      id: 3,
      category: "Servicios",
      description: "Falta de alumbrado público en Parque Central",
      date: "2024-01-12",
      status: "pending",
      priority: "medium",
      icon: "💡",
    },
    {
      id: 4,
      category: "Medio Ambiente",
      description: "Acumulación de basura en contenedores",
      date: "2024-01-10",
      status: "resolved",
      priority: "low",
      icon: "🌱",
    },
    {
      id: 5,
      category: "Tráfico",
      description: "Semáforo descompuesto en cruce principal",
      date: "2024-01-08",
      status: "resolved",
      priority: "high",
      icon: "🚗",
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case "resolved":
        return "Resuelto";
      case "in-progress":
        return "En Proceso";
      case "pending":
        return "Pendiente";
      default:
        return "Desconocido";
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Mis Reportes</Text>
        <Text style={styles.subtitle}>Historial de incidentes reportados</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.card}>
          <Text style={styles.statNumber}>{reports.length}</Text>
          <Text style={styles.statLabel}>Total</Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.statNumber, { color: "green" }]}>
            {reports.filter((r) => r.status === "resolved").length}
          </Text>
          <Text style={styles.statLabel}>Resueltos</Text>
        </View>
        <View style={styles.card}>
          <Text style={[styles.statNumber, { color: "orange" }]}>
            {reports.filter((r) => r.status === "in-progress").length}
          </Text>
          <Text style={styles.statLabel}>En Proceso</Text>
        </View>
      </View>

      {/* Reports */}
      {reports.map((report) => (
        <View key={report.id} style={styles.reportCard}>
          <Text style={styles.icon}>{report.icon}</Text>
          <View style={styles.reportContent}>
            <View style={styles.rowBetween}>
              <Text style={styles.category}>{report.category}</Text>
              <Badge color={report.priority === "high" ? "#dc2626" : report.priority === "medium" ? "#f59e0b" : "#10b981"}>
                {report.priority === "high"
                  ? "Alta"
                  : report.priority === "medium"
                  ? "Media"
                  : "Baja"}
              </Badge>
            </View>

            <Text style={styles.description}>{report.description}</Text>

            <View style={styles.rowBetween}>
              <Text style={styles.date}>
                {getStatusText(report.status)} •{" "}
                {new Date(report.date).toLocaleDateString("es-ES")}
              </Text>
              <Button
                label="Ver Detalles"
                variant="ghost"
                onPress={() => console.log("Detalles de", report.id)}
              />
            </View>
          </View>
        </View>
      ))}

      {/* Load more */}
      <View style={{ marginVertical: 20 }}>
        <Button label="Cargar Más Reportes" variant="outline" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#6b7280",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    alignItems: "center",
  },
  statNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
  },
  reportCard: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#f9fafb",
    borderRadius: 8,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  reportContent: {
    flex: 1,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  category: {
    fontWeight: "600",
    fontSize: 14,
  },
  description: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
  },
});

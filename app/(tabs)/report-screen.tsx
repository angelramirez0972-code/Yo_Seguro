import React, { useState } from "react"
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from "react-native"

export default function ReportScreen() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")

  const categories = [
    { id: "security", name: "Seguridad", icon: "🚨" },
    { id: "infrastructure", name: "Infraestructura", icon: "🚧" },
    { id: "environment", name: "Medio Ambiente", icon: "🌱" },
    { id: "traffic", name: "Tráfico", icon: "🚗" },
    { id: "utilities", name: "Servicios", icon: "💡" },
    { id: "other", name: "Otro", icon: "📝" },
  ]

  const handleSubmit = () => {
    console.log("Reporte enviado:", { selectedCategory, description, location })
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Reportar Incidente</Text>
        <Text style={styles.subtitle}>Ayuda a mejorar tu comunidad</Text>
      </View>

      {/* Categoría */}
      <Text style={styles.label}>Categoría del Incidente</Text>
      <View style={styles.categoriesGrid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryCard,
              selectedCategory === category.id && styles.categorySelected,
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Descripción */}
      <Text style={styles.label}>Descripción del Incidente</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Describe detalladamente lo que observaste..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Ubicación */}
      <Text style={styles.label}>Ubicación</Text>
      <TextInput
        style={styles.input}
        placeholder="Dirección o referencia del lugar"
        value={location}
        onChangeText={setLocation}
      />
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryButtonText}>📍 Usar Mi Ubicación Actual</Text>
      </TouchableOpacity>

      {/* Evidencia fotográfica */}
      <Text style={styles.label}>Evidencia Fotográfica (Opcional)</Text>
      <TouchableOpacity style={styles.uploadBox}>
        <Text style={styles.uploadText}>📷 Toca para agregar fotos</Text>
      </TouchableOpacity>

      {/* Nivel de prioridad */}
      <Text style={styles.label}>Nivel de Prioridad</Text>
      <View style={styles.priorityRow}>
        {[
          { level: "low", name: "Baja", color: "#10B981" },
          { level: "medium", name: "Media", color: "#F59E0B" },
          { level: "high", name: "Alta", color: "#EF4444" },
        ].map((priority) => (
          <TouchableOpacity
            key={priority.level}
            style={[styles.priorityButton, { backgroundColor: priority.color }]}
          >
            <Text style={styles.priorityText}>{priority.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Submit */}
      <TouchableOpacity
        style={[
          styles.submitButton,
          (!selectedCategory || !description) && styles.disabledButton,
        ]}
        onPress={handleSubmit}
        disabled={!selectedCategory || !description}
      >
        <Text style={styles.submitText}>Enviar Reporte</Text>
      </TouchableOpacity>
      <Text style={styles.disclaimer}>
        Tu reporte será revisado y publicado en el mapa
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { alignItems: "center", marginBottom: 16 },
  title: { fontSize: 22, fontWeight: "bold", color: "#111" },
  subtitle: { fontSize: 14, color: "#666" },
  label: { fontSize: 16, fontWeight: "600", marginBottom: 8, color: "#111" },
  categoriesGrid: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  categoryCard: {
    width: "47%",
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  categorySelected: { borderColor: "#007AFF", backgroundColor: "#E0F2FE" },
  categoryIcon: { fontSize: 24, marginBottom: 6 },
  categoryText: { fontSize: 14, fontWeight: "500" },
  textarea: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    marginBottom: 16,
    textAlignVertical: "top",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  secondaryButtonText: { color: "#007AFF", fontWeight: "600" },
  uploadBox: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  uploadText: { fontSize: 14, color: "#666" },
  priorityRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  priorityButton: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  priorityText: { color: "#fff", fontWeight: "600" },
  submitButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#A1A1AA" },
  submitText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  disclaimer: { fontSize: 12, textAlign: "center", color: "#666", marginTop: 8 },
})

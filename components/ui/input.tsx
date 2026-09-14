import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

export const Input: React.FC<TextInputProps> = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} placeholderTextColor="#9CA3AF" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: "#111827",
    backgroundColor: "#fff",
  },
});

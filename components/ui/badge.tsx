import React from "react";
import { View, Text, StyleSheet, ViewProps } from "react-native";

type BadgeProps = ViewProps & {
  color?: string;
  children: React.ReactNode;
};

export const Badge: React.FC<BadgeProps> = ({ color = "#2563EB", style, children, ...props }) => {
  return (
    <View style={[styles.badge, { backgroundColor: color }, style]} {...props}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9999,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
});

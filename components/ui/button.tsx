import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = TouchableOpacityProps & {
  label: string;
  variant?: "solid" | "outline" | "ghost";
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = "solid",
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.base,
        variant === "solid" && styles.solid,
        variant === "outline" && styles.outline,
        variant === "ghost" && styles.ghost,
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          styles.text,
          variant === "outline" && { color: "#2563EB" },
          variant === "ghost" && { color: "#2563EB" },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  solid: {
    backgroundColor: "#2563EB", // azul
  },
  outline: {
    borderWidth: 1,
    borderColor: "#2563EB",
    backgroundColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});

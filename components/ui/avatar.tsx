import React from "react";
import { Image, StyleSheet } from "react-native";

export const Avatar = ({ size = 64 }: { size?: number }) => {
  return (
    <Image
      source={require("./diverse-user-avatars.png")}
      style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}
    />
  );
};

export const AvatarImage = Avatar;

export const AvatarFallback = () => null; // No hace falta porque ya tienes imagen

const styles = StyleSheet.create({
  avatar: {
    resizeMode: "cover",
  },
});

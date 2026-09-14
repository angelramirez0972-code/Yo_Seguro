import React from "react";
import { Switch as RNSwitch, SwitchProps } from "react-native";

export const Switch: React.FC<SwitchProps> = (props) => {
  return <RNSwitch {...props} />;
};

import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const FlujoVecinoText = () => {
  return <Text style={styles.flujoVecino}>Flujo Vecino</Text>;
};

const styles = StyleSheet.create({
  flujoVecino: {
    fontSize: 78,
    letterSpacing: -1.6,
    lineHeight: 101,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    color: Color.neutral50,
    textAlign: "center",
    width: 1470,
    height: 58,
  },
});

export default FlujoVecinoText;

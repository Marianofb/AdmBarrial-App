import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Buttons = () => {
  return (
    <View style={styles.buttons}>
      <View style={styles.iconsPlus}>
        <View style={styles.path} />
        <Image
          style={styles.shapeIcon}
          resizeMode="cover"
          source={require("../assets/shape.png")}
        />
      </View>
      <Text style={styles.text}>Apply</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  path: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  shapeIcon: {
    height: "75.11%",
    width: "74.9%",
    top: "12.44%",
    right: "12.75%",
    bottom: "12.44%",
    left: "12.35%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  iconsPlus: {
    height: "41.67%",
    width: "19.61%",
    top: "29.07%",
    right: "48.98%",
    bottom: "29.26%",
    left: "31.41%",
    display: "none",
    position: "absolute",
  },
  text: {
    marginTop: -12,
    marginLeft: -23,
    top: "50%",
    left: "50%",
    fontSize: FontSize.bold1524_size,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.tittle2228,
    color: Color.neutral100,
    textAlign: "center",
    position: "absolute",
  },
  buttons: {
    top: 716,
    left: 169,
    borderRadius: Border.br_base,
    backgroundColor: Color.neutral800,
    width: 128,
    height: 54,
    position: "absolute",
  },
});

export default Buttons;

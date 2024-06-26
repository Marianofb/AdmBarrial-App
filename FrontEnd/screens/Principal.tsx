import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const Principal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.principal}>
      <Image
        style={[styles.principalChild, styles.iosPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-1025.png")}
      />
      <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
        <View style={styles.rectangle} />
        <View style={[styles.rectangle1, styles.rectangle1Bg]} />
        <View style={[styles.rectangle1, styles.rectangle1Bg]} />
      </View>
      <LinearGradient
        style={[styles.principalItem, styles.principalItemPosition]}
        locations={[0.19, 1]}
        colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.miBarrio}>Mi Barrio</Text>
          <Text style={styles.subtitle}>Cada vez mas conectados.</Text>
        </View>
        <Pressable
          style={styles.inputs}
          onPress={() => navigation.navigate("InicioDeSesion")}
        >
          <View style={[styles.button, styles.buttonFlexBox]}>
            <Text style={[styles.cta, styles.ctaTypo]}>Empezar</Text>
          </View>
        </Pressable>
      </View>
      
      <View style={[styles.ios1, styles.iosPosition]}>
        <View style={[styles.homeIndicator, styles.rectangle1Bg]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iosPosition: {
    left: 0,
    width: 375,
    position: "absolute",
  },
  buttonFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  rectangle1Bg: {
    backgroundColor: Color.colorWhite1,
    borderRadius: Border.br_81xl,
  },
  principalItemPosition: {
    left: "50%",
    position: "absolute",
  },
  ctaTypo: {
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
  },
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  principalChild: {
    width: 375,
    top: 0,
    left: 0,
    height: 812,
  },
  rectangle: {
    width: 32,
    height: 8,
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_81xl,
  },
  rectangle1: {
    width: 8,
    height: 8,
  },
  autoLayoutHorizontal: {
    marginLeft: -171.5,
    top: 64,
    width: 60,
    justifyContent: "space-between",
    left: "50%",
    position: "absolute",
  },
  principalItem: {
    marginLeft: 187.5,
    top: 812,
    height: 499,
    transform: [
      {
        rotate: "-180deg",
      },
    ],
    backgroundColor: "transparent",
    width: 375,
  },
  miBarrio: {
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    width: 343,
    textAlign: "center",
    color: Color.colorWhite1,
  },
  subtitle: {
    fontSize: FontSize.body1422_size,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    marginTop: 8,
    letterSpacing: 0,
    width: 343,
    textAlign: "center",
    color: Color.colorWhite1,
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.colorWhite1,
    fontWeight: "600",
  },
  button: {
    borderRadius: Border.br_base,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    width: 343,
    backgroundColor: Color.colorBlack,
  },
  inputs: {
    marginTop: 16,
    flexDirection: "row",
  },
  frameParent: {
    top: 545,
    left: 17,
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    right: "0%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    position: "absolute",
    overflow: "hidden",
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    position: "absolute",
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    top: "50%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorBlack,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  ios: {
    height: 44,
    width: 375,
    top: 0,
    left: 0,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  ios1: {
    top: 778,
    height: 34,
    width: 375,
  },
  principal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Principal;

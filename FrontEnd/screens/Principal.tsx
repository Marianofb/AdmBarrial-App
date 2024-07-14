import React, { useState, useEffect } from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

import * as Network from 'expo-network';

const Principal = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [networkType, setNetworkType] = useState<string | null>(null);

  useEffect(() => {
    const controlWIFI = async () => {
      const networkState = await Network.getNetworkStateAsync();
      const { type } = networkState;

      console.log("Tipo de conexión: ", type);

      if (type === Network.NetworkStateType.WIFI) {
        setNetworkType("WiFi");
      } else if (type === Network.NetworkStateType.CELLULAR) {
        setNetworkType("4G");
      } else {
        setNetworkType("No conectado");
      }
    };

    //const intervalId = setInterval(controlWIFI, 3000);
    //return () => clearInterval(intervalId);
    
    controlWIFI()
  }, []);

  return (
    <View style={styles.principal}>
      <Image
        style={styles.principalChild}
        contentFit="cover"
        source={require("../assets/rectangle-1025.png")}
      />
      <View style={styles.autoLayoutHorizontal}>
        <View style={styles.rectangle} />
        <View style={styles.rectangle1} />
        <View style={styles.rectangle1} />
      </View>
      <LinearGradient
        style={styles.principalItem}
        locations={[0.19, 1]}
        colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0)"]}
      />
      <View style={styles.frameParent}>
        <View>
          <Text style={styles.miBarrio}>Mi Barrio</Text>
          <Text style={styles.subtitle}>Cada vez más conectados.</Text>
        </View>
        <Pressable
          style={styles.inputs}
          onPress={() => navigation.navigate("InicioDeSesion")}
        >
          <View style={styles.button}>
            <Text style={styles.cta}>Empezar</Text>
          </View>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Asegura que los hijos con posición absoluta se posicionen dentro de esta vista
  },
  principalChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  autoLayoutHorizontal: {
    position: "absolute",
    top: 64,
    left: "50%",
    width: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: -30, // Para centrar
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
    backgroundColor: Color.colorWhite1,
    borderRadius: Border.br_81xl,
  },
  principalItem: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transform: [{ rotate: "-180deg" }],
  },
  frameParent: {
    position: "absolute",
    top: "67%",
    left: "5%",
    right: "5%",
    alignItems: "center",
  },
  miBarrio: {
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    textAlign: "center",
    color: Color.colorWhite1,
  },
  subtitle: {
    fontSize: FontSize.body1422_size,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    marginTop: 8,
    textAlign: "center",
    color: Color.colorWhite1,
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.colorWhite1,
    fontWeight: "600",
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_base,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    width: "100%",
    backgroundColor: Color.colorBlack,
    alignItems: "center",
  },
  inputs: {
    marginTop: 16,
    flexDirection: "row",
    width: "100%",
  },
  ios1: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
    alignItems: "center",
  },
  homeIndicator: {
    width: 134,
    height: 5,
    backgroundColor: Color.colorWhite1,
    borderRadius: Border.br_81xl,
  },
});

export default Principal;

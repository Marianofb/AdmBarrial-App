import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import Inputs from "@/components/Inputs";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "@/GlobalStyles";

//INICIO DE SESION
const InicioDeSesin1 = () =>{
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.inicioDeSesin}>
      <View style={[styles.ios, styles.iosPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.timePosition]} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("@/assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("@/assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("@/assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.ctaTypo]}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.iniciarSesin, styles.titleTypo]}>
        Iniciar sesión
      </Text>
      <View style={[styles.inicioDeSesinInner, styles.sesinPosition]}>
        <View>
          <View style={styles.frameContainer}>
            <View>
              <Inputs
                eye={require("@/assets/eye1.png")}
                placeholder="Documento"
                eye1={require("@/assets/eye1.png")}
                showEyeIcon={false}
              />
              <Inputs
                eye={require("@/assets/eye2.png")}
                placeholder="Contraseña"
                eye1={require("@/assets/eye2.png")}
                showEyeIcon
                propMarginTop={24}
              />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.inputs}
        onPress={() => navigation.navigate("MenuPrincipal")}
      >
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaTypo]}>Iniciar sesión</Text>
        </View>
      </Pressable>
      <Text style={[styles.title, styles.titleFlexBox]}>¡Bienvenido!</Text>
      <View style={[styles.ios1, styles.iosPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Text style={[styles.noTieneCuentaContainer, styles.titleFlexBox]}>
        <Text style={styles.noTieneCuentaRegistrarse}>
          <Text style={styles.noTieneCuenta}>¿No tiene cuenta?</Text>
          <Text style={[styles.registrarse, styles.timeLayout]}>
            {" "}
            Registrarse
          </Text>
        </Text>
      </Text>
      <Pressable
        style={styles.cambiarContrasea}
        onPress={() => navigation.navigate("CambiarContrasea")}
      >
        <Text style={styles.text}>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.cambiar}>Cambiar</Text>
          <Text style={styles.text1}>{` `}</Text>
          <Text style={styles.cambiar}>contraseña</Text>
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iosPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  timePosition: {
    left: "0%",
    position: "absolute",
  },
  ctaTypo: {
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0,
  },
  titleTypo: {
    fontFamily: FontFamily.headingsH3,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.headingsH3_size,
    color: Color.neutral900,
  },
  sesinPosition: {
    marginLeft: -171.5,
    left: "50%",
    position: "absolute",
  },
  titleFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 20,
    color: Color.neutral900,
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral900,
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
    backgroundColor: Color.neutral900,
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
    fontSize: FontSize.bold1524_size,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    color: Color.neutral900,
    lineHeight: 20,
    top: "50%",
    left: "0%",
    position: "absolute",
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
    top: 0,
    height: 44,
  },
  iniciarSesin: {
    top: 126,
    left: "50%",
    marginLeft: -171.5,
    position: "absolute",
    textAlign: "center",
  },
  frameContainer: {
    alignItems: "flex-end",
  },
  inicioDeSesinInner: {
    marginTop: -155.5,
    alignItems: "center",
    left: "50%",
    top: "50%",
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.neutral50,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_base,
    width: 343,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  inputs: {
    top: 464,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  title: {
    width: "87.2%",
    top: "8.25%",
    left: "4.27%",
    fontFamily: FontFamily.headingsH3,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.headingsH3_size,
    color: Color.neutral900,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    left: "50%",
    backgroundColor: Color.neutral900,
    position: "absolute",
  },
  ios1: {
    top: 778,
    height: 34,
  },
  noTieneCuenta: {
    color: Color.colorDarkgray,
    letterSpacing: 0,
  },
  registrarse: {
    color: Color.neutral900,
  },
  noTieneCuentaRegistrarse: {
    fontFamily: FontFamily.bodyMediumRegular,
  },
  noTieneCuentaContainer: {
    marginLeft: -99.5,
    top: 557,
    fontSize: FontSize.bodyMediumRegular_size,
    left: "50%",
  },
  text1: {
    color: Color.colorDarkgray,
  },
  cambiar: {
    color: Color.neutral900,
  },
  text: {
    marginLeft: -71.5,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.bodyMediumRegular_size,
    textAlign: "center",
    letterSpacing: 0,
  },
  cambiarContrasea: {
    top: 413,
    left: "50%",
    position: "absolute",
  },
  inicioDeSesin: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral50,
  },
});

export default InicioDeSesin1;


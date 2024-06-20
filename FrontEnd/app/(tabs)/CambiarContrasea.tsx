import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, Padding, FontSize, FontFamily } from "@/GlobalStyles";

const CambiarContrasea = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cambiarContrasea}>
      <View style={[styles.ios, styles.iosPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderBorder]} />
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
      <View style={[styles.cambiarContraseaInner, styles.wishlistPosition]}>
        <View>
          <View style={[styles.frameChild, styles.buttonLayout]} />
        </View>
      </View>
      <View style={[styles.inputsWrapper, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsLayout]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/eye1.png")}
            />
            <Text style={styles.placeholder}>Nueva contraseña</Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye1.png")}
          />
        </View>
      </View>
      <View style={[styles.inputsContainer, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsLayout]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/eye1.png")}
            />
            <Text style={styles.placeholder}>Contraseña actual</Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye1.png")}
          />
        </View>
      </View>
      <View style={[styles.inputsFrame, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsLayout]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/eye1.png")}
            />
            <Text style={styles.placeholder}>Repita la nueva contraseña</Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye1.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.inputs3}
        onPress={() => navigation.navigate("CambiarContrasea1")}
      >
        <View style={[styles.button, styles.inputsLayout]}>
          <Text style={[styles.cta, styles.ctaTypo]}>Cambiar contraseña</Text>
        </View>
      </Pressable>
      <Text style={[styles.title, styles.timeClr]}>Modificar contraseña</Text>
      <View style={[styles.ios1, styles.iosPosition]}>
        <View style={[styles.homeIndicator, styles.wishlistPosition]} />
      </View>
      <Pressable
        style={[styles.wishlist, styles.wishlistPosition]}
        onPress={() => navigation.navigate("InicioDeSesin")}
      >
        <View style={styles.icons}>
          <View style={styles.cart}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/home.png")}
            />
          </View>
          <View style={[styles.home, styles.homeSpaceBlock]}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/heart.png")}
            />
          </View>
          <View style={[styles.account, styles.homeSpaceBlock]}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/user.png")}
            />
          </View>
        </View>
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
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  ctaTypo: {
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  wishlistPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonLayout: {
    height: 56,
    width: 343,
  },
  inputsPosition: {
    left: 21,
    position: "absolute",
  },
  inputsLayout: {
    borderRadius: Border.br_base,
    flexDirection: "row",
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
  },
  timeClr: {
    color: Color.neutral900,
    position: "absolute",
  },
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.neutral900,
    opacity: 0.35,
    left: "0%",
    position: "absolute",
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
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.neutral900,
    position: "absolute",
    top: "50%",
    left: "0%",
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
  frameChild: {
    alignItems: "flex-end",
  },
  cambiarContraseaInner: {
    marginTop: -87,
    marginLeft: -171.5,
    alignItems: "center",
    top: "50%",
  },
  eyeIcon: {
    display: "none",
  },
  placeholder: {
    fontSize: FontSize.bodyMediumRegular_size,
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.neutral600,
    textAlign: "justify",
    marginLeft: 8,
    letterSpacing: 0,
  },
  eyeParent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs: {
    borderColor: Color.colorGainsboro,
    width: 344,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.neutral50,
  },
  inputsWrapper: {
    top: 256,
  },
  inputsContainer: {
    top: 170,
  },
  inputsFrame: {
    top: 347,
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.neutral50,
  },
  button: {
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
    height: 56,
    width: 343,
    alignItems: "center",
    backgroundColor: Color.neutral900,
  },
  inputs3: {
    top: 464,
    left: 16,
    flexDirection: "row",
    position: "absolute",
  },
  title: {
    width: "87.2%",
    top: "8.25%",
    left: "4.27%",
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    textAlign: "left",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.neutral900,
  },
  ios1: {
    top: 778,
    height: 34,
  },
  cart: {
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  home: {
    borderRadius: Border.br_xl,
    display: "none",
    backgroundColor: Color.neutral50,
  },
  account: {
    width: 36,
    height: 36,
  },
  icons: {
    flexDirection: "row",
  },
  wishlist: {
    marginLeft: -28.5,
    top: 647,
    borderRadius: Border.br_16xl,
    width: 68,
    height: 65,
    padding: Padding.p_base,
    backgroundColor: Color.neutral900,
  },
  cambiarContrasea: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral50,
  },
});

export default CambiarContrasea;

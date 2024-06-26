import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const CambiarContrasea1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cambiarContrasea}>
      <View style={[styles.ios, styles.iosPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.ctaTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.cambiarContraseaInner, styles.wishlistPosition]}>
        <View>
          <View style={styles.frameChild} />
        </View>
      </View>
      <View style={[styles.inputsWrapper, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Nueva contraseña
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
      <View style={[styles.inputsContainer, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Contraseña actual
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
      <View style={[styles.inputsFrame, styles.inputsPosition]}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              contentFit="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Repita la nueva contraseña
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            contentFit="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
      <View style={[styles.inputs3, styles.inputs3Position]}>
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaClr]}>Cambiar contraseña</Text>
        </View>
      </View>
      <Text style={styles.title}>Modificar contraseña</Text>
      <View style={[styles.ios1, styles.iosPosition]}>
        <View style={[styles.homeIndicator, styles.wishlistPosition]} />
      </View>
      <View style={[styles.wishlist, styles.wishlistLayout1]}>
        <View style={styles.icons}>
          <View style={styles.cart}>
            <Image
              style={styles.eyeIconLayout}
              contentFit="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <View style={[styles.home, styles.homeSpaceBlock]}>
            <Image
              style={styles.eyeIconLayout}
              contentFit="cover"
              source={require("../assets/heart.png")}
            />
          </View>
          <View style={[styles.account, styles.homeSpaceBlock]}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              contentFit="cover"
              source={require("../assets/user.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.inputsParent}>
        <View style={[styles.inputs4, styles.inputsBorder]}>
          <View style={styles.eyeParent}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              contentFit="cover"
              source={require("../assets/eye1.png")}
            />
            <Text style={[styles.placeholder3, styles.placeholderTypo]} />
          </View>
          <Image
            style={[styles.eyeIcon7, styles.eyeIconLayout]}
            contentFit="cover"
            source={require("../assets/eye1.png")}
          />
        </View>
        <Image
          style={[styles.closeIcon, styles.aceptarLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
        <View style={[styles.wishlistParent, styles.wishlistLayout]}>
          <Pressable
            style={[styles.wishlist1, styles.wishlistLayout]}
            onPress={() => navigation.navigate("InicioDeSesin")}
          >
            <View style={styles.icons1}>
              <View style={styles.cart}>
                <Image
                  style={styles.eyeIconLayout}
                  contentFit="cover"
                  source={require("../assets/home.png")}
                />
              </View>
              <View style={[styles.home, styles.homeSpaceBlock]}>
                <Image
                  style={styles.eyeIconLayout}
                  contentFit="cover"
                  source={require("../assets/heart.png")}
                />
              </View>
              <View style={[styles.account, styles.homeSpaceBlock]}>
                <Image
                  style={[styles.eyeIcon, styles.eyeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/user.png")}
                />
              </View>
            </View>
          </Pressable>
          <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
        </View>
        <Text
          style={[styles.cambiosGuardadosCon, styles.inputs3Position]}
        >{`Cambios guardados con éxito, presione 
aceptar para avanzar.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iosPosition: {
    width: 375,
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite1,
  },
  ctaTypo: {
    textAlign: "center",
    fontWeight: "600",
  },
  wishlistPosition: {
    left: "50%",
    position: "absolute",
  },
  inputsPosition: {
    left: 21,
    position: "absolute",
  },
  inputsBorder: {
    padding: Padding.p_base,
    flexDirection: "row",
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite1,
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
  },
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
  },
  inputs3Position: {
    left: 16,
    position: "absolute",
  },
  ctaClr: {
    color: Color.colorWhite1,
    letterSpacing: 0,
  },
  wishlistLayout1: {
    borderRadius: Border.br_16xl,
    padding: Padding.p_base,
    backgroundColor: Color.colorBlack,
  },
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  aceptarLayout: {
    height: 30,
    position: "absolute",
  },
  wishlistLayout: {
    height: 53,
    width: 127,
    left: "50%",
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderColor: Color.colorBlack,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
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
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.colorBlack,
    letterSpacing: 0,
    fontWeight: "600",
    fontSize: FontSize.sFSubheadlineSemibold_size,
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
    height: 44,
    top: 0,
  },
  frameChild: {
    alignItems: "flex-end",
    height: 56,
    width: 343,
  },
  cambiarContraseaInner: {
    marginTop: -87,
    marginLeft: -171.5,
    alignItems: "center",
    top: "50%",
    left: "50%",
  },
  eyeIcon: {
    display: "none",
  },
  placeholder: {
    color: Color.neutral600,
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.body1422_size,
    fontFamily: FontFamily.bodyMediumRegular,
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
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_base,
    height: 56,
    width: 343,
    alignItems: "center",
    backgroundColor: Color.colorBlack,
  },
  inputs3: {
    top: 464,
    flexDirection: "row",
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
    color: Color.colorBlack,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.colorBlack,
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
    backgroundColor: Color.colorWhite1,
    marginLeft: 32,
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
    width: 68,
    height: 65,
    left: "50%",
    position: "absolute",
  },
  placeholder3: {
    color: Color.neutral400,
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.body1422_size,
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
  },
  eyeIcon7: {
    marginLeft: 8,
    display: "none",
  },
  inputs4: {
    borderColor: Color.neutral400,
    width: 311,
    height: 162,
    left: 0,
    padding: Padding.p_base,
    top: 0,
    position: "absolute",
  },
  closeIcon: {
    top: 7,
    left: 283,
    width: 20,
  },
  icons1: {
    display: "none",
    flexDirection: "row",
  },
  wishlist1: {
    marginLeft: -63.5,
    borderRadius: Border.br_16xl,
    padding: Padding.p_base,
    backgroundColor: Color.colorBlack,
    top: 0,
  },
  aceptar: {
    top: 12,
    left: 31,
    lineHeight: 23,
    display: "flex",
    width: 65,
    color: Color.colorWhite1,
    letterSpacing: 0,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    alignItems: "center",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    height: 30,
  },
  wishlistParent: {
    marginLeft: 17,
    top: 100,
  },
  cambiosGuardadosCon: {
    top: 30,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    lineHeight: 21,
    fontSize: FontSize.body1422_size,
    letterSpacing: 0,
    color: Color.colorBlack,
  },
  inputsParent: {
    top: 215,
    left: 33,
    width: 310,
    height: 161,
    position: "absolute",
  },
  cambiarContrasea: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
});

export default CambiarContrasea1;

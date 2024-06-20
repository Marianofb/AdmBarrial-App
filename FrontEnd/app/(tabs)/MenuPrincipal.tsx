import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "@/GlobalStyles";

//MenuPrincipal
const MenuPrincipal = () =>{
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.menuPrincipal}>
      <View style={styles.ios}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
          <Text style={[styles.time, styles.timeClr]}>9:41</Text>
        </View>
      </View>
      <Pressable
        style={[styles.inputs, styles.inputsPosition]}
        onPress={() => navigation.navigate("ConsultaDeDenuncias")}
      >
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaClr]}>Denuncias</Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.inputs1, styles.inputsPosition]}
        onPress={() => navigation.navigate("BsquedaDeServicio")}
      >
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaClr]}>
            Promociones y servicios
          </Text>
        </View>
      </Pressable>
      <Pressable
        style={[styles.inputs2, styles.inputsPosition]}
        onPress={() => navigation.navigate("ConsultaDeReclamo")}
      >
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaClr]}>Reclamos</Text>
        </View>
      </Pressable>
      <Text style={[styles.menPrincipal, styles.inputsPosition]}>
        Menú principal
      </Text>
      <Pressable
        style={styles.settings}
        onPress={() => navigation.navigate("Configuracin")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("@/assets/settings.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.wishlistParent, styles.wishlistLayout]}
        onPress={() => navigation.navigate("Principal")}
      >
        <View style={[styles.wishlist, styles.wishlistLayout]}>
          <View style={styles.icons}>
            <View style={styles.cart}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("@/assets/home.png")}
              />
            </View>
            <View style={[styles.home, styles.homeSpaceBlock]}>
              <Image
                style={styles.iconLayout}
                resizeMode="cover"
                source={require("@/assets/heart.png")}
              />
            </View>
            <View style={[styles.account, styles.homeSpaceBlock]}>
              <Image
                style={[styles.userIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("@/assets/user.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.salir, styles.ctaClr]}>Salir</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  timeClr: {
    color: Color.neutral900,
    textAlign: "center",
  },
  inputsPosition: {
    left: "50%",
    position: "absolute",
  },
  ctaClr: {
    color: Color.neutral50,
    letterSpacing: 0,
  },
  wishlistLayout: {
    height: 59,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.neutral900,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    height: "100%",
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
    top: "50%",
    fontSize: FontSize.bold1524_size,
    lineHeight: 20,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
    color: Color.neutral900,
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
    left: 0,
    width: 375,
    height: 44,
    top: 0,
    position: "absolute",
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    textAlign: "center",
    fontWeight: "600",
  },
  button: {
    borderRadius: Border.br_base,
    width: 343,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.neutral900,
  },
  inputs: {
    top: 270,
    flexDirection: "row",
    marginLeft: -170.5,
    left: "50%",
  },
  inputs1: {
    marginLeft: -173.5,
    top: 368,
    flexDirection: "row",
  },
  inputs2: {
    top: 466,
    flexDirection: "row",
    marginLeft: -170.5,
    left: "50%",
  },
  menPrincipal: {
    marginLeft: -112.5,
    top: 127,
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    textAlign: "center",
    color: Color.neutral900,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  settings: {
    left: 143,
    top: 564,
    width: 90,
    height: 90,
    position: "absolute",
  },
  cart: {
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  home: {
    borderRadius: Border.br_xl,
    display: "none",
    backgroundColor: Color.neutral50,
    marginLeft: 32,
  },
  userIcon: {
    display: "none",
  },
  account: {
    width: 36,
    height: 36,
  },
  icons: {
    display: "none",
    flexDirection: "row",
  },
  wishlist: {
    marginLeft: -80.05,
    borderRadius: Border.br_16xl,
    padding: Padding.p_base,
    backgroundColor: Color.neutral900,
    top: 0,
  },
  salir: {
    top: 13,
    left: 55,
    fontSize: 23,
    lineHeight: 35,
    fontFamily: FontFamily.bodyMediumRegular,
    textAlign: "justify",
    display: "flex",
    width: 82,
    height: 34,
    alignItems: "center",
    position: "absolute",
  },
  wishlistParent: {
    marginLeft: -78.5,
    top: 713,
  },
  menuPrincipal: {
    flex: 1,
    height: 848,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral50,
  },
});

export default MenuPrincipal;
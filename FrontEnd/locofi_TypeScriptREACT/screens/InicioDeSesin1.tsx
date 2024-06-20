import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const InicioDeSesin1 = () => {
  return (
    <View style={styles.inicioDeSesin}>
      <View style={[styles.ios, styles.iosPosition]}>
        <View style={styles.battery}>
          <View style={styles.border} />
          <Image
            style={styles.capIcon}
            resizeMode="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          resizeMode="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          resizeMode="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.ctaTypo]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.ios1, styles.iosPosition]}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={styles.inputs}>
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaTypo]}>Iniciar sesión</Text>
        </View>
      </View>
      <View style={styles.inputsParent}>
        <View style={[styles.inputs1, styles.inputsBorder]}>
          <View style={styles.eyeParent}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye3.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Comercio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye3.png")}
          />
        </View>
        <View style={[styles.inputs2, styles.inputsLayout]}>
          <View style={styles.eyeGroup}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye12.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Horarios
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye13.png")}
          />
        </View>
        <View style={[styles.inputs3, styles.inputsLayout]}>
          <View style={styles.eyeGroup}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye6.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Más información
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye7.png")}
          />
        </View>
        <View style={[styles.inputs4, styles.inputsLayout]}>
          <View style={styles.eyeGroup}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye8.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Ofertas
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye8.png")}
          />
        </View>
        <View style={[styles.inputs5, styles.inputsLayout]}>
          <View style={styles.eyeGroup}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye14.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Contacto
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye15.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={styles.inputsBorder}>
                <View style={styles.eyeGroup}>
                  <Image
                    style={styles.eyeIconLayout}
                    resizeMode="cover"
                    source={require("../assets/eye3.png")}
                  />
                  <Text style={[styles.placeholder, styles.placeholderTypo]} />
                </View>
                <Image
                  style={[styles.eyeIcon1, styles.eyeIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/eye.png")}
                />
              </View>
              <Image
                style={styles.searchIcon}
                resizeMode="cover"
                source={require("../assets/search.png")}
              />
            </View>
          </View>
          <Text style={[styles.buscarServicio, styles.buscarServicioPosition]}>
            Buscar servicio
          </Text>
        </View>
        <Image
          style={[styles.menuVerticalIcon, styles.buscarServicioPosition]}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
      </View>
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
  capacityBg: {
    backgroundColor: Color.neutral900,
    position: "absolute",
  },
  ctaTypo: {
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  inputsBorder: {
    padding: Padding.p_base,
    width: 344,
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  inputsLayout: {
    height: 59,
    width: 303,
    left: 20,
    padding: Padding.p_base,
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  groupLayout: {
    height: 53,
    position: "absolute",
  },
  buscarServicioPosition: {
    top: 7,
    position: "absolute",
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
    color: Color.neutral900,
    left: "0%",
    fontWeight: "600",
    letterSpacing: 0,
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
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  ios1: {
    top: 778,
    height: 34,
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.neutral50,
  },
  button: {
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    alignItems: "center",
    width: 343,
    borderRadius: Border.br_base,
    flexDirection: "row",
    backgroundColor: Color.neutral900,
  },
  inputs: {
    top: 639,
    flexDirection: "row",
    left: 13,
    position: "absolute",
  },
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.bodyMediumRegular_size,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
  },
  eyeParent: {
    display: "none",
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs1: {
    height: 371,
  },
  placeholder1: {
    marginLeft: 8,
    lineHeight: 21,
    fontSize: FontSize.bodyMediumRegular_size,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.neutral900,
  },
  eyeGroup: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  inputs2: {
    top: 22,
  },
  inputs3: {
    top: 278,
  },
  inputs4: {
    top: 108,
  },
  inputs5: {
    top: 193,
  },
  inputsParent: {
    top: 230,
    left: 15,
    height: 370,
    width: 343,
    position: "absolute",
  },
  searchIcon: {
    top: 11,
    width: 53,
    height: 32,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    width: 343,
    left: 0,
    top: 0,
  },
  buscarServicio: {
    left: 58,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorGray_100,
    display: "flex",
    width: 205,
    height: 40,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
    alignItems: "center",
  },
  menuVerticalIcon: {
    left: 298,
    width: 51,
    height: 43,
  },
  groupParent: {
    top: 115,
    width: 349,
    left: 13,
    height: 53,
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

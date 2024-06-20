import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Buttons from "@/components/Buttons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "@/GlobalStyles";

const ConsultaDeReclamo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.consultaDeReclamo}>
      <View style={[styles.headersearch2, styles.headersearch2Position]}>
        <View
          style={[styles.fieldsstatusdefaultDark, styles.headersearch2Position]}
        >
          <View style={styles.action}>
            <Text style={[styles.time, styles.ctaTypo]}>9:41</Text>
          </View>
          <View style={[styles.container, styles.containerPosition]}>
            <Image
              style={[styles.batteryIcon, styles.containerPosition]}
              resizeMode="cover"
              source={require("@/assets/battery.png")}
            />
            <Image
              style={styles.combinedShapeIcon}
              resizeMode="cover"
              source={require("@/assets/combined-shape.png")}
            />
            <Image
              style={styles.wiFiIcon}
              resizeMode="cover"
              source={require("@/assets/wifi.png")}
            />
          </View>
        </View>
        <View style={styles.fields}>
          <View style={[styles.group, styles.groupPosition]}>
            <View style={[styles.inputStyle, styles.buttonsBorder]} />
            <View style={styles.iconText}>
              <Image
                style={styles.iconsearch}
                resizeMode="cover"
                source={require("@/assets/iconsearch-.png")}
              />
              <Text style={styles.value}>Chairs</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.iconback, styles.iconbackPosition]}
          resizeMode="cover"
          source={require("@/assets/iconback.png")}
        />
        <Image
          style={[styles.iconfilter, styles.iconbackPosition]}
          resizeMode="cover"
          source={require("@/assets/iconfilter2.png")}
        />
      </View>
      <View style={[styles.popUp, styles.cardPosition]}>
        <View style={[styles.card, styles.cardPosition]} />
        <Buttons />
        <View style={[styles.buttons, styles.buttonsBorder]}>
          <Text style={[styles.text, styles.textFlexBox]}>Reset</Text>
        </View>
        <Text style={[styles.filter, styles.textFlexBox]}>Filter</Text>
      </View>
      <Text style={styles.consultarReclamos}>Consultar reclamos</Text>
      <Pressable
        style={styles.goBack}
        onPress={() => navigation.navigate("MenuPrincipal")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("@/assets/go-back.png")}
        />
      </Pressable>
      <View style={[styles.inputsParent, styles.inputsLayout]}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Tipo
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye.png")}
          />
        </View>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("@/assets/menu-vertical.png")}
        />
      </View>
      <View style={[styles.inputsGroup, styles.inputsLayout]}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={[styles.eyeIcon, styles.eyeIconLayout]}
              resizeMode="cover"
              source={require("@/assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Origen
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye.png")}
          />
        </View>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("@/assets/menu-vertical.png")}
        />
      </View>
      <View style={styles.inputs2}>
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaTypo]}>Consultar</Text>
        </View>
      </View>
      <View style={[styles.inputs3, styles.inputsBorder]}>
        <View style={[styles.eyeContainer, styles.eyeFlexBox]}>
          <Image
            style={[styles.eyeIcon, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye.png")}
          />
          <Text style={[styles.placeholder2, styles.placeholderTypo]}>
            Escriiba aquí...
          </Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.eyeIconLayout]}
          resizeMode="cover"
          source={require("@/assets/eye.png")}
        />
      </View>
      <Image
        style={styles.addIcon}
        resizeMode="cover"
        source={require("@/assets/add.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headersearch2Position: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ctaTypo: {
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 0,
  },
  containerPosition: {
    top: "50%",
    position: "absolute",
  },
  groupPosition: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  buttonsBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
  },
  iconbackPosition: {
    top: 68,
    height: 20,
    width: 20,
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition: {
    top: "0%",
    position: "absolute",
  },
  textFlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.neutral800,
    fontFamily: FontFamily.tittle2228,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  inputsLayout: {
    height: 62,
    width: 343,
    position: "absolute",
  },
  inputsBorder: {
    padding: Padding.p_base,
    width: 344,
    borderColor: Color.neutral400,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  eyeIconLayout: {
    width: 24,
    height: 24,
    display: "none",
  },
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    marginLeft: 8,
    letterSpacing: 0,
  },
  eyeFlexBox: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  time: {
    marginTop: -9,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    color: Color.neutral900,
    fontSize: FontSize.bold1524_size,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  action: {
    height: "40.91%",
    width: "14.32%",
    top: "31.82%",
    right: "80.37%",
    bottom: "27.27%",
    left: "5.31%",
    position: "absolute",
    overflow: "hidden",
  },
  batteryIcon: {
    marginTop: -5.8,
    right: 1,
    width: 25,
    height: 12,
  },
  combinedShapeIcon: {
    width: 17,
    height: 11,
  },
  wiFiIcon: {
    width: 15,
    height: 11,
  },
  container: {
    marginTop: -6,
    right: 14,
    width: 68,
    height: 14,
    overflow: "hidden",
  },
  fieldsstatusdefaultDark: {
    height: 44,
  },
  inputStyle: {
    borderColor: Color.secondGrey,
    opacity: 0.3,
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
  },
  iconsearch: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  value: {
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.tittle1422,
    color: Color.secondBlack,
    textAlign: "left",
    marginLeft: 16,
    fontSize: FontSize.bodyMediumRegular_size,
  },
  iconText: {
    top: 15,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  group: {
    position: "absolute",
    overflow: "hidden",
  },
  fields: {
    height: "46.18%",
    width: "68%",
    top: "49.12%",
    right: "16%",
    bottom: "4.71%",
    left: "16%",
    display: "none",
    position: "absolute",
  },
  iconback: {
    left: 24,
  },
  iconfilter: {
    left: 331,
  },
  headersearch2: {
    height: 34,
    overflow: "hidden",
    backgroundColor: Color.neutral50,
  },
  card: {
    height: "97.31%",
    right: "0%",
    bottom: "2.69%",
    left: "0%",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    width: "100%",
    backgroundColor: Color.neutral50,
  },
  text: {
    marginTop: -13.5,
    marginLeft: -51.5,
    lineHeight: 24,
    width: 102,
    height: 26,
    left: "50%",
    fontSize: FontSize.bold1524_size,
    top: "50%",
  },
  buttons: {
    top: 716,
    borderColor: Color.neutral800,
    width: 129,
    height: 55,
    left: 24,
  },
  filter: {
    top: 60,
    fontSize: FontSize.tittle2228_size,
    lineHeight: 28,
    width: 273,
    left: 24,
  },
  popUp: {
    height: "90.8%",
    width: "85.6%",
    right: "-91.47%",
    bottom: "9.2%",
    left: "105.87%",
  },
  consultarReclamos: {
    marginLeft: -150.5,
    top: 88,
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontFamily: FontFamily.headingsH3,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
    color: Color.neutral900,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 150,
    top: 721,
    width: 74,
    height: 77,
    position: "absolute",
  },
  eyeIcon: {
    height: 24,
  },
  placeholder: {
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    marginLeft: 8,
    color: Color.neutral900,
  },
  eyeIcon1: {
    marginLeft: 8,
    height: 24,
  },
  inputs: {
    left: 0,
    padding: Padding.p_base,
    width: 344,
    borderColor: Color.neutral400,
    top: 0,
  },
  menuVerticalIcon: {
    top: 5,
    left: 292,
    width: 51,
    height: 43,
    position: "absolute",
  },
  inputsParent: {
    top: 185,
    left: 15,
  },
  inputsGroup: {
    top: 285,
    left: 13,
  },
  cta: {
    fontSize: FontSize.bodyLargeSemibold_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLargeSemibold,
    color: Color.neutral50,
  },
  button: {
    backgroundColor: Color.neutral900,
    height: 56,
    padding: Padding.p_5xs,
    width: 343,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: Border.br_base,
  },
  inputs2: {
    marginLeft: -174.5,
    top: 385,
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  placeholder2: {
    lineHeight: 21,
    color: Color.neutral400,
    marginLeft: 8,
    fontSize: FontSize.bodyMediumRegular_size,
    display: "none",
  },
  eyeContainer: {
    height: 24,
  },
  inputs3: {
    top: 470,
    height: 222,
    left: 16,
    padding: Padding.p_base,
    width: 344,
    borderColor: Color.neutral400,
  },
  addIcon: {
    top: 691,
    left: 277,
    width: 77,
    height: 72,
    position: "absolute",
  },
  consultaDeReclamo: {
    flex: 1,
    height: 848,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral50,
  },
});

export default ConsultaDeReclamo;

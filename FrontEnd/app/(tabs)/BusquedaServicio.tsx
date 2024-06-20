import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable, Platform } from "react-native";
import { Color, Border, FontFamily, Padding, FontSize } from "@/GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Buttons from "@/components/Buttons";
import GroupComponent from "@/components/GroupComponent";

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const BusquedaServicio = () =>{
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.bsquedaDeServicio}>
      <View style={[styles.headersearch2, styles.headersearch2Position]}>
        <View
          style={[styles.fieldsstatusdefaultDark, styles.headersearch2Position]}
        >
          <View style={styles.action}>
            <Text style={styles.time}>9:41</Text>
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
          source={require("@/assets/iconfilter.png")}
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
      <Text style={styles.buscarServicios}>Buscar servicios</Text>
      <Text style={styles.buscarServicios}>Buscar servicios</Text>
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
      <View style={styles.inputsParent}>
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={[styles.eyeParent, styles.eyeFlexBox]}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/eye3.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Comercio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye3.png")}
          />
        </View>
        <View style={[styles.inputs1, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/eye4.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Horarios
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye5.png")}
          />
        </View>
        <View style={[styles.inputs2, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/eye6.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Más información
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye7.png")}
          />
        </View>
        <View style={[styles.inputs3, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/eye8.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Ofertas
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye8.png")}
          />
        </View>
        <View style={[styles.inputs4, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("@/assets/eye9.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Contacto
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("@/assets/eye10.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={styles.inputsBorder}>
                <View style={styles.eyeFlexBox}>
                  <Image
                    style={styles.eyeIconLayout}
                    resizeMode="cover"
                    source={require("@/assets/eye3.png")}
                  />
                  <Text style={[styles.placeholder, styles.placeholderTypo]} />
                </View>
                <Image
                  style={[styles.eyeIcon1, styles.eyeIconLayout]}
                  resizeMode="cover"
                  source={require("@/assets/eye.png")}
                />
              </View>
              <Image
                style={styles.searchIcon}
                resizeMode="cover"
                source={require("@/assets/search.png")}
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
          source={require("@/assets/menu-vertical.png")}
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
    color: Color.neutral800,
    fontFamily: FontFamily.tittle2228,
    display: "flex",
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
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
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  eyeFlexBox: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
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
    padding: Padding.p_base,
    borderColor: Color.neutral400,
    left: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
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
  time: {
    marginTop: -9,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.bold1524_size,
    color: Color.neutral900,
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
    left: 16,
    alignItems: "center",
    flexDirection: "row",
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
    justifyContent: "center",
    color: Color.neutral800,
    fontFamily: FontFamily.tittle2228,
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
  buscarServicios: {
    marginLeft: -127.5,
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
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.bodyMediumRegular_size,
  },
  eyeParent: {
    display: "none",
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs: {
    height: 371,
  },
  placeholder1: {
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.bodyMediumRegular_size,
    color: Color.neutral900,
  },
  inputs1: {
    top: 22,
  },
  inputs2: {
    top: 278,
  },
  inputs3: {
    top: 108,
  },
  inputs4: {
    top: 193,
  },
  inputsParent: {
    top: 283,
    height: 370,
    width: 343,
    left: 20,
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
    height: 53,
  },
  buscarServicio: {
    left: 58,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorGray_100,
    width: 205,
    height: 40,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
    display: "flex",
    top: 7,
    alignItems: "center",
  },
  menuVerticalIcon: {
    left: 298,
    width: 51,
    height: 43,
  },
  groupParent: {
    top: 168,
    left: 18,
    width: 349,
  },
  addIcon: {
    top: 671,
    left: 280,
    width: 77,
    height: 72,
    position: "absolute",
  },
  bsquedaDeServicio: {
    flex: 1,
    height: 848,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.neutral50,
  },
});

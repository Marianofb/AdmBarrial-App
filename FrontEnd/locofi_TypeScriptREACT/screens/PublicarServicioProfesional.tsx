import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Buttons from "../components/Buttons";
import GroupComponent from "../components/GroupComponent";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const PublicarServicioProfesional = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.publicarServicioProfesional, styles.cardLayout]}>
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
              source={require("../assets/battery.png")}
            />
            <Image
              style={styles.combinedShapeIcon}
              resizeMode="cover"
              source={require("../assets/combined-shape.png")}
            />
            <Image
              style={styles.wiFiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
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
                source={require("../assets/iconsearch-.png")}
              />
              <Text style={styles.value}>Chairs</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.iconback, styles.iconbackPosition]}
          resizeMode="cover"
          source={require("../assets/iconback.png")}
        />
        <Image
          style={[styles.iconfilter, styles.iconbackPosition]}
          resizeMode="cover"
          source={require("../assets/iconfilter.png")}
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
      <Text style={styles.publicarUnServicio}>Publicar un servicio</Text>
      <Image
        style={styles.goBackIcon}
        resizeMode="cover"
        source={require("../assets/go-back.png")}
      />
      <Image
        style={styles.addImageIcon}
        resizeMode="cover"
        source={require("../assets/add-image.png")}
      />
      <GroupComponent
        publicar="Publicar"
        propMarginLeft={9.5}
        propTop={636}
        onGroupPressablePress={() =>
          navigation.navigate("PublicarServicioNoProfesio3")
        }
      />
      <Pressable
        style={styles.inputsParent}
        onPress={() => navigation.navigate("PublicarServicioNoProfesio2")}
      >
        <View style={[styles.inputs, styles.inputsBorder]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Tipo de servicio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <Image
          style={styles.menuVerticalIcon}
          resizeMode="cover"
          source={require("../assets/menu-vertical.png")}
        />
      </Pressable>
      <View style={styles.inputsGroup}>
        <View style={[styles.inputs1, styles.inputsBorder]}>
          <View style={[styles.eyeGroup, styles.eyeFlexBox]}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Comercio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <View style={[styles.inputs2, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder2, styles.placeholderTypo]}>
              Nombre
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <View style={[styles.inputs3, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder2, styles.placeholderTypo]}>
              Horarios
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <View style={[styles.inputs4, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder2, styles.placeholderTypo]}>
              Rubros
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <View style={[styles.inputs5, styles.inputsLayout]}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={styles.eyeIconLayout}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder2, styles.placeholderTypo]}>
              Descripción
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.eyeIconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: "100%",
    backgroundColor: Color.neutral50,
  },
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
    display: "flex",
    color: Color.neutral800,
    fontFamily: FontFamily.tittle2228,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
  },
  inputsBorder: {
    padding: Padding.p_base,
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
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    lineHeight: 21,
    marginLeft: 8,
    fontSize: FontSize.bodyMediumRegular_size,
    letterSpacing: 0,
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  eyeFlexBox: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  inputsLayout: {
    height: 46,
    width: 303,
    padding: Padding.p_base,
    borderColor: Color.neutral400,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.neutral50,
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
    width: 375,
    left: 0,
    top: 0,
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
    display: "flex",
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
  publicarUnServicio: {
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
  goBackIcon: {
    top: 721,
    left: 150,
    width: 74,
    height: 77,
    position: "absolute",
  },
  addImageIcon: {
    top: 630,
    width: 77,
    height: 72,
    left: 16,
    position: "absolute",
  },
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs: {
    width: 344,
  },
  menuVerticalIcon: {
    top: 5,
    left: 292,
    width: 51,
    height: 43,
    position: "absolute",
  },
  inputsParent: {
    top: 189,
    width: 343,
    height: 53,
    left: 14,
    position: "absolute",
  },
  eyeGroup: {
    display: "none",
  },
  inputs1: {
    width: 342,
    height: 311,
  },
  placeholder2: {
    marginLeft: 8,
    color: Color.neutral900,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    lineHeight: 21,
  },
  inputs2: {
    top: 19,
    left: 14,
  },
  inputs3: {
    top: 95,
    left: 16,
  },
  inputs4: {
    top: 171,
    left: 14,
  },
  inputs5: {
    top: 247,
    left: 16,
  },
  inputsGroup: {
    top: 279,
    width: 341,
    height: 310,
    left: 16,
    position: "absolute",
  },
  publicarServicioProfesional: {
    flex: 1,
    height: 848,
    overflow: "hidden",
  },
});

export default PublicarServicioProfesional;

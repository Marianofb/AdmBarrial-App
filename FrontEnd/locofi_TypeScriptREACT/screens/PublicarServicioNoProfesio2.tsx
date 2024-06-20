import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Buttons from "../components/Buttons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const PublicarServicioNoProfesio2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.publicarServicioNoProfesio, styles.cardLayout]}>
      <View style={styles.headersearch2}>
        <View style={styles.fieldsstatusdefaultDark}>
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
      <View style={styles.wishlistParent}>
        <View style={styles.wishlist}>
          <View style={styles.icons}>
            <View style={styles.cart}>
              <Image
                style={[styles.homeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/home.png")}
              />
            </View>
            <View style={[styles.home, styles.homeSpaceBlock]}>
              <Image
                style={[styles.homeIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/heart.png")}
              />
            </View>
            <View style={[styles.account, styles.homeSpaceBlock]}>
              <Image
                style={[styles.userIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/user.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.publicar}>Publicar</Text>
      </View>
      <View style={[styles.inputsWrapper, styles.inputsPosition]}>
        <View style={styles.inputsBorder}>
          <View style={styles.eyeFlexBox}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Tipo de servicio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
      <View style={[styles.inputsParent, styles.inputsPosition]}>
        <View style={[styles.inputs1, styles.inputsBorder]}>
          <View style={[styles.eyeGroup, styles.eyeFlexBox]}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder1, styles.placeholderTypo]}>
              Tipo de servicio
            </Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <Pressable
          style={[styles.inputs2, styles.inputsLayout]}
          onPress={() => navigation.navigate("PublicarServicioNoProfesio")}
        >
          <View style={styles.eyeFlexBox}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={styles.placeholder2}>Comercial</Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </Pressable>
      </View>
      <Pressable
        style={[styles.inputs3, styles.inputsLayout]}
        onPress={() => navigation.navigate("PublicarServicioProfesional")}
      >
        <View style={styles.eyeFlexBox}>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={styles.placeholder2}>Profesional</Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: "100%",
    backgroundColor: Color.neutral50,
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
  iconLayout: {
    width: 24,
    height: 24,
  },
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  inputsPosition: {
    width: 343,
    left: 14,
    position: "absolute",
  },
  placeholderTypo: {
    color: Color.neutral400,
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.bodyMediumRegular_size,
    letterSpacing: 0,
  },
  inputsBorder: {
    width: 344,
    borderColor: Color.neutral400,
    padding: Padding.p_base,
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
  inputsLayout: {
    height: 46,
    width: 303,
    borderColor: Color.neutral400,
    padding: Padding.p_base,
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
    color: Color.neutral900,
    letterSpacing: 0,
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
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
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
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
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
  homeIcon: {
    height: 24,
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
    height: 24,
    display: "none",
  },
  account: {
    width: 36,
    height: 36,
  },
  icons: {
    flexDirection: "row",
    display: "none",
  },
  wishlist: {
    marginLeft: -80.05,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.neutral900,
    padding: Padding.p_base,
    height: 59,
    width: 160,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  publicar: {
    top: 13,
    left: 40,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.neutral50,
    width: 82,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0,
    height: 34,
    position: "absolute",
  },
  wishlistParent: {
    marginLeft: 9.5,
    top: 636,
    height: 59,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  placeholder: {
    marginLeft: 8,
  },
  eyeIcon1: {
    marginLeft: 8,
    height: 24,
    display: "none",
  },
  inputsWrapper: {
    top: 189,
    height: 53,
  },
  placeholder1: {
    marginLeft: 8,
    display: "none",
  },
  eyeGroup: {
    height: 24,
  },
  inputs1: {
    height: 190,
  },
  placeholder2: {
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.bodyMediumRegular_size,
    color: Color.neutral900,
    letterSpacing: 0,
  },
  inputs2: {
    top: 95,
    left: 16,
  },
  inputsParent: {
    top: 250,
    height: 189,
  },
  inputs3: {
    top: 266,
    left: 30,
  },
  publicarServicioNoProfesio: {
    flex: 1,
    height: 848,
    overflow: "hidden",
  },
});

export default PublicarServicioNoProfesio2;

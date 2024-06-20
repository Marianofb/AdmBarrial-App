import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Buttons from "../components/Buttons";
import GroupComponent from "../components/GroupComponent";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Configuracin = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.configuracin, styles.cardLayout]}>
      <View style={[styles.headersearch2, styles.headersearch2Position]}>
        <View
          style={[styles.fieldsstatusdefaultDark, styles.headersearch2Position]}
        >
          <View style={styles.action}>
            <Text style={styles.time}>9:41</Text>
          </View>
          <View style={styles.container}>
            <Image
              style={styles.batteryIcon}
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
            <View style={[styles.iconText, styles.iconTextFlexBox]}>
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
      <Text style={styles.configuracin1}>Configuración</Text>
      <Pressable
        style={styles.wishlist}
        onPress={() => navigation.navigate("MenuPrincipal")}
      >
        <View style={styles.icons}>
          <View style={styles.cart}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/home.png")}
            />
          </View>
          <View style={[styles.home, styles.homeSpaceBlock]}>
            <Image
              style={styles.iconLayout}
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
      </Pressable>
      <View style={styles.container1}>
        <View style={styles.inputs}>
          <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={styles.placeholder}>Config C</Text>
          </View>
          <Image
            style={[styles.eyeIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
      </View>
      <View style={[styles.inputs1, styles.inputsBorder]}>
        <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={styles.placeholder}>Config D</Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.inputs2, styles.inputsBorder]}>
        <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={styles.placeholder}>Config E</Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.inputs3, styles.inputsBorder]}>
        <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={styles.placeholder}>Config A</Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.inputs4, styles.inputsBorder]}>
        <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
          <Image
            style={[styles.userIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
          <Text style={styles.placeholder}>Config B</Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <GroupComponent
        publicar="Guardar"
        propMarginLeft={1.5}
        propTop={591}
        onGroupPressablePress={() => navigation.navigate("Configuracin1")}
      />
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
  iconTextFlexBox: {
    alignItems: "center",
    flexDirection: "row",
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
  homeSpaceBlock: {
    marginLeft: 32,
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  inputsBorder: {
    width: 344,
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
    fontSize: FontSize.bold1524_size,
    letterSpacing: 0,
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
    top: "50%",
    position: "absolute",
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
    height: 14,
    width: 68,
    top: "50%",
    position: "absolute",
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
  configuracin1: {
    marginLeft: -110.5,
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
  cart: {
    padding: Padding.p_7xs,
    flexDirection: "row",
  },
  home: {
    borderRadius: Border.br_xl,
    display: "none",
    backgroundColor: Color.neutral50,
  },
  userIcon: {
    display: "none",
  },
  account: {
    width: 36,
    height: 36,
  },
  icons: {
    flexDirection: "row",
  },
  wishlist: {
    marginLeft: -30.5,
    top: 691,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.neutral900,
    height: 65,
    padding: Padding.p_base,
    left: "50%",
    width: 68,
    position: "absolute",
  },
  placeholder: {
    lineHeight: 21,
    fontFamily: FontFamily.bodyMediumRegular,
    color: Color.neutral400,
    textAlign: "justify",
    marginLeft: 8,
    fontSize: FontSize.bodyMediumRegular_size,
    letterSpacing: 0,
  },
  eyeParent: {
    width: 263,
  },
  eyeIcon1: {
    marginLeft: 8,
    display: "none",
  },
  inputs: {
    alignSelf: "stretch",
    borderColor: Color.neutral400,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.neutral50,
  },
  container1: {
    top: 367,
    width: 343,
    left: 15,
    position: "absolute",
  },
  inputs1: {
    top: 442,
    left: 17,
  },
  inputs2: {
    top: 517,
    left: 15,
  },
  inputs3: {
    top: 217,
    left: 15,
  },
  inputs4: {
    top: 292,
    left: 15,
  },
  configuracin: {
    flex: 1,
    height: 848,
    overflow: "hidden",
  },
});

export default Configuracin;

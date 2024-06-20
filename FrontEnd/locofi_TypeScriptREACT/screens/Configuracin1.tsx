import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import Buttons from "../components/Buttons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Configuracin1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.configuracin, styles.cardLayout]}>
      <View style={[styles.headersearch2, styles.guardarLayout]}>
        <View
          style={[styles.fieldsstatusdefaultDark, styles.headersearch2Position]}
        >
          <View style={styles.action}>
            <Text style={styles.time}>9:41</Text>
          </View>
          <View style={[styles.container, styles.wishlistLayout2]}>
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
          source={require("../assets/iconfilter2.png")}
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
      <View style={[styles.wishlist, styles.wishlistSpaceBlock]}>
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
      </View>
      <View style={styles.container1}>
        <View style={[styles.inputs, styles.inputsBorder1]}>
          <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]}>
              Config C
            </Text>
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
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Config D
          </Text>
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
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Config E
          </Text>
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
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Config A
          </Text>
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
          <Text style={[styles.placeholder, styles.placeholderTypo]}>
            Config B
          </Text>
        </View>
        <Image
          style={[styles.eyeIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/eye.png")}
        />
      </View>
      <View style={[styles.wishlistParent, styles.wishlistLayout1]}>
        <View style={[styles.wishlist1, styles.wishlistLayout1]}>
          <View style={styles.icons1}>
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
        </View>
        <Text style={[styles.guardar, styles.guardarFlexBox]}>Guardar</Text>
      </View>
      <View style={styles.inputsParent}>
        <View style={[styles.inputs5, styles.inputsBorder1]}>
          <View style={[styles.eyeParent, styles.iconTextFlexBox]}>
            <Image
              style={[styles.userIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/eye.png")}
            />
            <Text style={[styles.placeholder, styles.placeholderTypo]} />
          </View>
          <Image
            style={[styles.eyeIcon1, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/eye.png")}
          />
        </View>
        <Image
          style={[styles.closeIcon, styles.aceptarLayout]}
          resizeMode="cover"
          source={require("../assets/close.png")}
        />
        <Pressable
          style={[styles.wishlistGroup, styles.wishlistLayout]}
          onPress={() => navigation.navigate("Configuracin")}
        >
          <View style={[styles.wishlist2, styles.wishlistLayout]}>
            <View style={styles.icons1}>
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
          </View>
          <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
        </Pressable>
        <Text
          style={[styles.cambiosGuardadosCon, styles.placeholderTypo]}
        >{`Cambios guardados con éxito, presione 
aceptar para avanzar.`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardLayout: {
    width: "100%",
    backgroundColor: Color.neutral50,
  },
  guardarLayout: {
    height: 34,
    position: "absolute",
  },
  headersearch2Position: {
    width: 375,
    left: 0,
    top: 0,
  },
  wishlistLayout2: {
    width: 68,
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
  wishlistSpaceBlock: {
    padding: Padding.p_base,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_16xl,
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
  inputsBorder1: {
    borderColor: Color.neutral400,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    backgroundColor: Color.neutral50,
  },
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    lineHeight: 21,
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
    position: "absolute",
    backgroundColor: Color.neutral50,
  },
  wishlistLayout1: {
    height: 59,
    width: 160,
    left: "50%",
    position: "absolute",
  },
  guardarFlexBox: {
    color: Color.neutral50,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0,
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
  time: {
    marginTop: -9,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
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
    top: "50%",
    overflow: "hidden",
  },
  fieldsstatusdefaultDark: {
    height: 44,
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
    width: 375,
    left: 0,
    top: 0,
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
    height: 65,
    left: "50%",
    width: 68,
    position: "absolute",
  },
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
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
  icons1: {
    flexDirection: "row",
    display: "none",
  },
  wishlist1: {
    marginLeft: -80.05,
    padding: Padding.p_base,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_16xl,
    top: 0,
  },
  guardar: {
    top: 13,
    left: 40,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    width: 82,
    height: 34,
    position: "absolute",
  },
  wishlistParent: {
    marginLeft: 1.5,
    top: 591,
  },
  inputs5: {
    width: 311,
    height: 162,
    left: 0,
    borderColor: Color.neutral400,
    top: 0,
    position: "absolute",
  },
  closeIcon: {
    top: 7,
    left: 283,
    width: 20,
    height: 30,
  },
  wishlist2: {
    marginLeft: -63.5,
    padding: Padding.p_base,
    backgroundColor: Color.neutral900,
    borderRadius: Border.br_16xl,
    top: 0,
  },
  aceptar: {
    top: 12,
    left: 31,
    lineHeight: 23,
    width: 65,
    color: Color.neutral50,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0,
    fontSize: FontSize.bold1524_size,
  },
  wishlistGroup: {
    marginLeft: 17,
    top: 100,
  },
  cambiosGuardadosCon: {
    top: 30,
    left: 16,
    position: "absolute",
    color: Color.neutral900,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    lineHeight: 21,
  },
  inputsParent: {
    top: 206,
    left: 33,
    width: 310,
    height: 161,
    position: "absolute",
  },
  configuracin: {
    flex: 1,
    height: 848,
    overflow: "hidden",
  },
});

export default Configuracin1;

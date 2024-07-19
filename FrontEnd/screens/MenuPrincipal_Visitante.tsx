import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute, RouteProp  } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles"



// Definir el tipo de la ruta con los parámetros especificados

const MenuPrincipal_Visitante = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();


  //console.log("MENU PRINCIPAL Nombre: ", nombre, " / Apellido: ", apellido)
  //console.log("MENU PRINCIPAL Vecino: ", vecino, " / Personal: ", personal)

  return (
    <View style={styles.menuPrincipal}>
      <Text style={styles.menPrincipal}>Menú de Visitante</Text>
      <Pressable
        style={[styles.fondoSalir, styles.wishlistLayout]}
        onPress={() => navigation.navigate("Principal")}
      >
        <View style={[styles.wishlist, styles.wishlistLayout]}>
          <View style={styles.icons}>
            <View style={styles.cart}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/home1.png")}
              />
            </View>
            <View style={[styles.home, styles.homeSpaceBlock]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/heart.png")}
              />
            </View>
            <View style={[styles.account, styles.homeSpaceBlock]}>
              <Image
                style={[styles.userIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/user.png")}
              />
            </View>
          </View>
        </View>
        <Text style={styles.textoSalir}>Salir</Text>
      </Pressable>
      <Image
        style={[styles.image10Icon]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
      <Text style={styles.bienvenido}>{`¡Bienvenido!`}</Text>
      <Text style={styles.nombreApellido}>{`Incognito`}</Text>

      <View style={styles.barraPosition} />
          <View style={styles.imagenServiciosPromociones}>
            <Pressable
              style={[styles.image8, styles.imagePosition]}
              onPress={() => navigation.navigate("Visitante_BsquedaDeServicio")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/image-9.png")}
              />
            </Pressable>
            <Text style={styles.textoServiciospromociones}>Servicios/Promociones</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({

  menuPrincipal: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // Ajusta el estilo de image-10 según sea necesario
  image10Icon: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  nombreApellido: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },

  bienvenido: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  barraPosition: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorBlack,
    left: 0,
    top: "88%",
    position: "absolute",
  },
  imagenServiciosPromociones: {
    top: "91%",
    height: "10%",
    width: "27%",
    position: "absolute",
  },
  textoServiciospromociones: {
    top: "-20%",
    fontSize: FontSize.size_4xs,
    color: Color.colorWhite1,
    fontFamily: FontFamily.bodyMediumRegular,
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
  image7Layout: {
    height: 84,
    width: 100,
    position: "absolute",
  },
  imagePosition: {
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  reclamosFlexBox: {
    height: 13,
    justifyContent: "center",
    lineHeight: 14,
    fontSize: FontSize.size_4xs,
    alignItems: "center",
    display: "flex",
    color: Color.colorWhite1,
    fontFamily: FontFamily.bodyMediumRegular,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  menuPrincipalChild: {
    display: "none",
  },
  border: {
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
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
    top: "50%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    color: Color.colorBlack,
    letterSpacing: 0,
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
    width: 375,
    left: 0,
    position: "absolute",
  },
  menPrincipal: {
    marginLeft: -112.5,
    top: 127,
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontWeight: "700",
    fontFamily: FontFamily.headingsH3,
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
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
  userIcon: {
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
    padding: Padding.p_base,
    top: 0,
    backgroundColor: Color.colorBlack,
  },
  textoSalir: {
    top: "25%",
    fontSize: 25,
    textAlign: "center",
    color: Color.colorWhite1,
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
  },
  fondoSalir: {
    marginLeft: -79.5,
    top: "75%",
  },
  image4Icon: {
    left: 25,
    width: 100,
    top: 758,
  },
  image5Icon: {
    left: 138,
    height: 89,
    width: 94,
    top: 753,
    position: "absolute",
  },
  image6Icon: {
    left: 266,
    height: 90,
    width: 89,
    top: 758,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image9: {
    left: 12,
    width: 89,
  },
  image9Parent: {
    top: 760,
    left: 254,
    height: 82,
    width: 114,
    position: "absolute",
  },
  image8: {
    width: "100%",
  },
  reclamos: {
    top: 72,
    left: 13,
    width: 71,
  },
  image7: {
    top: 0,
    left: 0,
  },
  denuncias: {
    top: 67,
    width: 78,
    left: 0,
  },
  image7Parent: {
    top: 756,
    left: 25,
    width: 100,
  },
});

export default MenuPrincipal_Visitante;

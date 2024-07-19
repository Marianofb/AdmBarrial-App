import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Alert, TouchableOpacity, Dimensions  } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles"; 

import CONFIG from "../config.json"
const URL_BASE = CONFIG.BASE_URL

const { width, height } = Dimensions.get('window');

const InicioDeSesion = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  // Declarar estados para los campos de entrada
  const [documento, setDocumento] = useState('');
  const [contraseña, setContrasena] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [vecino, setVecino] = useState(false);
  const [personal, setPersonal] = useState(false);

  const [contraseñaVisible, setContraseñaVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setContraseñaVisible(!contraseñaVisible);
  };

  console.log("With: ", width, " // Height: ", height)
  
  // Función para iniciar sesión
  const login = async () => {
    try {
      const response = await fetch( URL_BASE + '/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documento: documento,
          contraseña: contraseña,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("LOGIN OK")
        const datosUsuario_Vecino = await fetch( URL_BASE + `/usuarios/vecinos/get/` + documento);
        if (!datosUsuario_Vecino.ok) {
          console.log("ERROR VECINO")
          const datosUsuario_Personal = await fetch( URL_BASE + `/usuarios/personal/get/` + documento);
          if (!datosUsuario_Personal.ok) {
            console.log("Personal --> NULL")
          } else {
            console.log("Personal --> NOOO NULL")
            const datosUsuario_Personal_json = await datosUsuario_Personal.json();
            setNombre(datosUsuario_Personal_json.nombre);
            setApellido(datosUsuario_Personal_json.apellido);
            setVecino(false);
            setPersonal(true);
  
            navigation.navigate('MenuPrincipal_Personal', {
              documentoUsuario: datosUsuario_Personal_json.legajo,
              nombre: datosUsuario_Personal_json.nombre.trim(),
              apellido: datosUsuario_Personal_json.apellido,
              vecino: false,
              personal: true,
            });
          }
        } else {
          console.log("VECINO OK")
          const datosUsuario_Vecino_json = await datosUsuario_Vecino.json();
          setNombre(datosUsuario_Vecino_json.nombre);
          setApellido(datosUsuario_Vecino_json.apellido);
          setVecino(true);
          setPersonal(false);

          navigation.navigate('MenuPrincipal_Vecino', {
              documentoUsuario: datosUsuario_Vecino_json.documento.trim(),
              nombre: datosUsuario_Vecino_json.nombre,
              apellido: datosUsuario_Vecino_json.apellido,
              vecino: true,
              personal: false,
            });
          }
              
        }
        
    } catch (error) {
      alert('ERROR');
    }
  };


  return (
    <View style={styles.inicioDeSesin}>

      <Text style={styles.title}>Iniciar sesión</Text>
      
      <View style={[styles.inicioDeSesinInner, styles.sesinPosition]}>
        <View>
          <View style={styles.frameContainer}>
              <View style={styles.inputsBorder}>
                <View style={styles.eyeParent}>
                  <TextInput
                    style={[styles.placeholder, styles.textTypo]}
                    placeholder="Documento         "
                    value={documento}
                    onChangeText={setDocumento}
                  />
                </View>
                <Image
                  style={[styles.eyeIcon1, styles.eyeIconLayout]}
                  contentFit="cover"
                  source={require("../assets/eye.png")}
                />
              </View>
              <View style={[styles.inputs1, styles.inputsBorder]}>
                <View style={styles.eyeParent}>
                  <Image
                    style={styles.eyeIconLayout}
                    contentFit="cover"
                    source={require("../assets/eye2.png")}
                  />
                  <TextInput
                    style={[styles.placeholder, styles.textTypo]}
                    placeholder="Contraseña   "
                    secureTextEntry = {!contraseñaVisible}
                    value={contraseña}
                    onChangeText={setContrasena}
                  />
                </View>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Image
                    style={styles.eyeIcon3}
                    source={require("../assets/eye2.png")}
                  />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    
      <Pressable
        style={styles.ingresar}
        onPress={login}
      >
        <View style={styles.button}>
          <Text style={[styles.cta, styles.ctaTypo]}>Ingresar</Text>
        </View>
      </Pressable>

      
      <Pressable
        style={styles.visitante}
         onPress={() => navigation.navigate("MenuPrincipal_Visitante")}
      >
        <View style={styles.button2}>
          <Text style={[styles.cta, styles.ctaTypo]}>Ingresar Como Visitante</Text>
        </View>
      </Pressable>


      <Pressable
        style={[styles.cambiarContrasea, styles.sesinPosition]}
        onPress={() => navigation.navigate("CambiarContraseña")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.cambiar}> Cambiar Contraseña</Text>
        </Text>
      </Pressable>


      <Pressable
        style={[styles.gnrarClave, styles.sesinPosition]}
        onPress={() => navigation.navigate("Vecino_GenerarClave")}
      >
        <Text style={[styles.text, styles.textTypo]}>
          <Text style={styles.cambiar}> ¡Registrate Aca! </Text>
        </Text>
      </Pressable>


      
      
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    marginBottom: "4%",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTypo: {
    lineHeight: 25,
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.body1422_size,
    letterSpacing: 0,
  },
  button2: {
    width: 225, // Cambia este valor según el tamaño deseado
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Ajusta este valor según tu necesidad
    backgroundColor: 'black', // Ajusta este valor según tu necesidad
  },
  cta: {
    color: 'white', // Ajusta este valor según tu necesidad
  },
  ctaTypo: {
    fontSize: 16, // Ajusta este valor según tu necesidad
  },
  titleTypo: {
    fontFamily: FontFamily.headingsH3,
    fontWeight: "700",
    lineHeight: 42,
    letterSpacing: -0.6,
    fontSize: FontSize.headingsH3_size,
    color: Color.colorBlack,
  },
  ingresar: {
    top: "10%",
  },
  visitante: {
    top: "12%", // Ajusta este valor según tu necesidad
  },
  cambiarContrasea: {
    top: "73%",
  },
  gnrarClave: {
    top: "90%",
  },
  sesinPosition: {
    left: "50%",
    position: "absolute",
  },
  eyeIconLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  inputsBorder: {
    padding: Padding.p_base,
    width: 344,
    borderColor: Color.colorGainsboro,
    flexDirection: "row",
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite1,
  },
  title: {
    top: "-30%",
    fontFamily: FontFamily.headingsH3,
    fontSize: FontSize.headingsH3_size,
    color: Color.colorBlack,
  },
  timeLayout: {
    lineHeight: 20,
    color: Color.colorBlack,
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
    fontSize: FontSize.sFSubheadlineSemibold_size,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 20,
    top: "50%",
    left: "0%",
    fontWeight: "600",
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
    top: 0,
    height: 44,
  },
  iniciarSesin: {
    top: 126,
    left: "50%",
    position: "absolute",
    marginLeft: -171.5,
    textAlign: "center",
  },
  placeholder: {
    color: Color.neutral600,
    textAlign: "justify",
    marginLeft: 8,
    fontFamily: FontFamily.bodyMediumRegular,
  },
  eyeParent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  eyeIcon3: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  inputs1: {
    marginTop: 24,
  },
  frameContainer: {
    alignItems: "flex-end",
  },
  inicioDeSesinInner: {
    marginTop: -155.5,
    alignItems: "center",
    marginLeft: -171.5,
    left: "50%",
    top: "50%",
  },
  button: {
    width: 343,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_base,
    alignItems: "center",
    backgroundColor: Color.colorBlack,
  },

  text1: {
    color: Color.colorDarkgray,
     fontWeight: 'bold'
  },
  cambiar: {
    color: Color.colorBlack,
  },
  text: {
    marginLeft: -71.5,
    fontFamily: FontFamily.bodyMediumRegular,
    textAlign: "center",
  },
  inicioDeSesin: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});

export default InicioDeSesion;

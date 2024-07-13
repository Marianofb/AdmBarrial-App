import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput, Alert, TouchableOpacity  } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles"; 

import CONFIG from "../config.json"
const URL_BASE = CONFIG.BASE_URL

const CambiarContraseña = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [documento, setDocumento] = useState('');
  const [claveActual, setClaveActual] = useState('');
  const [claveNueva, setClaveNueva] = useState('');
  const [claveNuevaSegunda, setClaveNuevaSegunda] = useState('');

  const [contraseñaActualVisible, setContraseñaActualVisible] = useState(false);

  const toggleContraseñaActualVisibility = () => {
    setContraseñaActualVisible(!contraseñaActualVisible);
    };


  // Función para manejar el envío del formulario
  const genrarClave = async () => {
    if (claveNueva !== claveNuevaSegunda) {
      Alert.alert('Error', 'Las nuevas claves no coinciden.');
      return;
    }
    try {
      const response = await fetch( URL_BASE + '/usuarios/cambiarClave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documento,
          claveActual,
          claveNueva,
          claveNuevaSegunda
        }),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al cambiar la clave.');
      }

      Alert.alert('Clave Nueva Guardada', 'La clave nueva ha sido generada exitosamente.', [
        { text: 'OK' },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al cambiar la clave.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar Contraseña</Text>
      <View style={styles.inputsGroup}>
        
        <TextInput
          style={styles.inputs}
          placeholder="Documento..."
          onChangeText={setDocumento}
          value={documento}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Clave Actual..."
          secureTextEntry
          onChangeText={setClaveActual}
          value={claveActual}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Nueva Clave..."
          secureTextEntry
          onChangeText={setClaveNueva}
          value={claveNueva}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Ingrese Otra Vez La Nueva Clave..."
          secureTextEntry
          onChangeText={setClaveNuevaSegunda}
          value={claveNuevaSegunda}
        />
      </View>
      <Pressable style={styles.button} onPress={genrarClave}>
        <Text style={styles.buttonText}>Cambiar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  eyeIcon3: {
    marginLeft: 8,
    height: 24,
    width: 24,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: Color.colorWhite1,
  },
  title: {
    fontSize: FontSize.headingsH3_size,
    fontWeight: "700",
    color: Color.colorBlack,
    marginBottom: 20,
  },
  inputsGroup: {
    width: "80%",
    maxWidth: 400,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputs: {
    height: 60,
    borderColor: Color.neutral400,
    borderWidth: 1,
    borderRadius: Border.br_base,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: Color.colorWhite1,
  },
  button: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_16xl,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    color: Color.colorWhite1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.bodyMediumRegular,
  },
});

export default CambiarContraseña;

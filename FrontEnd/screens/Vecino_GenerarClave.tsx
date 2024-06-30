import React, { useState } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const Vecino_GenerarClave = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const [documento, setDocumento] = useState('');
  const [celular, setCelular] = useState('');

  // Función para manejar el envío del formulario
  const genrarClave = async () => {

    try {
      const response = await fetch('http://192.168.1.17:5000/usuarios/vecinos/generarClave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documento,
          celular
        }),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al generar la clave.');
      }

      Alert.alert('Clave generada', 'La clave ha sido generada exitosamente.', [
        { text: 'OK' },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al generar la clave.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generar Clave</Text>
      <View style={styles.inputsGroup}>
        <TextInput
          style={styles.inputs}
          placeholder="Documento..."
          onChangeText={setDocumento}
          value={documento}
        />
         <TextInput
          style={styles.inputs}
          placeholder="54 9 1234 1234"
          defaultValue="54 9 "
          onChangeText={(text) => setCelular(text.replace(/[^0-9]/g, ''))}
          value={celular}
          keyboardType="numeric"
        />
      </View>
      <Pressable style={styles.button} onPress={genrarClave}>
        <Text style={styles.buttonText}>Generar</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Vecino_GenerarClave;

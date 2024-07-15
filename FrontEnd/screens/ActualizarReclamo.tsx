import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase, useRoute, RouteProp } from '@react-navigation/native';
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

import CONFIG from "../config.json"
const URL_BASE = CONFIG.BASE_URL

type RouteParams = {
  documentoUsuario: string;
  nombre: string;
  apellido: string;
  vecino: boolean;
  personal: boolean;
};

type Reclamo = {
  documento: string;
  idReclamo: number;
  idDesperfecto: number;
  descripcion: string;
  estado: string;
  idReclamoUnificado: number;
  legajo: number;
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;

const ActualizarReclamo = () => {
  const [estado, setEstado] = useState<string | null>(null);
  const [reclamos, setReclamos] = useState<Reclamo[]>([]);
  const [selectedReclamoId, setSelectedReclamoId] = useState<number | null>(null);
  const [celularVecino, setCelularVecino] = useState<string | null>(null); // Estado para almacenar el celular del vecino

  useEffect(() => {
    const fetchReclamos = async () => {
      try {
        const response = await fetch( URL_BASE + '/reclamos/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los reclamos');
        }
        const data = await response.json();
        setReclamos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchReclamos();
    //console.log("ACTUALIZAR RECLAMO: Documento Usuario" , documentoUsuario)
  }, []);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const route = useRoute<PantallasRouteProp>();
  const { documentoUsuario, nombre, apellido, vecino, personal } = route.params || { documentoUsuario: "", nombre: '', apellido: '', vecino: false , personal: false};

  const handleEstadoChange = (value: string) => {
    setEstado(value);
  };

  const handleReclamoSelect = (reclamoId: number) => {
    console.log("handleReclamoSelect")
    setSelectedReclamoId(reclamoId);

    // Obtener el celular del vecino asociado al reclamo
    const reclamoSeleccionado = reclamos.find(reclamo => reclamo.idReclamo === reclamoId);
    if (reclamoSeleccionado) {
      console.log("reclamoSeleccionado")
      const documentoVecino = reclamoSeleccionado.documento;
      fetchCelularVecino(documentoVecino);
    }
  };

    const fetchCelularVecino = async (documento: string) => {
      try {
        console.log("fetchCelularVecino")
        const response = await fetch( URL_BASE + `/usuarios/vecinos/get/${documento}`);
        if (!response.ok) {
          throw new Error('Error al obtener los datos del vecino');
        }
        const data = await response.json();
        console.log("Datos: ", data.celular)
        setCelularVecino(data.celular);
      } catch (error) {
        console.error('Error:', error);
      }
    };


  useEffect(() => {
    if (celularVecino !== null) {
      console.log("Celular Vecino actualizado: ", celularVecino);


    }
  }, [celularVecino]);

  const handleSubmit = async () => {
    if (!selectedReclamoId) {
      Alert.alert('Error', 'Debe seleccionar un reclamo.');
      return;
    }

    try {
      const response = await fetch( URL_BASE + `/reclamos/update/${selectedReclamoId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          estado,
          documentoUsuario
        }),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al actualizar el reclamo.');
      }

      const enviarMsjResponse = await fetch( URL_BASE + '/reclamos/enviar_sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mensaje: `El estado de tu reclamo ID: ${selectedReclamoId} cambió a ESTADO: ${estado}`,
          celular: celularVecino,
        }),
      });
  
      if (!enviarMsjResponse.ok) {
        throw new Error('Hubo un problema al enviar el SMS al vecino.');
      }
  

      Alert.alert('Estado Actualizado', 'El estado del reclamo ha sido actualizado correctamente.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Exito', 'Se envio el msj desde Twillo.');
    }
  };

  return (
    <View style={styles.publicarServicioProfesional}>
      <Text style={styles.publicarUnServicio}>Actualizar Reclamo</Text>
      <View style={styles.inputsGroup}>
        <RNPickerSelect
          placeholder={{ label: 'Seleccionar Reclamo...', value: null }}
          items={reclamos.map((reclamo) => ({
            label: `ID: ${reclamo.idReclamo} - ${reclamo.descripcion}`,
            value: reclamo.idReclamo,
          }))}
          onValueChange={(value) => handleReclamoSelect(value)} 
          style={pickerSelectStyles}
          value={selectedReclamoId}
        />
        <RNPickerSelect
          placeholder={{ label: 'Seleccionar Estado...', value: null }}
          items={[
            { label: 'Pendiente', value: "pendiente" },
            { label: 'Resuelto', value: "resuelto" },
          ]}
          onValueChange={handleEstadoChange}
          style={pickerSelectStyles}
          value={estado}
        />
      </View>

      <Pressable style={styles.wishlistParent} onPress={handleSubmit}>
        <View style={styles.wishlist}>
          <Text style={styles.publicar}>Actualizar</Text>
        </View>
      </Pressable>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: 'white',
    marginVertical: 10,
  },
});

const styles = StyleSheet.create({
  publicarServicioProfesional: {
    paddingBottom: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite1,
  },
  publicarUnServicio: {
    marginLeft: -127.5,
    top: 88,
    fontSize: FontSize.headingsH3_size,
    letterSpacing: -0.6,
    lineHeight: 42,
    fontFamily: FontFamily.headingsH3,
    fontWeight: "700",
    left: "50%",
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  inputsGroup: {
    width: "80%",
    maxWidth: 400,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
  },
  inputs: {
    height: 60,
    borderColor: Color.neutral400,
    borderWidth: 1,
    borderRadius: Border.br_base,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  wishlistParent: {
    position: "absolute",
    bottom: 175,
    right: 50,
    width: 160,
    height: 59,
    alignItems: "center",
  },
  wishlist: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_16xl,
    padding: Padding.p_base,
  },
  publicar: {
    color: Color.colorWhite1,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.bodyMediumRegular,
  },
});

export default ActualizarReclamo;

import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase, useRoute, RouteProp } from '@react-navigation/native';
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

type RouteParams = {
  id: number; 
  nombre: string;
  apellido: string;
  vecino: boolean;
  personal: boolean;
};

type Servicio = {
  idServicio: number;
  tipo: string;
  descripcion: string;
  estado: boolean;
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;

const ActualizarDenuncia = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<PantallasRouteProp>();
  const { id, nombre, apellido, vecino, personal } = route.params || {
    id: 0,
    nombre: '',
    apellido: '',
    vecino: false,
    personal: false,
  };

  const [tipo, setTipo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState<string | null>(null);
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch('http://192.168.1.17:5000/servicios/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        setServicios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchServicios();
  }, []);

  const handleEstadoChange = (value: string) => {
    setEstado(value);
  };

  const handleSubmit = async () => {
    if (!selectedServiceId) {
      Alert.alert('Error', 'Debe seleccionar un servicio.');
      return;
    }

    try {
      const response = await fetch(`http://192.168.1.17:5000/servicios/update/${selectedServiceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          estado
        }),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al actualizar el servicio.');
      }

      Alert.alert('Estado Actualizado', 'El estado del servicio ha sido actualizado correctamente.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al actualizar el servicio.');
    }
  };

  return (
    <View style={styles.publicarServicioProfesional}>
      <Text style={styles.publicarUnServicio}>Actualizar Servicio</Text>
      <View style={styles.inputsGroup}>
        <RNPickerSelect
          placeholder={{ label: 'Seleccionar Servicio...', value: null }}
          items={servicios.map((servicio) => ({
            label: `ID: ${servicio.idServicio} - ${servicio.tipo}`,
            value: servicio.idServicio,
          }))}
          onValueChange={(value) => setSelectedServiceId(value)}
          style={pickerSelectStyles}
          value={selectedServiceId}
        />
        <RNPickerSelect
          placeholder={{ label: 'Seleccionar Estado...', value: null }}
          items={[
            { label: 'Activo', value: "1" },
            { label: 'Cerrado', value: "0" },
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

export default ActualizarDenuncia;

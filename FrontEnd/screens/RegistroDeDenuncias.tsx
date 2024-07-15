import React, { useState, useEffect } from 'react';
import {Image, Text, StyleSheet, View, Pressable, TextInput, Alert, TouchableOpacity, ScrollView, FlatList, } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute, RouteProp  } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

import Ionicons from "@expo/vector-icons/Ionicons";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


import CONFIG from "../config.json"
const URL_BASE = CONFIG.BASE_URL

type RouteParams = {
  documentoUsuario: string;
  nombre: string;
  apellido: string;
  vecino: boolean;
  personal: boolean;
};

type Servicio = {
  idServicio: string;
  descripcion: string;
};

type Vecino = {
  nombre: string
  apellido: string
  documento: string
  direccion:string
  codigoBarrio:number
  celular:number
};

type Sitios = {
  idSitio: number;
  latitud: number;
  longitud: number;
  calle: string;
  numero: string;
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;

const direcImagenes = FileSystem.documentDirectory + "imagenesDenuncias/";

const asegurarDirectorioExiste = async () =>{
  const direcInfo = await FileSystem.getInfoAsync(direcImagenes);
  if(!direcInfo.exists)
    {
      await FileSystem.makeDirectoryAsync(direcImagenes, {intermediates: true});
    }
};

const RegistroDedenuncias = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const route = useRoute<PantallasRouteProp>();
  const { documentoUsuario, nombre, apellido, vecino, personal } = route.params || { documentoUsuario: "" , nombre: '', apellido: '', vecino: false , personal: false};

  const [idSitio, setIdSitio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [aceptarResponsabilidad, setAceptarResponsabilidad] = useState('');
  const [servicioDenunciado, setServicioDenunciado] = useState('');
  const [vecinoDenunciado, setvecinoDenunciado] = useState('');

  const[imagenes, setImagenes] = useState<string[]>([]);
  const[carga, setCarga] = useState(true);

   
  const [selectedSerivicioId, setSelectedSerivicioId] = useState<number | null>(null);
  const [servicios, setServicios] = useState<Servicio[]>([]);

  const [selectedVecinoId, setSelectedVecinoId] = useState<number | null>(null);
  const [vecinos, setVecinos] = useState<Vecino[]>([]);

  const [sitios, setSitios] = useState<Sitios[]>([]);
  const [selectedSitioId, setSelectedSitioId] = useState<number | null>(null);
  

  useEffect(() => {
    cargarImagenes()

    const fetchSitios = async () => {
      try {
        const response = await fetch( URL_BASE + '/sitios/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los sitios');
        }
        const data = await response.json();
        //console.log("Sitios Funciona")
        setSitios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const fetchServicios = async () => {
      try {
        const response = await fetch( URL_BASE + '/servicios/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        //console.log("Servicios Funciona")
        setServicios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const fetchVecinos = async () => {
      try {
        const response = await fetch( URL_BASE + '/usuarios/vecinos/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        //console.log("Vecinos Funciona")
        setVecinos(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchSitios();
    fetchServicios();
    fetchVecinos();
  
  }, [documentoUsuario]);

  const cargarImagenes = async () =>  {
    await asegurarDirectorioExiste();
    const archivos = await FileSystem.readDirectoryAsync(direcImagenes);
    if(archivos.length > 0)
      {
        setImagenes(archivos.map(f => direcImagenes + f))
      }
  };

  const seleccionarImagen = async (useLibrary:boolean) => {
    //console.log("Cantidad de Fotos: ", imagenes.length)
    let result;

    const options: ImagePicker.ImagePickerOptions ={
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4,3],
      quality: 0.5,
      allowsEditing:true
    };

    if(useLibrary)
    {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync(options);
    } else
    {
      await ImagePicker.requestCameraPermissionsAsync();
      result = await ImagePicker.launchCameraAsync(options);
    }


    if (!result.canceled) {
      const selectedImageUri = result.assets[0].uri;
      if (selectedImageUri) {

        console.log('Selected Image URI:', selectedImageUri);
        guardarImagen(selectedImageUri);
      } else {
        console.error('No URI returned for the selected image');
      }
    } else {
      console.log('Image selection canceled');
    }

  };

  const guardarImagen = async (uri:string) => {
    await asegurarDirectorioExiste();

    const nombreImagen = new Date().getTime() + ".jpg";
    const dest = direcImagenes + nombreImagen;

    console.log(nombreImagen)
    await FileSystem.copyAsync({from : uri, to: dest});
    setImagenes([...imagenes, dest]);
  }

  const eliminarImagen = async (uri:string) => {
    await FileSystem.deleteAsync(uri);
    setImagenes(imagenes.filter((i) => i != uri));
  };

  const renderizarImagen = ({item}: {item:string}) => {
    return(
      <View style = {{margin: 5, alignItems:"center"}}>
        <Image source={{ uri: item }} style = {{width: 35, height: 35}}/>
        <Ionicons.Button name="trash" onPress={() => eliminarImagen(item)}/>
    </View>
    );
  };
  
  const handleSubmit = async () => {
    try {
      if (!selectedSitioId || !selectedSerivicioId || !selectedVecinoId) {
        Alert.alert('Error', 'Debe seleccionar un sitio y un desperfecto');
        return;
      }

      const formData = new FormData();
  
      formData.append('documento', documentoUsuario);
      formData.append('aceptarResponsabilidad', aceptarResponsabilidad);
      formData.append('idSitio', selectedSitioId.toString());
      formData.append('servicioDenunciado', selectedSerivicioId.toString());
      formData.append('vecinoDenunciado', selectedVecinoId.toString());
      formData.append('descripcion', descripcion);

    
      const response = await fetch( URL_BASE + '/denuncias/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al subir la denuncia.');
      }
  
      Alert.alert('EXITO: ', 'La denuncia se subio al sistema.', [
        { text: 'OK' }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al procesar la denuncia.');
      console.error('Error submitting denuncia:', error);
    }
  };

  const handleEstadoChange = (value: string) => {
    setAceptarResponsabilidad(value);
  };

  return (
      
    <View style={styles.publicarServicioProfesional}>
      <Text style={styles.publicarUnServicio}>Crear Denuncia</Text>
      <View style={styles.inputsGroup}>

        <RNPickerSelect
            placeholder={{ label: "Seleccionar Tipo...", value: null}}
            items={[
              { label: "Acepto", value: "1" },
              { label: "Rechaza", value: "0" },
            ]}
            onValueChange={handleEstadoChange}
            style={{
              inputIOS: styles.inputs,
              inputAndroid: styles.inputs,
              placeholder: {
                color: 'gray',
              },
            }}
            value={aceptarResponsabilidad}
          />

          {sitios.length > 0 ? (
            <RNPickerSelect
              placeholder={{ label: 'Seleccionar Sitio...', value: null }}
              items={sitios.map((sitio) => ({
                label: `ID: ${sitio.idSitio} - ${sitio.calle}`,
                value: sitio.idSitio,
              }))}
              onValueChange={(value) => setSelectedSitioId(value)}
              style={{
                inputIOS: styles.inputs,
                inputAndroid: styles.inputs,
                placeholder: {
                  color: 'gray',
                },
              }}
              value={selectedSitioId}
            />
          ) : (
            <Text style={styles.inputs}>Cargando sitios...</Text>
          )}

          {servicios.length > 0 ? (
            <RNPickerSelect
              placeholder={{ label: 'Seleccionar Servicio a Denunciar...', value: null }}
              items={servicios.map((servicio) => ({
                label: `ID: ${servicio.idServicio} - ${servicio.descripcion}`,
                value: servicio.idServicio,
              }))}
              onValueChange={(value) => setSelectedSerivicioId(value)}
              style={{
                inputIOS: styles.inputs,
                inputAndroid: styles.inputs,
                placeholder: {
                  color: 'gray',
                },
              }}
              value={selectedSerivicioId}
            />
          ) : (
            <Text style={styles.inputs}>Cargando servicios...</Text>
          )}

          {vecinos.length > 0 ? (
            <RNPickerSelect
              placeholder={{ label: 'Seleccionar Vecino a Denunciar...', value: null }}
              items={vecinos.map((vecino) => ({
                label: `ID: ${vecino.documento} - Nombre: ${vecino.nombre}, ${vecino.apellido}`,
                value: vecino.documento,
              }))}
              onValueChange={(value) => setSelectedVecinoId(value)}
              style={{
                inputIOS: styles.inputs,
                inputAndroid: styles.inputs,
                placeholder: {
                  color: 'gray',
                },
              }}
              value={selectedVecinoId}
            />
          ) : (
            <Text style={styles.inputs}>Cargando vecinos...</Text>
          )}
          
        <TextInput style={styles.inputs}
                   placeholder="Descripcion..."
                   onChangeText={setDescripcion}
                   value={descripcion} />

        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => seleccionarImagen(true)}>
              <Text style={styles.buttonText}>Seleccionar Fotos del Album</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => seleccionarImagen(false)}>
              <Text style={styles.buttonText}>Abrir Camara</Text>
            </TouchableOpacity>
        </View>
        
        <FlatList 
          data={imagenes} 
          renderItem={renderizarImagen} 
          numColumns={4} 
          keyExtractor={(item, index) => index.toString()} 
        />
      </View>
      <Pressable
        style={styles.publicarButton}
        onPress={handleSubmit}
      >
          <Text style={styles.publicarButtonText}>Crear</Text>
      </Pressable>

    </View>

    
  );
};

const styles = StyleSheet.create({
  publicarServicioProfesional: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  publicarUnServicio: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputsGroup: {
    width: '100%',
  },
  inputs: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  trashButton: {
    backgroundColor: '#FF6347', // or any color you prefer for delete
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  trashButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  publicarButton: {
    backgroundColor: '#1E90FF', // or any color you prefer for publish
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  publicarButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RegistroDedenuncias;

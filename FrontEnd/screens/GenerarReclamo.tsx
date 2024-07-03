import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert, TouchableOpacity, FlatList } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute, RouteProp  } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

import Ionicons from "@expo/vector-icons/Ionicons";

import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';


type RouteParams = {
  documentoUsuario: string;
  nombre: string;
  apellido: string;
  vecino: boolean;
  personal: boolean;
};

type Sitios = {
  idSitio: number;
  latitud: number;
  longitud: number;
  calle: string;
  numero: string;
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;

const direcImagenes = FileSystem.documentDirectory + "imagenesServicio/";

const asegurarDirectorioExiste = async () =>{
  const direcInfo = await FileSystem.getInfoAsync(direcImagenes);
  if(!direcInfo.exists)
    {
      await FileSystem.makeDirectoryAsync(direcImagenes, {intermediates: true});
    }
};


const GenerarReclamo = () => {

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<PantallasRouteProp>();
  const { documentoUsuario, nombre, apellido, vecino, personal } = route.params || { documentoUsuario: "", nombre: '', apellido: '', vecino: false , personal: false};

  const [descripcion, setDescripcion] = useState('');
  const [documento, setDocumento] = useState('');
  const [idDesperfecto, setIdDesperfecto] = useState("");
  const [idReclamoUnificado, setIdReclamoUnificado] = useState('');
  const [idSitio, setIdSitio] = useState("");
  const [legajo, setLegajo] = useState("");

  const [sitios, setSitios] = useState<Sitios[]>([]);
  const [selectedSitioId, setSelectedSitioId] = useState<number | null>(null);

 
  const[imagenes, setImagenes] = useState<string[]>([]);
  const[carga, setCarga] = useState(true);

  useEffect(() => {
    cargarImagenes();

    const fetchSitios = async () => {
      try {
        const response = await fetch('http://192.168.1.17:5000/sitios/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        setSitios(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchSitios();

  }, []);

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
    if (imagenes.length >= 7) {
      Alert.alert('Límite de imágenes alcanzado', 'No puedes subir más de 5 imágenes por reclamo.');
      return;
    }

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

    if (!selectedSitioId) {
      Alert.alert('Error', 'Debe seleccionar un servicio.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('documento', documento);
      formData.append('idSitio', selectedSitioId.toString());
      formData.append('idDesperfecto', idDesperfecto);
      formData.append('descripcion', descripcion);

      // Append images
      imagenes.forEach((imagenUri, index) => {
        const uriParts = imagenUri.split('.');
        const fileType = uriParts[uriParts.length - 1];
        const fecha = new Date().getTime();
        formData.append('files', {
          uri: imagenUri,
          name:  `${index}${fecha}.${fileType}`,
          type: `image/${fileType}`,
        } as any);
      });

      const response = await fetch('http://192.168.1.17:5000/reclamos/new', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al subir el servicio.');
      }
  
      Alert.alert('Servicio Procesado Para Validar', 'La validación del reclamo puede demorar.', [
        { text: 'OK' }
      ]);
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al procesar el reclamo.');
      console.error('Error submitting reclamo:', error);
    }
  };

  return (
    <View style={styles.publicarServicioProfesional}>
        <Text style={styles.publicarUnServicio}>Publicar Reclamo</Text>
    
        <View style={styles.inputsGroup}>
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
          
          <TextInput
            style={styles.inputs}
            placeholder="Descripcion..."
            onChangeText={setDescripcion}
            value={descripcion}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Documento.."
            onChangeText={setDocumento}
            value={documento}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Id Desperfecto.."
            onChangeText={setIdDesperfecto}
            value={idDesperfecto}
          />
    
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
    
        <View style={styles.bottomActions}>
          <Pressable
            style={styles.publicarButton} // Adjust styles as needed for "Publicar"
            onPress={handleSubmit}
          >
            <Text style={styles.publicarButtonText}>Publicar</Text>
          </Pressable>
        </View>
      </View>
    );
  };const styles = StyleSheet.create({
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
      backgroundColor: '#FF6347', // Adjust color for "Borrar"
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
      backgroundColor: '#1E90FF', // Adjust color for "Publicar"
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

export default GenerarReclamo;

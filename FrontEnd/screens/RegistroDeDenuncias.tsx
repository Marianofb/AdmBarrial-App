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

type Servicio = {
  idServicio: string;
  descripcion: string;
};

type Vecino = {
  nombre: string
  apellido: string
  documento: string
};


const direcImagenes = FileSystem.documentDirectory + "imagenesServicio/";

const asegurarDirectorioExiste = async () =>{
  const direcInfo = await FileSystem.getInfoAsync(direcImagenes);
  if(!direcInfo.exists)
    {
      await FileSystem.makeDirectoryAsync(direcImagenes, {intermediates: true});
    }
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;

const RegistroDedenuncias = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<PantallasRouteProp>();
  const { documentoUsuario, nombre, apellido, vecino, personal } = route.params || { documentoUsuario: "" , nombre: '', apellido: '', vecino: false , personal: false};

  const [idSitio, setIdSitio] = useState("");
  const [descripcion, setDescripcion] = useState('');
  const [aceptarResponsabilidad, setAceptarResponsabilidad] = useState("");
  const [servicioDenunciado, setServicioDenunciado] = useState("");
  const [vecinoDenunciado, setvecinoDenunciado] = useState("");

  
  const [servicios, setServicios] = useState<Servicio[]>([]);
  const [selectedServicioId, setSelectedServicioId] = useState<number | null>(null);
  const [vecinos, setVecinos] = useState<Vecino[]>([]);

  const[imagenes, setImagenes] = useState<string[]>([]);
  const[carga, setCarga] = useState(true);

  useEffect(() => {
  const fetchServicios = async () => {
    try {
      const servicios = await fetch('http://192.168.1.17:5000/servicios/getAll');
      if (!servicios.ok) {
        throw new Error('Error al obtener los servicios');
      }
      const data_servicios = await servicios.json();
      //console.log("Servicios: ", data_servicios)
      setServicios(data_servicios);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchVecinos = async () => {
    try {
      const vecinos = await fetch('http://192.168.1.17:5000/usuarios/vecinos/getAll');
      if (!vecinos.ok) {
        throw new Error('Error al obtener los servicios');
      }
      const data_vecinos = await vecinos.json();
      //console.log("Vecinos: ", data_vecinos)
      setVecinos(data_vecinos);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  fetchServicios();
  //fetchVecinos();

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
    if (imagenes.length >= 7) {
      Alert.alert('Límite de imágenes alcanzado', 'No puedes subir más de 7 imágenes por reclamo.');
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

   
    console.log()
    try {
      
      const requestData = {
        documento: documentoUsuario,
        aceptarResponsabilidad: aceptarResponsabilidad.toString(),
        idSitio:idSitio,
        descripcion:descripcion,
        servicioDenunciado:servicioDenunciado,
        vecinoDenunciado:vecinoDenunciado
      };

      const formData = new FormData();
  
      formData.append('documento', documentoUsuario);
      //formData.append('aceptarResponsabilidad', aceptarResponsabilidad.toString());

      //Append images
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
      
      console.log("REQUEST", requestData)

      const response = await fetch('http://192.168.1.17:5000/denuncias/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Añade otros headers si son necesarios
        },
        body: JSON.stringify(requestData),
      });
  
      if (!response.ok) {
        const errorData = await response.text();
        throw new Error('Hubo un problema al crear la denuncia. Detalles: ' + errorData);
      }
  
      const responseData = await response.json();
      Alert.alert('Denuncia creada!', 'La denuncia ha sido creada exitosamente.', [
        {
          text: 'OK'
        },
      ]);
    } catch (error) {
      console.error('Error al procesar la denuncia:', error);
      Alert.alert('Error', 'Hubo un error al procesar la denuncia. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <View style={styles.publicarServicioProfesional}>
      <Text style={styles.publicarUnServicio}>Publicar Denuncia</Text>


      <View style={styles.inputsGroup}>

        <TextInput
            style={styles.inputs}
            placeholder="Declaracion Jurada (Aceptar: 1/Rechazar: 2) .."
            onChangeText={setAceptarResponsabilidad}
            value={aceptarResponsabilidad}
          />

        <TextInput
          style={styles.inputs}
          placeholder="Sitio.. hasta 10"
          onChangeText={setIdSitio}
          value={idSitio}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.inputs}
          placeholder="Descripcion.."
          onChangeText={setDescripcion}
          value={descripcion}
        />

      <TextInput
          style={styles.inputs}
          placeholder="Comercio Denunciado.."
          onChangeText={setServicioDenunciado}
          value={servicioDenunciado}
        />

      <TextInput
          style={styles.inputs}
          placeholder="Vecino Dunciar (Documento o Nombre) .."
          onChangeText={setvecinoDenunciado}
          value={vecinoDenunciado}
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

export default RegistroDedenuncias;

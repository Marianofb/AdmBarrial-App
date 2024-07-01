import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, TextInput, Alert } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from 'expo-image-picker';
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute, RouteProp  } from "@react-navigation/native";
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";


type RouteParams = {
  documentoUsuario: string;
  nombre: string;
  apellido: string;
  vecino: boolean;
  personal: boolean;
};

type PantallasRouteProp = RouteProp<Record<string, RouteParams>, string>;


const GenerarReclamo = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<PantallasRouteProp>();
  const { documentoUsuario, nombre, apellido, vecino, personal } = route.params || { documentoUsuario: "", nombre: '', apellido: '', vecino: false , personal: false};

  const [descripcion, setDescripcion] = useState('');
  const [documento, setDocumento] = useState('');
  const [estado, setEstado] = useState('');
  const [idDesperfecto, setIdDesperfecto] = useState("");
  const [idReclamoUnificado, setIdReclamoUnificado] = useState('');
  const [idSitio, setIdSitio] = useState("");
  const [legajo, setLegajo] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleEstadoChange = (value: string) => {
    setEstado(value);
  };

  const pickImage = async () => {
    // Solicitar permisos para acceder a la cámara y la galería
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access camera roll is required!');
      return;
    }

    // Permitir al usuario seleccionar una imagen
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('documento', documento);
      formData.append('idSitio', idSitio);
      formData.append('idDesperfecto', idDesperfecto);
      formData.append('descripcion', descripcion);
      formData.append('estado', estado);
      formData.append('legajo', legajo);

      if (image) {
        formData.append('imagen', {
          uri: image,
          name: 'photo.jpg',
          type: 'image/jpeg',
        } as any);
      }

      const response = await fetch('http://192.168.1.17:5000/reclamos/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al crear el reclamo.');
      }

      Alert.alert('Reclamo creado!', 'El reclamo ha sido creado exitosamente.', [
        {
          text: 'OK'
        },
      ]);
    } catch (error) {
      Alert.alert('Error');
    }
  };

  return (
    <View style={styles.publicarServicioProfesional}>
      <Text style={styles.publicarUnServicio}>Publicar Reclamo</Text>

      <View style={styles.inputsGroup}>
        <TextInput style={styles.inputs}
                   placeholder="Descripcion..."
                   onChangeText={setDescripcion}
                   value={descripcion} />
        <TextInput style={styles.inputs}
                   placeholder="Documento.."
                   onChangeText={setDocumento}
                   value={documento} />
        <RNPickerSelect
          placeholder={{ label: "Seleccionar Estado...", value: null }}
          items={[
            { label: "Pendiente", value: "pendiente" },
            { label: "Resuelto", value: "resuelto" },
          ]}
          onValueChange={handleEstadoChange}
          style={pickerSelectStyles}
          value={estado} />
        <TextInput style={styles.inputs}
                   placeholder="Id Desperfecto.."
                   onChangeText={setIdDesperfecto}
                   value={idDesperfecto} />
        <TextInput style={styles.inputs}
                   placeholder="Id Sitio.."
                   onChangeText={setIdSitio}
                   value={idSitio} />
        <TextInput style={styles.inputs}
                   placeholder="Legajo.."
                   onChangeText={setLegajo}
                   value={legajo} />
        <Pressable
            style={styles.uploadButton}
            onPress={pickImage}
          >
            <Text style={styles.uploadButtonText}>Seleccionar Fotos</Text>
        </Pressable>

          {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>


      <Pressable
        style={styles.wishlistParent}
        onPress={handleSubmit}
      >
        <View style={styles.wishlist}>
          <Text style={styles.publicar}>Publicar</Text>
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
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite1,
    color: Color.colorBlack,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorWhite1,
    color: Color.colorBlack,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


const styles = StyleSheet.create({
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  publicarServicioProfesional: {
    paddingBottom:100,
    flex: 1,
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
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
    width: "80%", // Ancho del contenedor de inputs
    maxWidth: 400, // Máximo ancho para asegurar que no se extienda demasiado
    paddingHorizontal: 20, // Espacio horizontal interno
    paddingBottom: 20, // Espacio inferior para separar los botones
    borderWidth: 1,
    borderColor: Color.neutral400,
    borderRadius: Border.br_base,
  },
  inputs: {
    height: 60, // Altura de los inputs
    borderColor: Color.neutral400,
    borderWidth: 1,
    borderRadius: Border.br_base,
    paddingHorizontal: 10, // Espacio interno horizontal
    marginBottom: 10, // Espacio debajo de cada input
  },
  goBackIcon: {
    position: "absolute",
    top: 20, // Posición desde arriba
    left: 20, // Posición desde la izquierda
  },
  wishlistParent: {
    position: "absolute",
    bottom: 175 , // Posición desde abajo
    right:50,
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
  
  pathLayout: {
    height: "100%",
    width: "100%",
  },
  goBack: {
    left: 149,
    top: 717,
    width: 74,
    height: 77,
    position: "absolute",
  },
  containerPosition: {
    top: "50%",
    position: "absolute",
  },
  buttons1Border: {
    borderWidth: 1,
    borderStyle: "solid",
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
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  buttonsPosition: {
    top: 716,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  text1FlexBox: {
    justifyContent: "center",
    display: "flex",
    color: Color.neutral800,
    fontFamily: FontFamily.tittle2228,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
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
  inputsBorder: {
    borderColor: Color.neutral400,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite1,
  },
  placeholderTypo: {
    lineHeight: 21,
    marginLeft: 8,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.body1422_size,
    letterSpacing: 0,
  },
  eyeFlexBox: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  inputsLayout: {
    height: 46,
    width: 303,
    borderColor: Color.neutral400,
    padding: Padding.p_base,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.colorWhite1,
  },
  time: {
    marginTop: -9,
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    width: 54,
    textAlign: "center",
    letterSpacing: 0,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    color: Color.colorBlack,
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
    width: 68,
    height: 14,
    overflow: "hidden",
  },
  fieldsstatusdefaultDark: {
    height: 44,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  inputStyle: {
    borderColor: Color.secondGrey,
    opacity: 0.3,
    borderRadius: Border.br_base,
    borderStyle: "solid",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
    fontSize: FontSize.body1422_size,
  },
  iconText: {
    top: 15,
    alignItems: "center",
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  group: {
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
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
    height: 34,
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.colorWhite1,
  },
  card: {
    height: "97.31%",
    bottom: "2.69%",
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
    backgroundColor: Color.colorWhite1,
  },
  path: {
    height: "100%",
    bottom: "0%",
  },
  shapeIcon: {
    height: "75.11%",
    width: "74.9%",
    top: "12.44%",
    right: "12.75%",
    bottom: "12.44%",
    left: "12.35%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconsPlus: {
    height: "41.67%",
    width: "19.61%",
    top: "29.07%",
    right: "48.98%",
    bottom: "29.26%",
    left: "31.41%",
    display: "none",
    position: "absolute",
  },
  text: {
    marginTop: -12,
    marginLeft: -23,
    color: Color.neutral100,
    fontFamily: FontFamily.tittle2228,
    fontWeight: "700",
    lineHeight: 24,
    left: "50%",
    textAlign: "center",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    position: "absolute",
  },
  buttons: {
    left: 169,
    backgroundColor: Color.neutral800,
    width: 128,
    height: 54,
  },
  text1: {
    marginTop: -13.5,
    marginLeft: -51.5,
    width: 102,
    height: 26,
    lineHeight: 24,
    left: "50%",
    justifyContent: "center",
    display: "flex",
    color: Color.neutral800,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
  },
  buttons1: {
    borderColor: Color.neutral800,
    width: 129,
    height: 55,
    left: 24,
    borderWidth: 1,
    borderStyle: "solid",
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
    top: "0%",
    position: "absolute",
  },
  addImageIcon: {
    top: 630,
    width: 77,
    height: 72,
    left: 16,
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
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
  },
  eyeIcon1: {
    marginLeft: 8,
    display: "none",
  },
  menuVerticalIcon: {
    top: 5,
    left: 292,
    width: 51,
    height: 43,
    position: "absolute",
  },
  inputsParent: {
    top: 189,
    width: 343,
    height: 53,
    left: 14,
    position: "absolute",
  },
  eyeGroup: {
    display: "none",
  },
  placeholder2: {
    marginLeft: 8,
    color: Color.colorBlack,
    lineHeight: 21,
  },
});

export default GenerarReclamo;

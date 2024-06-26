import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView, TextInput } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase, useRoute, RouteProp  } from "@react-navigation/native";
import { Color, Border, FontFamily, Padding, FontSize } from "../GlobalStyles";

type RouteParams = {
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

const Visitante_BsquedaDeServicio = () => {
  const [idServicio, setID] = useState(""); // Estado para almacenar el ID ingresado
  const [servicios, setServicios] = useState<Servicio[]>([]); // Estado para almacenar los servicios recibidos

  useEffect(() => {
    const fetchServicios = async () => {
      try {
        const response = await fetch('http://192.168.1.8:5000/servicios/getAll');
        if (!response.ok) {
          throw new Error('Error al obtener los servicios');
        }
        const data = await response.json();
        setServicios(data); // Almacenar los servicios recibidos en el estado local
        //console.log(data);  // Log the fetched data instead of servicios
      } catch (error) {
        console.error('Error:', error);
        // Manejo de errores, por ejemplo mostrar un mensaje de error al usuario
      }
    };
    
    fetchServicios();
}, []); // Add an empty dependency array to run the effect only once


 
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const route = useRoute<PantallasRouteProp>();
  const { nombre, apellido, vecino, personal } = route.params || { nombre: '', apellido: '', vecino: false , personal: false};

  const handlePress = () => {
    if (vecino) {
      navigation.navigate("MenuPrincipal_Vecino", { nombre, apellido, vecino, personal });
    } else if (personal) {
      navigation.navigate("MenuPrincipal_Personal", { nombre, apellido, vecino, personal });
    } 
    else
    {
      navigation.navigate("MenuPrincipal_Visitante");
    }
  };

  const serviciosFiltrados = servicios.filter(servicio => {
    if (idServicio.trim() === "") {
      return true; 
    } else {
      return servicio.idServicio.toString() === idServicio.trim();
    }
  });

  return (
    <View style={[styles.bsquedaDeServicio, styles.cardLayout]}>
      <Text style={styles.buscarServicios}>Buscar Servicios</Text>
      
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.inputsBorder}>
          <View style={styles.eyeParent}>
            <Image
                  style={styles.searchIcon}
                  contentFit="cover"
                  source={require("../assets/search.png")}
                />
            <TextInput
                    style={[styles.placeholder, styles.buscarServicio]}
                    placeholder="ID Servicio..."
                    onChangeText={setID}
                    value={idServicio}
                  />
            </View>
        </View>
      </View>

      <View style={styles.inputsParent}>
        <View style={[styles.inputs, styles.inputsBorder  ]}>
        <ScrollView>
          {serviciosFiltrados.map(servicio => (
            <View key={servicio.idServicio} style={styles.servicioContainer}>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize:16 }}>ID: {servicio.idServicio}</Text>
              <Text style={styles.headerText}>Descripcion: {servicio.descripcion}</Text>
              <Text style={styles.headerText}>Tipo: {servicio.tipo}</Text>
              <Text style={styles.headerText}>Estado: {servicio.estado}</Text>
            </View>
          ))}
        </ScrollView>
        </View>
      </View>

      <Pressable
        style={styles.goBack}
        onPress={handlePress}
      >
        <Image
          style={styles.pathLayout}
          contentFit="cover"
          source={require("../assets/go-back.png")}
        />
      </Pressable>

    
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    top: 314,
    width: 343,
    left: 14,
    position: "absolute",
  },
  eyeParent: {
    width: 263,
    flexDirection: "row",
    alignItems: "center",
  },
  servicioContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontSize: 16,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  cardLayout: {
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
  headersearch2Position: {
    width: 375,
    left: 0,
    top: 0,
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
  },
  buttonsPosition: {
    top: 716,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  pathLayout: {
    height: "100%",
    width: "100%",
  },
  text1FlexBox: {
    justifyContent: "center",
    color: Color.neutral800,
    display: "flex",
    fontFamily: FontFamily.tittle2228,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
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
  eyeFlexBox: {
    width: 263,
    alignItems: "center",
    flexDirection: "row",
  },
  placeholderTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
  },
  eyeIconLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  inputsLayout: {
    height: 59,
    width: 303,
    padding: Padding.p_base,
    borderColor: Color.neutral400,
    left: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.colorWhite1,
  },
  groupLayout: {
    height: 53,
    position: "absolute",
  },
  buscarServicioPosition: {
    top: 7,
    position: "absolute",
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
  
  fieldsstatusdefaultDark: {
    height: 44,
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
    left: 16,
    alignItems: "center",
    flexDirection: "row",
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
    overflow: "hidden",
    backgroundColor: Color.colorWhite1,
    width: 375,
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
    width: "100%",
    backgroundColor: Color.colorWhite1,
  },
  path: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
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
  buscarServicios: {
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
  goBack: {
    left: 149,
    top: 717,
    width: 74,
    height: 77,
    position: "absolute",
  },
  placeholder: {
    color: Color.neutral400,
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.body1422_size,
  },
  eyeIcon1: {
    marginLeft: 8,
  },
  inputs: {
    height: 371,
  },
  placeholder1: {
    marginLeft: 8,
    lineHeight: 21,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    fontSize: FontSize.body1422_size,
    color: Color.colorBlack,
  },
  inputs1: {
    top: 22,
  },
  inputs2: {
    top: 278,
  },
  inputs3: {
    top: 108,
  },
  inputs4: {
    top: 193,
  },
  inputsParent: {
    top: 283,
    height: 370,
    width: 343,
    left: 20,
    position: "absolute",
  },
  searchIcon: {
    top: 5,
    width: 53,
    height: 32,
    left: 0,
    position: "absolute",
  },
  groupContainer: {
    width: 343,
    left: 0,
    top: 0,
    height: 53,
  },
  buscarServicio: {
    left: 58,
    fontSize: FontSize.size_xl,
    lineHeight: 30,
    color: Color.colorGray_100,
    width: 205,
    height: 40,
    textAlign: "justify",
    fontFamily: FontFamily.bodyMediumRegular,
    letterSpacing: 0,
    display: "flex",
    top: 7,
    alignItems: "center",
  },
  menuVerticalIcon: {
    left: 298,
    width: 51,
    height: 43,
  },
  groupParent: {
    top: 168,
    left: 18,
    width: 500,
  },
  addIcon: {
    top: 671,
    left: 280,
    width: 77,
    height: 72,
    position: "absolute",
  },
  bsquedaDeServicio: {
    flex: 1,
    height: 848,
    overflow: "hidden",
  },
});

export default Visitante_BsquedaDeServicio;

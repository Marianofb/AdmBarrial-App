import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";

import Principal from "./screens/Principal";
import CambiarContraseña from "./screens/CambiarContraseña";
import Vecino_GenerarClave from "./screens/Vecino_GenerarClave";
import InicioDeSesion from "./screens/InicioDeSesion";
import MenuPrincipal_Vecino from "./screens/MenuPrincipal_Vecino";
import MenuPrincipal_Personal from "./screens/MenuPrincipal_Personal";
import MenuPrincipal_Visitante from "./screens/MenuPrincipal_Visitante";
import Visitante_BsquedaDeServicio from "./screens/Visitante_BsquedaDeServicio";
import RegistroDeDenuncias from "./screens/RegistroDeDenuncias";
import ConsultaDeDenuncias from "./screens/ConsultaDeDenuncias";
import BsquedaDeServicio from "./screens/BsquedaDeServicio";
import ConsultaDeReclamo from "./screens/ConsultaDeReclamo";
import GenerarReclamo from "./screens/GenerarReclamo";
import PublicarServicio from "./screens/PublicarServicio";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Principal"
              component={Principal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CambiarContraseña"
              component={CambiarContraseña}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="Vecino_GenerarClave"
              component={Vecino_GenerarClave}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioDeSesion"
              component={InicioDeSesion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPrincipal_Vecino"
              component={MenuPrincipal_Vecino}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPrincipal_Personal"
              component={MenuPrincipal_Personal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPrincipal_Visitante"
              component={MenuPrincipal_Visitante}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroDeDenuncias"
              component={RegistroDeDenuncias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConsultaDeDenuncias"
              component={ConsultaDeDenuncias}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BsquedaDeServicio"
              component={BsquedaDeServicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Visitante_BsquedaDeServicio"
              component={Visitante_BsquedaDeServicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ConsultaDeReclamo"
              component={ConsultaDeReclamo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GenerarReclamo"
              component={GenerarReclamo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PublicarServicio"
              component={PublicarServicio}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};



export default App;

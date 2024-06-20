const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import PublicarServicioNoProfesio from "./screens/PublicarServicioNoProfesio";
import FlujoVecinoText from "./components/FlujoVecinoText";
import Principal from "./screens/Principal";
import InicioDeSesin from "./screens/InicioDeSesin";
import MenuPrincipal from "./screens/MenuPrincipal";
import RegistroDeDenuncias from "./screens/RegistroDeDenuncias";
import ConsultaDeDenuncias from "./screens/ConsultaDeDenuncias";
import BsquedaDeServicio from "./screens/BsquedaDeServicio";
import PublicarServicioNoProfesio1 from "./screens/PublicarServicioNoProfesio1";
import PublicarServicioProfesional from "./screens/PublicarServicioProfesional";
import Configuracin from "./screens/Configuracin";
import ConsultaDeReclamo from "./screens/ConsultaDeReclamo";
import GenerarReclamo from "./screens/GenerarReclamo";
import CambiarContrasea from "./screens/CambiarContrasea";
import Configuracin1 from "./screens/Configuracin1";
import CambiarContrasea1 from "./screens/CambiarContrasea1";
import RegistroDeDenuncias1 from "./screens/RegistroDeDenuncias1";
import GenerarReclamo1 from "./screens/GenerarReclamo1";
import PublicarServicioNoProfesio2 from "./screens/PublicarServicioNoProfesio2";
import PublicarServicioNoProfesio3 from "./screens/PublicarServicioNoProfesio3";
import InicioDeSesin1 from "./screens/InicioDeSesin1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PublicarServicioNoProfesio"
              component={PublicarServicioNoProfesio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Principal"
              component={Principal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioDeSesin"
              component={InicioDeSesin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPrincipal"
              component={MenuPrincipal}
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
              name="PublicarServicioNoProfesio1"
              component={PublicarServicioNoProfesio1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PublicarServicioProfesional"
              component={PublicarServicioProfesional}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Configuracin"
              component={Configuracin}
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
              name="CambiarContrasea"
              component={CambiarContrasea}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Configuracin1"
              component={Configuracin1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CambiarContrasea1"
              component={CambiarContrasea1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RegistroDeDenuncias1"
              component={RegistroDeDenuncias1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GenerarReclamo1"
              component={GenerarReclamo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PublicarServicioNoProfesio2"
              component={PublicarServicioNoProfesio2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PublicarServicioNoProfesio3"
              component={PublicarServicioNoProfesio3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InicioDeSesin1"
              component={InicioDeSesin1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

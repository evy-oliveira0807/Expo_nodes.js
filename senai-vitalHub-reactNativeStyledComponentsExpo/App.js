import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navegacao } from "./src/screens/Navegacao/Navegacao";
import { Login } from "./src/screens/Login/Login";

//  Instancia do StackNavigator
const Stack = createNativeStackNavigator();

//import das fontes

import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium   } from "@expo-google-fonts/montserrat-alternates";

export default function App() {

  const[fontsLoaded, fontsError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium
  })

  if(!fontsLoaded && !fontsError){
    return null;
  }
  return (

    //  Navagação
    //  Container
    //  StackNavigator
    //  StackScreen

    //  Estrutura de navegação
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator>
        <Stack.Screen
          //  Nome da tela
          name='Navegacao'
          //  Componente que será chamdo
          component={Navegacao}
          //  Título da tela
          options={{ title: 'Navegacao' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='Login'
          //  Componente que será chamdo
          component={Login}
          //  Título da tela
          options={{ title: 'Login' }}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

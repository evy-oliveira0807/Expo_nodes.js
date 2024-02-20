
import { Navigation } from "./src/screens/Navigation/Navigation";
import { Login } from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts, MontserratAlternates_600SemiBold, MontserratAlternates_500Medium, MontserratAlternates_700Bold, Quicksand_400Regular, Quickand_600SemiBold } from '@expo-google-fonts/montserrat-alternates';
import { Quicksand_500Medium } from '@expo-google-fonts/quicksand';


import { RecPassword } from "./src/screens/RecPassword/RecPassword";
import { Verification } from "./src/screens/Verification/Verification";
import { CreateAccount } from "./src/screens/CreateAccount/CreateAccount";
import { Redefinir } from "./src/screens/Redefinir/Redefinir";
import { Perfil } from "./src/screens/Perfil/Perfil";
import { Home } from "./src/screens/Home/Home";

//  Instancia do StackNavigator
const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    MontserratAlternates_600SemiBold,
    MontserratAlternates_500Medium,
    MontserratAlternates_700Bold,
    Quicksand_500Medium,
    Quicksand_400Regular,
    Quickand_600SemiBold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    //  Navagação
    //  Container
    //  StackNavigator
    //  StackScreen

    //  Envolve a estrutura de navegação
    <NavigationContainer>
      {/* Componente para navegação */}
      <Stack.Navigator initialRouteName="Navegacao">
        {/* Tela */}
        <Stack.Screen
          //  Nome da tela
          name='Navegacao'
          //  Componente que será chamdo
          component={Navigation}
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

        <Stack.Screen
          //  Nome da tela
          name='RecPassword'
          //  Componente que será chamdo
          component={RecPassword}
          //  Título da tela
          options={{ title: 'Recuperar Senha' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='Redefinir'
          //  Componente que será chamdo
          component={Redefinir}
          //  Título da tela
          options={{ title: 'Redefinir Senha' }}
        />
        <Stack.Screen
          //  Nome da tela
          name='Perfil'
          //  Componente que será chamdo
          component={Perfil}
          //  Título da tela
          options={{ title: 'Perfil' }}
        />
        
        <Stack.Screen
          //  Nome da tela
          name='Verification'
          //  Componente que será chamdo
          component={Verification}
          //  Título da tela
          options={{ title: 'Verifição do email' }}
        />

        <Stack.Screen
          //  Nome da tela
          name='CreateAccount'
          //  Componente que será chamdo
          component={CreateAccount}
          //  Título da tela
          options={{ title: 'Criar Conta' }}
        />


           <Stack.Screen
          //  Nome da tela
          name='Home'
          //  Componente que será chamdo
          component={Home}
          //  Título da tela
          options={{ title: 'Home' }}
        />




      </Stack.Navigator>
    </NavigationContainer>
  )
}

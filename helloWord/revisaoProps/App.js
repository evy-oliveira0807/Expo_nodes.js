import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Person from './src/Person/Person';

export default function App() {
  return (
   <SafeAreaView>
    <Person name='Evelyn' age={18}/>
   </SafeAreaView>
  );
}


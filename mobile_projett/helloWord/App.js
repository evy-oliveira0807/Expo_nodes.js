import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>

       <Image
        style={styles.image}
        source={{ 
          uri: "https://reactnative.dev/docs/assets/p_cat2.png"
        }}
      />
      <Text style={styles.text}>Hello, Word!</Text>

     

      {/* texto */}
      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />

      {/* botao */}
      <TouchableOpacity style={styles.btn}>
        <Text>exemplo de botão </Text>
      </TouchableOpacity>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 50,
    fontWeight: "500"

  },
  input: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "gray",
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
  },
  btn: {
    borderColor: "black",
    width: "50%",
    height: 40,
    borderWidth: 1,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5

  }
});

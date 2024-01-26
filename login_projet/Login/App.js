import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={styles.image}
      source={{
        uri:"https://static.vecteezy.com/system/resources/thumbnails/005/076/592/small/hacker-mascot-for-sports-and-esports-logo-free-vector.jpg"
      }}
      />
      <Text style={styles.text}>OperationStealth</Text>
      
      <Text style={styles.text1}>Email:</Text>
        {/* texto */}
      <TextInput
       style={styles.input1}
       defaultValue="Digite seu Email:" 
       />

<Text style={styles.text1}>Senha:</Text>
       {/* texto */}
       <TextInput
       style={styles.input2}
       defaultValue="Digite sua Senha:" 
       />  

       <TouchableOpacity style={styles.btn}>
        <Text>Entrar</Text>
       </TouchableOpacity>
        

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"black"
  },
  text:{
      color: "white",
      marginBottom:30,
      fontSize: 20

  },
  text1:{
      color: "white",    

  },
  input1: {
    width: "80%",
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  input2: {
    width: "80%",
    height: 30,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#D3D3D3",
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 5,
    marginBottom:20


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

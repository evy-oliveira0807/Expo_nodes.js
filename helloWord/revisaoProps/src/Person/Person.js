import { StyleSheet, View, Text } from "react-native";

//componente Person
const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {idade}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e0e0e0",
        padding:10,
        magin: 10,
        borderRadius: 5

    }

})
export default Person;
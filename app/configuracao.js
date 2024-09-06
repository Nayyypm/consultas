import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Configuracao() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Configurações</Text>
            <Link href="/" style={styles.botao}>Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'black',
        backgroundColor: "#ffa8e1",
        padding: 20,
        borderRadius: 15,
        width: '80%',
    },
});

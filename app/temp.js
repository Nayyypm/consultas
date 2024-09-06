import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem-vindo!</Text>
            <Link href="/home" style={styles.botao}>Ir para Home</Link>
            <Link href="/login" style={styles.botao}>Ir para login</Link>
            <Link href="/cadastro1" style={styles.botao}>Ir para cadastro 1</Link>
            <Link href="/cadastro2" style={styles.botao}>Ir para cadastro 2</Link>
            <Link href="/cadastro3" style={styles.botao}>Ir para cadastro 3</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0f6',
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
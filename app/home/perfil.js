import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Meu perfil</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../src/images/user-image.png')} 
                    style={styles.image}
                />
            </View>
            <Text style={styles.infoTitle}>Informações pessoais:</Text>
            <Text style={styles.info}>Nome: João da Silva</Text>
            <Text style={styles.info}>Data de Nascimento: 01/01/1990</Text>
            <Text style={styles.info}>Localização: São Paulo, SP</Text>
            <Text style={styles.subtitulo}>Histórico Médico:</Text>
            <Text style={styles.info}>- Sinusite</Text>
            <Text style={styles.info}>- Bronquite</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#339CFF',
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#339CFF', 
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#339CFF', 
    },
    info: {
        fontSize: 16,
        marginVertical: 5,
    },
    subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#339CFF',
    },
});

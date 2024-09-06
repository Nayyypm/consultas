import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Explorar() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a especialidade"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a localização"
                    />
                </View>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Buscar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.resultadoTexto}>Resultado da busca</Text>

            <View style={styles.consultaContainer}>
                <View style={styles.consultaInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../src/images/medico.png')} 
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Dr. João Silva</Text>
                        <Text style={styles.infoText}>Cardiologista</Text>
                        <Text style={styles.infoText}>20/09/2024</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.cancelarBotao}>
                    <Text style={styles.cancelarBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.consultaContainer}>
                <View style={styles.consultaInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../src/images/medico.png')} 
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Dr. João Silva</Text>
                        <Text style={styles.infoText}>Cardiologista</Text>
                        <Text style={styles.infoText}>20/09/2024</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.cancelarBotao}>
                    <Text style={styles.cancelarBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.consultaContainer}>
                <View style={styles.consultaInnerContainer}>
                    <View style={styles.imageWrapper}>
                        <Image
                            source={require('../../src/images/medico.png')} 
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Dr. João Silva</Text>
                        <Text style={styles.infoText}>Cardiologista</Text>
                        <Text style={styles.infoText}>20/09/2024</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.cancelarBotao}>
                    <Text style={styles.cancelarBotaoTexto}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    inputWrapper: {
        marginTop: 1,
        padding: 20, 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '100%', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, 
    },
    botao: {
        width: '100%',
        backgroundColor: '#0B3B60',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    resultadoTexto: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
        textAlign: 'center',
    },
    consultaContainer: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        width: '100%', 
    },
    consultaInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    imageWrapper: {
        marginRight: 15,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    infoContainer: {
        flex: 1,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
        textAlign: 'left',
    },
    cancelarBotao: {
        backgroundColor: '#0B3B60',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    cancelarBotaoTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

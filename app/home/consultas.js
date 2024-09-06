import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Consultas() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Consultas</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoTexto}>Agendar outra consulta</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.proximasConsultasContainer}>
                <Text style={styles.proximasConsultasTitulo}>Próximas consultas:</Text>
                <View style={styles.consultaContainerProximas}>
                    <View style={styles.consultaInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../src/images/medico.png')} 
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Dra. Ana Lúcia</Text>
                            <Text style={styles.infoText}>Cardiologista</Text>
                            <Text style={styles.infoText}>20/09/2024</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.cancelarBotao}>
                        <Text style={styles.cancelarBotaoTexto}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.passadasConsultasContainer}>
                <Text style={styles.passadasConsultasTitulo}>Consultas passadas:</Text>
                <View style={styles.consultaContainerPassadas}>
                    <View style={styles.consultaInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../src/images/medico.png')} 
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Dr. Carlos Silva</Text>
                            <Text style={styles.infoText}>Dermatologista</Text>
                            <Text style={styles.infoText}>10/08/2024</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.agendarBotao}>
                        <Text style={styles.agendarBotaoTexto}>Agendar consulta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.spacer} />
                <View style={styles.consultaContainerPassadas}>
                    <View style={styles.consultaInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../src/images/medico.png')} 
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Dr. Carlos Silva</Text>
                            <Text style={styles.infoText}>Dermatologista</Text>
                            <Text style={styles.infoText}>10/08/2024</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.agendarBotao}>
                        <Text style={styles.agendarBotaoTexto}>Agendar consulta</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spacer} />
                <View style={styles.consultaContainerPassadas}>
                    <View style={styles.consultaInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../src/images/medico.png')} 
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Dr. Carlos Silva</Text>
                            <Text style={styles.infoText}>Dermatologista</Text>
                            <Text style={styles.infoText}>10/08/2024</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.agendarBotao}>
                        <Text style={styles.agendarBotaoTexto}>Agendar consulta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.spacer} />
                <View style={styles.consultaContainerPassadas}>
                    <View style={styles.consultaInnerContainer}>
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../../src/images/medico.png')} 
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Dr. Carlos Silva</Text>
                            <Text style={styles.infoText}>Dermatologista</Text>
                            <Text style={styles.infoText}>10/08/2024</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.agendarBotao}>
                        <Text style={styles.agendarBotaoTexto}>Agendar consulta</Text>
                    </TouchableOpacity>
                </View>

                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    botao: {
        backgroundColor: '#0B3B60',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    botaoTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    proximasConsultasContainer: {
        marginTop: 30,
        marginHorizontal: 20,
    },
    proximasConsultasTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0B3B60',
        marginBottom: 10,
    },
    separator: {
        height: 1,
        backgroundColor: '#c0c0c0',
        marginVertical: 20,
        marginHorizontal: 20,
    },
    passadasConsultasContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    passadasConsultasTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0B3B60',
        marginBottom: 10,
    },
    consultaContainerProximas: {
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
    },
    consultaContainerPassadas: {
        padding: 15,
        backgroundColor: '#C2E1FF', 
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        borderColor: '#c0c0c0',
        borderWidth: 1,
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
        width: '100%',
    },
    cancelarBotaoTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    agendarBotao: {
        backgroundColor: '#0B3B60',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
    },
    agendarBotaoTexto: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    spacer: {
        height: 20, 
    },
});

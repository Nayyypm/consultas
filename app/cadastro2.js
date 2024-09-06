import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Cadastro2() {
    const navigation = useNavigation();

    // Função para avançar para a próxima tela
    const handleAdvance = () => {
        navigation.navigate('cadastro3');
    };

    // Função para voltar para a tela anterior
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView 
                contentContainerStyle={styles.scrollViewContent}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../src/images/logo.png')} 
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.title}>Complete seus dados</Text>

                <View style={styles.contentContainer}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira seu CEP"
                            keyboardType="numeric"
                            maxLength={8}
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Endereço</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira seu endereço"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Número</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Número da residência"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Complemento</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Complemento (opcional)"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(00)00000-0000"
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.voltarBotao}
                        onPress={handleBack}
                    >
                        <Text style={styles.voltarBotaoText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.botao}
                        onPress={handleAdvance}
                    >
                        <Text style={styles.botaoText}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: 30,
    },
    logo: {
        width: 160,
        height: 160,
    },
    title: {
        fontSize: 25,
        marginVertical: 30,
        color: '#6B6E71',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentContainer: {
        width: '100%',
    },
    inputGroup: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        color: '#0B3B60',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        height: 50,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    voltarBotao: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        backgroundColor: "#D3D3D3", 
        padding: 15,
        borderRadius: 15,
        width: '100%',
        marginBottom: 15,
    },
    voltarBotaoText: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botao: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        backgroundColor: "#0B3B60",
        padding: 15,
        borderRadius: 15,
        width: '100%',
    },
    botaoText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

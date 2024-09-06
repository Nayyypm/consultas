import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    const handleForgotPassword = () => {
        Alert.alert('Recuperar Senha', 'recuperação de senha.');
    };

    const handleSignUp = () => {
        navigation.navigate('cadastro1');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../src/images/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.subtitulo}>Faça login em sua conta</Text>
            </View>
            
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Text style={styles.label}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>
                    Ainda não tem conta? 
                    <Text style={styles.signupLink} onPress={handleSignUp}> Faça seu cadastro!</Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoContainer: {
        marginTop: 130,
        alignItems: 'center',
        width: '100%',
    },
    logo: {
        width: 160, 
        height: 160, 
    },
    subtitulo: {
        fontSize: 23,
        textAlign: 'center',
        color: '#6B6E71',
        marginTop: 60,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
        marginTop: 50,
    },
    label: {
        fontSize: 18,
        color: '#0B3B60',
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: 25,
        fontSize: 16,
        height: 50,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#0B3B60',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPassword: {
        color: '#0B3B60',
        fontSize: 16,
        marginTop: 10,
        textDecorationLine: 'underline',
        textAlign:'center',
    },
    signupContainer: {
        position: 'absolute',
        bottom: 20,
        alignItems: 'center',
    },
    signupText: {
        fontSize: 16,
        color: '#0B3B60',
    },
    signupLink: {
        color: '#007BFF', 
        textDecorationLine: 'underline',
    },
});

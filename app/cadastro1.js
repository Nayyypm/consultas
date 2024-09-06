import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

export default function Cadastro1() {
    const navigation = useNavigation(); 

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const handleAdvance = () => {
        
        navigation.navigate('cadastro2', { name, email, password });
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../src/images/logo.png')} 
                    style={styles.logo}
                />
            </View>
            <Text style={styles.dadosbasicosText}>
                Insira alguns dados{'\n'}básicos:
            </Text>
            <View style={styles.contentContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nome</Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                        placeholder="Digite seu nome"
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        placeholder="Digite seu email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Crie uma Senha</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        placeholder="Digite uma senha"
                        secureTextEntry
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Repita a Senha</Text>
                    <TextInput
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        style={styles.input}
                        placeholder="Repita a senha"
                        secureTextEntry
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.botao} onPress={handleAdvance}>
                <Text style={styles.botaoText}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20, 
    },
    logoContainer: {
        width: '100%', 
        alignItems: 'center',
        paddingVertical: 20, 
    },
    logo: {
        width: 160, 
        height: 160,
    },
    dadosbasicosText: {
        fontSize: 25, 
        textAlign: 'center',
        marginVertical: 30, 
        color: '#6B6E71', 
        fontWeight: 'bold',
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
    botao: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20,
        color: 'black',
        backgroundColor: "#0B3B60",
        padding: 20,
        borderRadius: 15,
        width: '80%',
        alignSelf: 'center', 
    },
    botaoText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center',
    },
});

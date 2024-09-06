import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

export default function Cadastro3() {
    const [selectedPlan, setSelectedPlan] = useState('');
    const navigation = useNavigation(); 

    const plans = [
        'Sulamerica',
        'Unimed',
        'Bradesco',
        'Amil',
        'Biosaúde',
        'Biovida',
        'Outros',
        'Não tenho plano'
    ];

    const togglePlan = (plan) => {
        setSelectedPlan(plan === selectedPlan ? '' : plan);
    };

   
    const handleAdvance = () => {
        navigation.navigate('home');
    };

   
    const handleBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../src/images/logo.png')} 
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.perguntaText}>
                    Para finalizar, qual
                </Text>
                <Text style={styles.perguntaText}>
                    seu plano de saúde?
                </Text>
                <Text style={styles.selecioneText}>
                    Selecione os planos:
                </Text>

                <View style={styles.plansContainer}>
                    {plans.map((plan, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.planOption}
                            onPress={() => togglePlan(plan)}
                        >
                            <View style={styles.checkboxContainer}>
                                <View style={[
                                    styles.checkbox,
                                    selectedPlan === plan && styles.checkedCheckbox
                                ]}>
                                    {selectedPlan === plan && (
                                        <Ionicons name="checkmark" size={20} color="white" />
                                    )}
                                </View>
                                <Text style={styles.planText}>{plan}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Botões de Voltar e Avançar */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.voltarBotao}
                        onPress={handleBack} 
                    >
                        <Text style={styles.voltarBotaoText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.avancarBotao}
                        onPress={handleAdvance}
                    >
                        <Text style={styles.avancarBotaoText}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 40, 
        marginBottom: 30, 
    },
    logo: {
        width: 150,
        height: 150, 
    },
    perguntaText: {
        fontSize: 27, 
        color: '#6B6E71', 
        textAlign: 'center',
        fontWeight: 'bold',
    },
    selecioneText: {
        fontSize: 20,
        color: '#0B3B60', 
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginTop: 30, 
        fontWeight: 'bold',
    },
    plansContainer: {
        width: '100%',
        marginTop: 20,
    },
    planOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checkedCheckbox: {
        backgroundColor: '#0B3B60',
        borderColor: '#00796B',
    },
    planText: {
        fontSize: 18,
        color: '#333',
    },
    buttonContainer: {
        marginTop: 30, 
        width: '100%',
        alignItems: 'center',
    },
    voltarBotao: {
        backgroundColor: '#D3D3D3', 
        paddingVertical: 20, 
        paddingHorizontal: 130, 
        borderRadius: 15,
        marginBottom: 20, 
    },
    voltarBotaoText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    avancarBotao: {
        backgroundColor: '#0B3B60', 
        paddingVertical: 20, 
        paddingHorizontal: 130, 
        borderRadius: 15,
    },
    avancarBotaoText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

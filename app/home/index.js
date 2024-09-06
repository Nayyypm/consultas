import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from 'react-native';

export default function Home() {
    return (
        <KeyboardAvoidingView 
            style={styles.container} 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={require('../../src/images/logo_escrito.png')} 
                    style={styles.logo}
                />
                <Text style={styles.titulo}>Boas-vindas!</Text>
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

                <View style={styles.depoimentosContainer}>
                    <Text style={styles.depoimentosTitulo}>Depoimentos</Text>
                    
                    <View style={styles.depoimento}>
                        <Text style={styles.depoimentoTexto}>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </Text>
                        <Text style={styles.depoimentoAutor}>
                            - Júlio, 40 anos, São Paulo/SP.
                        </Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.depoimento}>
                        <Text style={styles.depoimentoTexto}>
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        </Text>
                        <Text style={styles.depoimentoAutor}>
                            - João Santos, 45 anos, Rio de Janeiro - RJ
                        </Text>
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.depoimento}>
                        <Text style={styles.depoimentoTexto}>
                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores.
                        </Text>
                        <Text style={styles.depoimentoAutor}>
                            - João Santos, 45 anos, Rio de Janeiro - RJ
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    logo: {
        position: 'absolute',
        top: -70,
        left: 5,
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    titulo: {
        position: 'absolute',
        top: 80,
        left: 25,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#339CFF',
    },
    inputWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 150,
        padding: 20, 
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        width: '90%',
        height: 230, 
        marginLeft: 20,
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
    depoimentosContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    depoimentosTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#339CFF',
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 20,
    },
    depoimento: {
        marginBottom: 10,
    },
    depoimentoTexto: {
        fontSize: 20,
        color: '#333',
    },
    depoimentoAutor: {
        fontSize: 15,
        color: '#6B6E71',
        marginTop: 5,
        textAlign:  'center',
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 10,
    },
});


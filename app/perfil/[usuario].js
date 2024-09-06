import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserProfile = async (user) => {
    try {
        await AsyncStorage.setItem('userProfile', JSON.stringify(user));
    } catch (error) {
        console.error('Erro ao salvar perfil do usuário', error);
    }
};

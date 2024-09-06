import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login'; 
import Cadastro1 from './screens/Cadastro1'; 
import Home from './screens/Home'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="cadastro1" component={Cadastro1} />
        <Stack.Screen name="home" component={Home} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

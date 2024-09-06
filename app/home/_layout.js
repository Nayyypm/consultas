import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#0B3B60', 
                    borderTopWidth: 0, 
                },
                tabBarActiveTintColor: '#FFFFFF', 
                tabBarInactiveTintColor: 'lightgray',
            }}
        >
            <Tabs.Screen 
                name='index' 
                options={{
                    title: 'Index',
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="home" size={32} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name='consultas' 
                options={{
                    title: 'Consultas',
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="calendar" size={32} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name='explorar' 
                options={{
                    title: 'Explorar',
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="search" size={32} color={color} />
                    ),
                }} 
            />
            <Tabs.Screen 
                name='perfil' 
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ focused, size, color }) => (
                        <FontAwesome name="user" size={32} color={color} />
                    ),
                }} 
            />
        </Tabs>
    );
}


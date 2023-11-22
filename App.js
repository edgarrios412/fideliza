import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import useLocalStorage from './src/helper/hooks/useLocalStorage';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Map from "./src/screens/Map"
import Home from "./src/screens/Home"
import CardScreen from "./src/screens/CardScreen"
import Settings from "./src/screens/Settings"
import EventScreen from './src/screens/EventScreen';
import HistoryScreen from './src/screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Mapa') {
              iconName = focused ? 'map' : 'map-outline';
            } else if (route.name === 'Inicio') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Tarjetas') {
              iconName = focused ? 'gift' : 'gift-outline';
            } else if (route.name === 'Ajustes') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Historial') {
              iconName = focused ? 'list' : 'list-outline';
            }
            // Puedes personalizar el icono aquí según tus necesidades
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#371552', // Color de la pestaña activa
          tabBarInactiveTintColor: 'gray', // Color de la pestaña inactiva
        })}
      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Mapa" component={Map} />
        <Tab.Screen name="Tarjetas" component={CardScreen} />
        <Tab.Screen name="Historial" component={HistoryScreen} />
        <Tab.Screen name="Ajustes" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

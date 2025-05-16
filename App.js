import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LessonScreen from './screens/LessonScreen';
import LoginScreen from './screens/LoginScreen';
import LanguageSelectScreen from './screens/LanguageSelectScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

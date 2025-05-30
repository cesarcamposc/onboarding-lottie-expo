import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/OnboardingScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
   <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}}/>
    <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>    
   </Stack.Navigator>
  )
}

export default AppNavigation
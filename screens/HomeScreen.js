import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from 'expo-router'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleReset = () =>{
        navigation.push('Onboarding')
    }
  return (
    <View style={styles.container}>
        <LottieView style={styles.lottie} source={require('../assets/animations/Animation - 1742872724814.json')} autoPlay loop/>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#91FDB0FF'
    },

    lottie: {
        width: 300,
        height: 300,
    },
    
    resetButton: {
        backgroundColor: 'orange',
        padding: 15,
        borderRadius: 10,
    }
})
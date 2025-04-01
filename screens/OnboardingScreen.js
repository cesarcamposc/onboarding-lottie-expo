import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper'
import LottieView from 'lottie-react-native'

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding
      pages={[
        {   
            backgroundColor: '#DD0906',
            image: (
                <View>
                    <LottieView source={require('../assets/animations/Animation - 1743039260966.json')} autoPlay loop style={styles.lottie}/>
                </View>
            ),
            title: 'Onboarding Screen',
            subtitle: 'Done with React native Onboarding Swiper this is better Pretty'
        },

        {
            backgroundColor: '#06DD58FF',
            image: (
                <View>
                    <LottieView source={require('../assets/animations/Animation - 1743039115549.json')} autoPlay loop style={styles.lottie}/>
                </View>
            ),
            title: 'Main Screen',
            subtitle: 'Done with React native Onboarding Swiper this is better Pretty'
        },

        {
            backgroundColor: '#384DE9FF',
            image: (
                <View>
                    <LottieView source={require('../assets/animations/Animation - 1743039200685.json')} autoPlay loop style={styles.lottie}/>
                </View>
            ),
            title: 'Super Screen',
            subtitle: 'Done with React native Onboarding Swiper this is better Pretty'
        }
      ]} 
      />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'orange',
    },

    lottie: {
        width: 300,
        height: 300,
    }


})
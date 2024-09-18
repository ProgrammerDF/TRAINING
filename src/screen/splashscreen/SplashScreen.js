import { ActivityIndicator, Image, StatusBar, StyleSheet, Text, useAnimatedValue, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('Login')
    }, 3000);
  })
  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={'#1e42a0'}/>
    <Image source={require('../../asset/logodf.png')}
           style={styles.logo}
           />
    {/* <ActivityIndicator size={'large'} color={'white'} style={styles.loading}/> */}
      {/* <Text style={styles.text}>CNN</Text> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1e42a0',
        alignItems:'center',
        justifyContent:'center'
    },
    logo:{
        width:300,
        height:300
    },
    text:{
        fontSize:20,
        color:'black'
    },
    loading:{
        height:100,
        width:100
    }
})
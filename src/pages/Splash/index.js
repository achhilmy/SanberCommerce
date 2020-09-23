import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ILLogo } from '../../assets';

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('GetStarted')
    }, 3000)
  },[])
  return (
    <View style={ styles.pages}>
      <ILLogo />      
    </View>
  )
}

const styles = StyleSheet.create({
    pages: {
        backgroundColor:'#FEFEFE', 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
        fontFamily:'Montserrat-SemiBold',
    }
})

export default Splash;
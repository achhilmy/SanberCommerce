import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconTick } from '../../../assets'

const TickIcon = ({type}) => {

    return (
        <View style={styles.content(type)}>
            <IconTick />
         </View>
    )
}

export default TickIcon

const styles = StyleSheet.create({
    content:(type) =>({  
        backgroundColor:type ==='dark' ? '#E6EAEE': '#FFFFFF' ,
        width:24, 
        height: 24, 
        borderWidth: 1 , 
        alignItems:'center', 
        justifyContent:'center', 
        borderRadius:24/2})
})

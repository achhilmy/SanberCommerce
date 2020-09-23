import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Button = ({type,onPress, title}) => {
    return (
        <TouchableOpacity style={styles.container(type)}onPress={onPress}> 
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:(type) =>({
        backgroundColor: type === 'secondary'? 'white':'#F77866',
        paddingVertical:16,
        paddingLeft:110,
        paddingRight:110,
        borderRadius:6,
        borderColor:'#E6EAEE',
        borderWidth:1
    }),
    text:(type)=>({
        fontSize: 16,
        fontWeight:'600',
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : 'white',
        fontFamily:'Montserrat-SemiBold',
    })
})

export default Button;


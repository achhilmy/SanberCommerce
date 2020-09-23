
import React from 'react';
import { View,TextInput, StyleSheet, Text} from 'react-native';



const Input = ({label}) => {
    return (
        <View>
            <Text style={styles.label} >{label}</Text>
            <TextInput style={styles.input}/>                
        </View>
    )
};
const styles = StyleSheet.create({
    input: {
        borderWidth : 0,
        borderRadius: 10,
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor:'#E6EAEE',
    },
    label:{
        paddingLeft:12,
        fontSize: 16,        
        marginBottom: 0,
        fontFamily: 'Nunito-Reguler'
    }
});

export default Input;

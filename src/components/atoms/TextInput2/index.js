import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

const TextInput2 = ({apply}) => {
    return (
      <View style={styles.content}>
        <TextInput style={styles.inputtext} />
        <TouchableOpacity>
          <Text style={styles.desc}>{apply}</Text>
        </TouchableOpacity>
      </View>
    );
}

export default TextInput2   

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        color:'#E6EAEE',
        borderRadius:7,
        padding:0,
    }, 
    inputtext:{
        padding:14,
        paddingLeft:20,      
        borderRadius: 7,
        maxHeight:45,
        flex: 1,
        color:'#4D4D4D',
        backgroundColor: '#E6EAEE'


    }, 
    desc:{
        fontSize:12,
        color:'#F77866',
        paddingLeft:18,
        marginTop: 12,
        right: 10,
        
       

    }
})

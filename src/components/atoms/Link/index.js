import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Link = ({question,title, size, onPress, align}) => {
    return (
        <View style={styles.container(align)}>
            <Text>{question}</Text>
            <Text style={styles.desc(size)} onPress={onPress}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:(align) =>({
        flexDirection: 'row',
        marginTop: 10,
        textAlign: align,
        
    }),
    desc: (size) => ({
        fontSize: size, 
        fontFamily:'Monserrat-Reguler',       
        color:'#F77866',
        
    }),
});
export default Link;

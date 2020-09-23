import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = ({title, type}) => {
    return (
        <View>
            <Text style={styles.container(type)}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:(type)=>({
        fontSize: type ==='secondary' ? 18 : 30,
        color: '#0C0423',
        fontFamily: type==='secondary'?'Monserrat-Regullar':'Montserrat-Bold'
    }),
})
export default Title

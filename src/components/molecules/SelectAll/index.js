import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconTrush } from '../../../assets'
import { TickIcon } from '../../atoms'



const SelectAll = () => {
    return (
        <View style={styles.container}>
            <TickIcon />
            <Text style={styles.title}>Select All</Text>
            <IconTrush style={styles.trush}/>
        </View>
    )
}

export default SelectAll

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
      
    },
    title: {
        marginLeft: 30,
        fontSize: 15
    },
    trush: {      
        position:'absolute',
        right: 10
    }
})

import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconMan, IconWoman, IconKids, IconMore, IconElectric } from '../../../assets'


const AllCategories = ({title, onPress}) => {
    const Icon = () => {
        if(title === 'man'){
            return <IconMan />
        }
        if(title === 'woman'){
            return <IconWoman />
        }
        if(title === 'kids'){
            return <IconKids />
        }
        if(title === 'more'){
            return <IconMore />
        }
        if(title === 'electric'){
            return <IconElectric />
        }    
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AllCategories

const styles = StyleSheet.create({
    container:{
        padding: -1,
        backgroundColor:'white',
        alignSelf:'flex-start',
        borderRadius: 10,
        marginRight:10,
    },
    title:{
        fontSize:12,      
        textAlign:'center',
        

    }
})

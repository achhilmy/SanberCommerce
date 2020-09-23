import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconPlus, IconMinus } from '../../../assets'

const PlusAndMin = ({type, onPress}) => {
    const IconPlusMinus = () =>{
        if(type ==='dark'){
            return<IconMinus />
        }
        if(type ==='orange'){
            return<IconPlus />
        }
        
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <IconPlusMinus />
        </TouchableOpacity>
    )
}

export default PlusAndMin

const styles = StyleSheet.create({})

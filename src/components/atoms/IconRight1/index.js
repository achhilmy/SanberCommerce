import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconRight, IconRightDark } from '../../../assets'

const IconRight1 = ({type}) => {
    const Icon = ()=>{
        if(type ==='dark'){
            return <IconRightDark />
        }
        if(type ==='orange'){
            return <IconRight />
        }        
    }

    return (
        <TouchableOpacity style={{marginTop:15, position: "absolute", right:20}}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconRight1;

const styles = StyleSheet.create({})

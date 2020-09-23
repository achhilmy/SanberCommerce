import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconHomeActive, 
            IconHome, 
            IconCart, 
            IconCartActive, 
            IconMessage, 
            IconMessageActive, 
            IconProfileActive, 
            IconProfile } from '../../../assets'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon =()=>{
        if (title === 'Home'){
            return active ? <IconHomeActive /> : <IconHome />
        }
        if (title === 'Cart'){
            return active ? <IconCartActive /> : <IconCart />
        }
        if (title === 'Message'){
            return active ? <IconMessageActive /> : <IconMessage />
        }
        if (title === 'Profile'){
            return active ? <IconProfileActive /> : <IconProfile />
        }

    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
            
        </TouchableOpacity>
    )
}

export default TabItem;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',

    },
    text: (active)=>({
        fontSize: 10,
        marginTop:4,
        color: active ? '#F77866': '#727C8E',
        
    })
})

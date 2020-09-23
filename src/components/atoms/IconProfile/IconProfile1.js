import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import IconRight1 from '../IconRight1';


const IconProfile1 = ({title, avatar, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.content}>
            <View style={styles.wrapper}> 
                <Image style={styles.icon} source={avatar} />
            </View>
           <Text style={styles.title}>{title}</Text>
           <IconRight1  type='dark'/>
        </TouchableOpacity>
    )
}

export default IconProfile1;

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        padding:10,      
    },
    wrapper:{    
        alignItems:'center',
        justifyContent:'center',
        marginRight:20,
        marginLeft:14,
        marginBottom:20,       
        
    },
    icon:{
        width: 30,
        height: 30,       
    },
    title:{
        paddingVertical:6,
        fontSize: 15
    },
    iconRight:{
        
    }
})

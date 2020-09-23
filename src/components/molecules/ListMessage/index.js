import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyMessage1 } from '../../../assets'


const ListMessage = ({img, title, desc, time}) => {
    return (
        <View style={styles.content}>
            <Image style={styles.images}source={img} />   
            <View style={styles.wrapper}>
                <Text style={styles.title}>{title} </Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>        
                <Text style={styles.time}>{time}</Text>
        </View>
    )
}

export default ListMessage

const styles = StyleSheet.create({
    content:{        
        flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 15
    },
    images:{
        width: 80, 
        height: 80
    },
    wrapper:{
        marginLeft: 15
    },
     title:{
        marginBottom: 10
    },
     desc:{
        maxWidth:203,
        fontSize: 12
    },
     time:{
        fontSize: 12,
        paddingLeft: 0
    }, 
    
})

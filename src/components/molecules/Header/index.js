import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IconLeft, IconOption, IconNotif, IconSearch } from '../../../assets';
import { Gap } from '../../atoms';

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <IconLeft style={styles.back}/>
            <Text style={styles.title}>{title}</Text>
            <IconSearch style={styles.search}/>
            <Gap width={25}/>
            <IconNotif style={styles.notif}/>
            <Gap width={25}/>
            <IconOption style={styles.option}/>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop: 20
    }, back:{
        marginRight: 30,
        marginTop:8,
        width: 10,
        height:18,       
    }, title:{
        marginRight: 80,
        width: 170,
        fontSize:24,       
        marginBottom:20
    },search:{
        marginTop:8,
    },notif:{
        marginTop:8,
        right:10
    }, option:{
        marginTop:8,
        right: 20
    }
})

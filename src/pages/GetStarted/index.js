import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Gap } from '../../components';
import {ILLogoStart} from '../../assets';
import Feather from 'react-native-vector-icons/Feather';

const GetStarted = ({navigation}) => {
    return (     
            <ScrollView style={styles.pages}>
                <View>
                    <Image source={ILLogoStart} />
                    <Text style={styles.title}>Dapatkan Product Dirumah</Text>
                    <Text style ={styles.desc}>Dapatkan product digital anda tanpa meninggalkan meja kerja anda dan tetap dirumah saja</Text>
                </View>
                <View>
                  
                    <Feather name="dots-three-vertical" />    
                             
                </View>
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    pages:{
        paddingVertical:80,
        paddingHorizontal: 32,
        backgroundColor:'#FEFEFE',
        flex:1,
                
    },
    title:{
        fontSize: 24,
        alignContent: 'center',
        fontFamily:'Montserrat-SemiBold',
        marginTop:80,
        textAlign:'center'
    },
    desc:{
        fontSize: 15,
        alignContent:'center',
        textAlign:'center',        
        paddingHorizontal:56,
        marginTop:20,
        fontFamily:'Montserrat-Medium',
    }
})

export default GetStarted;

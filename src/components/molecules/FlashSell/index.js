import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { DummyProduct1, DummyProduct2, DummyProduct3 } from '../../../assets'
import { Gap } from '../../atoms'

const FlashSell = ({title, onPress, price}) => {  
    const IconProduct = () => {
        if(title === 'Tiare Handwash'){
            return <Image source={DummyProduct1}/>
        }
        if(title === 'JBL Speaker'){
            return <Image source={DummyProduct2}/>
        }
        if(title === 'Google Home'){
            return <Image source={DummyProduct3}/>
        }          
    }

    return(      
            <TouchableOpacity style={styles.content} onPress={onPress}>
                <View>
                    <IconProduct />
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.title}>{price}</Text>
                    <Gap height={10}/>
                </View>
            </TouchableOpacity>
       
       
    )
}


export default FlashSell

const styles = StyleSheet.create({
    content:{     
        marginHorizontal:15, 
        alignSelf:'flex-start',
        backgroundColor:'white',
        shadowColor: "#000",
        marginBottom:1,
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,        
        elevation: 6,
    
    },
    title:{
        paddingHorizontal:10,
        marginTop:7,
        flex:1,
        
    }
})

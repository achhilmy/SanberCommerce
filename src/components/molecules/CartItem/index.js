import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyProduct1 } from '../../../assets'
import { Gap, TickIcon } from '../../atoms'
import PlusAndMin from '../../atoms/PlusAndMin'

const CartItems = ({title, desc, price, productImage, tambah, kurang}) => {
    const [count, setCount] = useState(0)

    tambah = () => {
        setCount(count + 1)
    }
  
    kurang = () => {
        setCount(count - 1)
    }
    return (
        <View style={styles.content}>
            <View style={{marginTop:45, paddingHorizontal:14}}>
                <TickIcon  type='dark'/>
            </View>
            <Image style={styles.picture} source={productImage} />
            <View style={styles.title}>
                <Text style={styles.text}>{title}</Text>
                <Gap height={6}/>
                <Text style={styles.color}>{desc}</Text>
                <Gap height={6}/> 
                <Text style={styles.price}>{price}</Text>
            </View>
            <View style={styles.action}>
                <View style={{marginTop:10}} >
                    <PlusAndMin onPress={()=>kurang()} type='dark'/>                    
                </View>
                <View style={{borderWidth: 1,width: 24, height:24, borderRadius:4,borderColor:'#727C8E', marginHorizontal:10}}>
                    <Text style={{textAlign:'center', justifyContent:'center'}}>{count}</Text>
                </View>
                <View style={{marginTop:4}}>
                     <PlusAndMin onPress={()=>tambah()} type='orange'/>
                </View>
            </View>

        </View>
    )
}

export default CartItems;

const styles = StyleSheet.create({
    content:{
        marginLeft:2,
        width: 355,
        marginTop: 15,
        borderRadius: 5,
        backgroundColor:'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
     picture:{
        width: 78,
        height:86,
        borderRadius: 4,
        marginLeft:0,
        marginVertical:12
    }, title :{
        marginVertical:12,
        marginLeft:24
    }, 
    action:{
       flexDirection:'row',
       position:'absolute',
       right:20,
       bottom:10
       
    }, text:{
        fontSize: 15
    }, color:{
        fontSize:12
    }, price:{
        fontSize: 12,
        fontWeight:'bold'
    },
    tick:{
        backgroundColor:'white',

    }
})

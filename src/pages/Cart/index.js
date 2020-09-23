import React from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import TextInput2 from '../../components/atoms/TextInput2'
import { Header, SelectAll } from '../../components/molecules'
import CartItem from '../../components/molecules/CartItem'
import { Gap } from '../../components/atoms'
import { DummyProduct1, DummyProduct2, DummyProduct3 } from '../../assets'


const Cart = () => {
    return (
        <View style={styles.container}>
            <Header title='My Cart'/>
            <SelectAll />
            <ScrollView showsVerticalScrollIndicator={false}>
                <CartItem
                    productImage={DummyProduct1} 
                    title ='Bluetooth Speaker' 
                    desc='Color - Red  Size-7' 
                    price='$12.13'/>
                <CartItem 
                    productImage={DummyProduct2}
                    title ='Office Chair' 
                    desc='Color - Red  Size-7' 
                    price='$12.13'/>
                <CartItem 
                    productImage={DummyProduct3}
                    title ='Man Jeans Jacket' 
                    desc='Color - Red  Size-7' 
                    price='$12.13'/>
                <CartItem 
                    productImage={DummyProduct2}
                    title ='Nike Shoe For Man' 
                    desc='Color - Red  Size-7' 
                    price='$12.13'/>
                <CartItem 
                    productImage={DummyProduct1}
                    title ='Man Hand Watch' 
                    desc='Color - Red  Size-7' 
                    price='$12.13'/>
                <Gap height={20}/>
               <TextInput2 apply='Apply Code' />
            </ScrollView>
        </View>
        )
    }

    export default Cart

    const styles = StyleSheet.create({
        container:{
        backgroundColor:'white',
        flex: 1,
        padding: 16
    }
})


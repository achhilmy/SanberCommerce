import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input, Gap, Link } from '../../atoms';

const Card = () => {
    return (
             <View style={styles.body}>  
                           
                <Input label='Name'/>
                <Gap height={25}/>
                <Input label='email'/>
                <Gap height={25}/>
                <Input label='Phone Number'/>
                <Gap height={25}/>
                <Input label='Password'/>
                <Gap height={40}/>
                <Button title='Sign Up'/>            
                <Link align={('center')} question='Already have an account? ' title='Sign In' size={15} onPress={()=>alert('sex hayuk')}/>
            </View>
       
    )
}

const styles = StyleSheet.create({    
    body:{       
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        backgroundColor: '#FFFFFF', 
        borderRadius:11,
        padding: 24,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
    },
})

export default Card;

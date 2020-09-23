import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Gap, Input, Button, Title, Link } from '../../components';
// import { Button, Input, Gap } from '../../atoms';

const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title  title='Welcome Back'/>
            <Gap height={4}/>
            <Title title='Sign In to continue' type='secondary'/>
            <Gap height={46}/>
            <View style={styles.body}>  
                <Gap height={25} />
                <Input label='email' />
                <Gap height={25} />
                <Input label='Password'/>
                <Link align={('right')} question='Forgot Password ?'/>
                <Gap height={25} />
                <Button title='Sign In' onPress={()=> navigation.navigate('MainApp')}/>
                <Gap height={25} />
                <Text style={{textAlign:'center'}}>-OR-</Text>
                <Gap height={25} />
                <Button type='secondary' title='Google'onPress={()=> navigation.navigate('Register')}/>        
            </View>

        </View>
  
)};
const styles = StyleSheet.create({    
container:{
    flex:1,
    paddingVertical:80,
    backgroundColor:'#FEFEFE',
    paddingHorizontal:24,    
},
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

export default Login

import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Gap, Input, Button, Title, Link } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
// import { Button, Input, Gap } from '../../atoms';

const Register = () => {
    return (      
            <View style={styles.container}>
            <Title  title='Welcome '/>
            <Gap height={4}/>
            <Title title='Sign Up to continue' type='secondary'/>
            <Gap height={46}/>
            <View style={styles.body}>  
                <Input label='Name' />
                <Gap height={25} />
                <Input label='email' />
                <Gap height={25} />
                <Input label='Phone Number'/>
                <Gap height={25} />
                <Input label='Password'/>
                <Gap height={25} />
                <Button title='Sign Up'/>
                <Gap height={5} />
                <Link question='Already Have an Account? ' title='Sign In'/>                        
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
   backgroundColor: '#FEFEFE', 
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

export default Register;

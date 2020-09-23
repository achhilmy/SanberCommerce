import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { IconSearch } from '../../../assets'

const Simple = () => {
    return (
        <View style={{flexDirection:'row'}}> 
            <View style={{position:'relative', flex:1, backgroundColor: 'white'}}>
                <IconSearch style={{position:'absolute',top:13,left:20}} />
                <TextInput placeholder='Search Message' style={{borderWidth:1, borderColor:'#727C8E', borderRadius:11, height:40, fontSize:13, paddingLeft:45, paddingRight:70}}/>        
                            
            </View>            
        </View>
  
    )
}

export default Simple

const styles = StyleSheet.create({
    
})

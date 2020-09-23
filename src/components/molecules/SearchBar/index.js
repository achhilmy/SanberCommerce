import React from 'react';
import { StyleSheet, Text, View, TextInput, Icon } from 'react-native';
import { IconCamera, IconSearch, IconNotif, IconLine } from '../../../assets';
import Simple from './Simple';

const SearchBar = ({type}) => {
    if (type === 'simple'){
        return <Simple />
    }

    return (
        <View style={{flexDirection:'row'}}> 
            <View style={{position:'relative', flex:1, backgroundColor: 'white'}}>
                <IconSearch style={{position:'absolute',top:13,left:20}} />
                <TextInput placeholder='Search Product' style={{borderWidth:1, borderColor:'#727C8E', borderRadius:11, height:40, fontSize:13, paddingLeft:45, paddingRight:70}}/>
                <IconLine style={{position: 'absolute', top:13, left:260}}/>
                <IconCamera style={{position: 'absolute', top:13, left: 280}}/>
            </View>
            <View style={{width: 35, alignItems: 'center', justifyContent:'center', marginRight:12}}>
                <IconNotif />
            </View>
        </View>
  
    )
}

export default SearchBar

const styles = StyleSheet.create({
    
        
  
    // searchSection: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#fff',
    // },
    // searchIcon: {
    //     padding: 10,
    // },
    // input: {
    //     flex: 1,
    //     paddingTop: 10,
    //     paddingRight: 10,
    //     paddingBottom: 10,
    //     paddingLeft: 0,
    //     backgroundColor: '#fff',
    //     color: '#424242',
    // },
})

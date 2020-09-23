import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native'
import { DummyUser1 } from '../../assets/dummy'
import { ILProfilebackground, ILMyOrder, ILMyWallet, ILEditProfile, ILAddress, ILNotif, ILLanguange, ILWinGift } from '../../assets/illustration'
import IconProfile from '../../components/atoms/IconProfile'
import { Gap, Button, Card, IconProfile1 } from '../../components';

const Profile = ({onPress}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={ILProfilebackground} style={styles.image}>
            <View style={styles.user}>
                <Image source={DummyUser1}/>
                <Text style={styles.text}>Achmad Hilmy</Text>
            </View>            
            <View style={styles.cardBox}>
                <IconProfile 
                    category='Wishlist' 
                    onPress={()=> alert('hello world')}                    
                />
                <Gap width={5}/>
                <IconProfile 
                    category='Following' 
                    onPress={()=> alert('hello world')}
                />
                 <Gap width={5}/>
                <IconProfile 
                    category='Voucher' 
                    onPress={()=> alert('hello world')}
                />               
            </View>
            </ImageBackground>
            <View style={styles.cardBox1}>
                <Gap height={15}/>
                <IconProfile1 onPress={()=> alert('hello world')} title='My Order' avatar={ILMyOrder}/>
            </View>
            <ScrollView >
                <View style={styles.cardView}>
                   <Gap height={25}/>
                    <IconProfile1 onPress={()=> alert('hello world')} title='My Wallet' avatar={ILMyWallet}/>
                    <IconProfile1 onPress={()=> alert('hello world')} title='Edit Profile' avatar={ILEditProfile}/>                    
                    <IconProfile1 onPress={()=> alert('hello world')} title='Address' avatar={ILAddress}/>
                    <IconProfile1 onPress={()=> alert('hello world')} title='Notification' avatar={ILNotif}/>
                    <IconProfile1 onPress={()=> alert('hello world')} title='Languange' avatar={ILLanguange}/>
                    <IconProfile1 onPress={()=> alert('hello world')} title='Win Gift' avatar={ILWinGift}/>
                </View>
                <Gap height={40}/>
                <View style={{padding:16}}>
                    <Button title='Logout'/>
                </View>
                <Gap height={20}/>
            </ScrollView>
        </View>        
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
        
      },
      image: {        
        resizeMode: "cover",
        width: 400,
        height:270,       
      },
      user:{
          flexDirection:'row',
          paddingLeft: 30,
          marginTop: 30,        
      }, 
      text: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold",
        marginLeft: 30,
        marginTop: 25
      },
      cardBox:{
      
          flexDirection:'row',
          alignItems:'center',
         justifyContent:'center',
          width: 354,
          height: 100,      
          backgroundColor:'white',
          borderRadius: 10,
          marginLeft: 16,
          marginTop: 45,
          shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,

      },
      cardBox1:{

          marginTop:20,          
          borderRadius: 5,
          shadowColor: "#000",
          shadowOffset: {
              width: 0,
              height: 1,
          },
          shadowOpacity: 0.20,
          shadowRadius: 1.41,
          
          elevation: 2,
      },
      cardView:{
        
        marginTop:15,          
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,
      }
})

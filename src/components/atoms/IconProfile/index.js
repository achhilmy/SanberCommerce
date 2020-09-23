import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconHeart, IconFollowing, IconVoucher} from '../../../assets/icon';

const IconProfile = ({category, onPress}) => {
  const Icon = () =>{
      if (category === 'Wishlist') {
        return <IconHeart />;
      } 
      if (category === 'Following'){
          return <IconFollowing />
      }
      if (category === 'Voucher'){
          return <IconVoucher />
      }
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.content}>      
        <Icon style={styles.wrapper}/>
        <Text >{category}</Text>      
    </TouchableOpacity>
  );
};

export default IconProfile;

const styles = StyleSheet.create({
  content:{
    flex: 1,
    alignItems:'center'
  }, wrapper:{
    alignItems:'center'
  }
});

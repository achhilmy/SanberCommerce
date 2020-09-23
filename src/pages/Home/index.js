import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import { Notif, SliderHome, AllCategories, FlashSell, NewProduct, SearchBar, Gap } from '../../components'
import { JSONAllCategory, JSONFlashSell, IconRight } from '../../assets'


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <SearchBar />               
                    </View>
                    <SliderHome style={{borderRadius: 10}}/>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.allCategories}>
                            <Gap width={16} />
                                {
                                    JSONAllCategory.data.map(item =>{
                                        return (
                                            <AllCategories key={item.id} 
                                            title={item.title} 
                                            onPress={() => alert('all categories')}/>
                                        )
                                    })
                                }
                            <Gap width={12} />
                            </View>
                        </ScrollView>
                    </View>

                    <View style={styles.WrapperflashSell}>
                    <View style={styles.flashSell}>
                        <Text style={styles.text}>Flash Sell</Text>
                        <Text style={styles.time}>03.30.30</Text>
                        <Text style={styles.all}>All <IconRight/></Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.contentFlashSell}>                    
                            {
                                JSONFlashSell.data.map(item => {
                                    return(
                                        <FlashSell key={item.id} 
                                        title={item.title} 
                                        price={item.price}
                                        onPress={()=>alert('hello world')}/>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>              
                    </View>
                    <Gap height={40}/>
                
                    <View style={styles.WrapperflashSell}>
                    <View style={styles.flashSell}>
                        <Text style={styles.text}>New Product</Text>
                        <Text style={styles.time}>03.30.30</Text>
                        <Text style={styles.all}>All <IconRight/></Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.contentFlashSell}>                    
                            {
                                JSONFlashSell.data.map(item => {
                                    return(
                                        <FlashSell key={item.id} 
                                        title={item.title} 
                                        onPress={()=>alert('hello world')}/>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>              
                    </View>
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        padding: 16,
        backgroundColor:'white',
        flex:1
    },
    wrapperScroll:{
        marginHorizontal: -16,
        marginTop: 20,
    },
    allCategories:{
        flexDirection:'row'
    },
    WrapperflashSell:{
        marginHorizontal: -16,
        marginTop: 20,
      
    },
    text:{
        marginLeft:16,
        fontFamily:'Monserrat-Regullar',
        fontWeight: 'bold',
        fontSize: 24
    },
    flashSell:{
        flexDirection:'row',    
        marginBottom:20  

    },
    time:{
        fontSize: 12,
        color:'#F89C52',
        marginTop: 6,        
        marginLeft:10
    },
    contentFlashSell:{
        flexDirection:'row',      
    },
    all:{
        fontSize:15,
        fontFamily: 'Monserrat-Regullar',
        color:'#616D80',
        marginTop:5,
        marginLeft:200

    }
})


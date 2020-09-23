import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import { DummySLider1 } from '../../../assets'

const { width } = Dimensions.get("window");
const height = width * 0.5;
const images = [
    'https://images.pexels.com/photos/1909572/pexels-photo-1909572.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
]
export default class SliderHome extends Component {
    state = {
        active: 0
    }
    change= ({nativeEvent})=> {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide !== this.state.active){
            this.setState({active:slide});
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView 
                    pagingEnabled 
                    horizontal 
                    onScroll={this.change}
                    showsHorizontalScrollIndicator={false}
                   
                    style={styles.scroll}>
                    {
                        images.map((image, index) =>(
                            <Image 
                            key = {index}
                            source ={{uri: image}}
                            style={{width, height,borderRadius:10, marginLeft:0, resizeMode:'cover'}}
                            />
                        ))
                    }
                </ScrollView>
                <View style={styles.scrollmap}>
                  {
                      images.map((i, k)=>(
                        <Text key={k} style={k==this.state.active? styles.pagingActiveText : styles.pagingText}>⬤</Text>

                      ))
                  }
                </View>
             </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
                marginTop: 16, 
                width, 
                height,
                marginRight: 50,
                                      
            },
    scroll:{ 
              width, 
              height,
              borderRadius: 7
    },
    pagingText:{
        color:'#888', margin:3
    },
    pagingActiveText:{
        color:'#fff', margin:3
    },
    scrollmap:{ 
        flexDirection:'row', 
        position:'absolute', 
        bottom:0, 
        alignSelf:'center'}
    
})

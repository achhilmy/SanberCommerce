import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Header, SearchBar, ListMessage } from '../../components/molecules'
import { DummyMessage1, DummyMessage2, DummyMessage3, DummyMessage4, DummyMessage5, DummyMessage6 } from '../../assets'


const Message = () => {
    return (
        <View style={styles.container}>
            <Header title='My Message'/>
            < SearchBar type='simple' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListMessage 
                    img ={DummyMessage1}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
                <ListMessage 
                    img={DummyMessage2}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
                <ListMessage 
                    img={DummyMessage3}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
                <ListMessage 
                    img={DummyMessage4}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
                <ListMessage 
                    img={DummyMessage5}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
                <ListMessage 
                    img={DummyMessage6}
                    title='BATA Store' 
                    desc='De componentes se Lorem ipsum encuent componente de muestra.' 
                    time='10.44 AM'
                />
            </ScrollView>
        </View> 
    )
}

export default Message

const styles = StyleSheet.create({
    container:{
        padding:16,
        backgroundColor:'white',
        flex: 1
        
    }
})

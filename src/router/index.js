import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { 
          Splash, 
          GetStarted, 
          Register, 
          Login, 
          Home,
          Profile,
          Message,
          Cart,
        } from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
    return(
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Cart' component={Cart}/>
            <Tab.Screen name='Message' component={Message}/>
            <Tab.Screen name='Profile' component={Profile}/>

        </Tab.Navigator>
    )
}

const Router = () =>{
    return (
        <Stack.Navigator initialRouteName='GetStarted' >
            <Stack.Screen 
                name='Splash' 
                component={Splash}
                options = {{headerShown: false}}    
            />
            <Stack.Screen 
                name='GetStarted' 
                component={GetStarted} 
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name='Register' 
                component={Register} 
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name='Login' 
                component={Login} 
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name='MainApp' 
                component={MainApp} 
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Router;
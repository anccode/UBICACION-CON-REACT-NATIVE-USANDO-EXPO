/**
 * nav var navigator of app of movil
 */

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import RunScreen from './Run'
import ActivityScreen from './Activity'
import { NavigationContainer } from '@react-navigation/native'
import colors from '../constants/colors'
const HomeScreen = () => {
    
    const Tab =createMaterialTopTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
            tabBarLabelStyle:{color:colors.tabsColor,fontWeight:"bold"},
            tabBarContentContainerStyle:{backgroundColor:"#fff"}
        }}
        >
            <Tab.Screen name="Startarun" component={RunScreen}/>
            <Tab.Screen name="Activity" component={ActivityScreen}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}

export default HomeScreen

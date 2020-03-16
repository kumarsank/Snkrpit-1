import React, { Component } from "react";
import {
    Container, View, Header, Content, Button, Card, CardItem, Text, Body
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SizechartScreen from '../components/Sell/Sizechart';
import Condition from '../components/Sell/Condition';
import { Dimensions } from 'react-native';
import Editprofile from '../components/Sell/Editprofile';

const Stack = createStackNavigator();
export default class Sizecomp extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',

                    },
                }}>
                    <Stack.Screen name="shoes Name" component={SizechartScreen} />
                    <Stack.Screen name="Condition" component={Condition} />
                    <Stack.Screen name="Editprofile" component={Editprofile} />
                    {/* <Stack.Screen name="Post A Trade" component={Condition} /> */}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

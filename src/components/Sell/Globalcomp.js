import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListIconExample from '../Sell/Settings';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50, alignItems: "center" }}
            source={require('../../images/app-icon.png')}
        />
    );
}

const Stack = createStackNavigator();

function Globalcomp() {
    return (
        <ListIconExample />

    );
}

export default Globalcomp;
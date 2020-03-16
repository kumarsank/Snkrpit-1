import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settingcomp from '../Settings/Settings';
import Editprofile from '../Settings/Editprofile';
const Stack = createStackNavigator();
export default class Settingnav extends Component {
    render() {
        return (<NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>

                <Stack.Screen name="Setting" component={Settingcomp} />
                <Stack.Screen name="Editprofile" component={Editprofile} />

            </Stack.Navigator>
        </NavigationContainer>);
    }
}

import React, { Component } from 'react';
import {
    Container, View, Header, Content, Button, Card, CardItem, Text, Body, H1, H2, H3
} from 'native-base';
import { StatusBar, ScrollView } from 'react-native';
import Spacer from '../UI/Spacer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Condition extends Component {
    render() {
        return (
            <ScrollView style={{
                backgroundColor: '#fff',
            }}>

                <View style={{
                    flex: 1,
                    //alignItems: 'stretch',
                    // flexDirection: 'column',
                }}>
                    {/* <StatusBar backgroundColor="#f4511e" barStyle="light-content" /> */}

                    <View style={[styles.headingstyle, styles.border]} >
                        <H1 style={[styles.mainheading]} >CONDITION</H1>
                        <Spacer size={10} />
                    </View>
                    <View style={styles.border}>
                        <H1 style={[styles.headingstyle, styles.heading]} >New</H1>
                        <Spacer size={10} />
                        <Text style={[styles.padding_margin, styles.content]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis.
                    </Text>
                    </View>
                    <View style={styles.border} >
                        <H1 style={[styles.headingstyle, styles.heading]}>Used</H1>
                        <Spacer size={10} />
                        <Text style={[styles.padding_margin, styles.content]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
                    </Text>
                    </View>
                </View>
            </ScrollView>

        );
    }
}
const styles = {
    viewPager: {
        backgroundColor: 'white',
    },
    headingstyle: {
        paddingTop: 18,
        paddingLeft: 30,
        paddingRight: 30,
    },
    padding_margin: {
        paddingTop: 0,
        paddingBottom: 30,
        paddingLeft: 30,
        paddingRight: 30,
        // backgroundColor: 'red'
    },
    content: {
        textAlign: 'justify',
        color: '#8a8a8a',
        fontSize: 12,
        letterSpacing: 0.5,
        fontWeight: '400'
    },
    heading: {
        color: '#545454',
        fontWeight: 'bold',
        fontSize: 20,
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
    mainheading: {
        color: '#545454',
        fontWeight: 'bold',
        fontSize: 17,

    }
}
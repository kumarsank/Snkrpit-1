import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Gift extends Component {
    render() {
        return (
            <ScrollView>
                <Container style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <Image source={require('../../images/GiveAway-banner.png')} style={{ width: '100%', flex: 1 }} />

                        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width, }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#32CD32', letterSpacing: 1.2 }}>GIVEAWAYS SNEAKERS</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textTransform: 'uppercase', letterSpacing: 3 }} >win in three </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textTransform: 'uppercase', letterSpacing: 3 }} >easy step</Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', textTransform: 'uppercase', letterSpacing: 1.8 }} >#SNKRPITGiveaway</Text>
                        </View>
                    </View>

                    <View style={{ flex: 0.2, backgroundColor: 'white', justifyContent: 'center',marginLeft:36, borderBottomWidth:1, borderBottomColor:'#EEEEEE', marginRight:36}}>
                       
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#404040', letterSpacing: 0.5, marginBottom: 20 }} >Clot X Air Force 1 PRM Royal Slick </Text>
               
                        <View style={{
                           
                   
                            flexDirection: 'row',
                            justifyContent: 'flex-start',paddingLeft:0
                        }}>
                            <View style={{ flex: 0.2, alignItems:'flex-start', justifyContent:'flex-start'}}>

                            <TouchableOpacity
                                onPress={() => alert('helloooo')} style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#eeeeee', padding: 2 }}>
                                <Image source={require('../../images/dope-icon.png')} style={{ marginRight: 3 }} />
                                <Text style={{ fontSize: 6, letterSpacing: 0.6, textTransform: 'uppercase', color: '#404040' }}>retail price</Text></TouchableOpacity>

                            </View>
                          
                        </View>
                    </View>

                    <View style={{ flex: 0.4, paddingLeft: 36, paddingRight: 36 }}>
                        <View style={{ flex: 1, paddingTop: 40 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#404040', marginBottom: 14 }} >Product Info </Text>
                            <Text style={{ fontSize: 12, color: '#808080' }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim lobortis vulputate. Nulla vel elit finibus, pretium eros quis. </Text>
                        </View>
                        <View style={{ flex: 1, marginBottom: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#404040', marginBottom: 14 }} >Define Contest Rules </Text>
                            <Text style={{ fontSize: 12, color: '#808080' }} >Here’s how to enter to win to our giveaway: </Text>
                            <Text style={{ fontSize: 12, color: '#808080' }} >1. Follow Our Social Media at <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#808080' }} onPress={() => alert('hello')}>@crepprotect</Text> </Text>
                            <Text style={{ fontSize: 12, color: '#808080' }} >2. Share and Use Hastag . <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#808080' }}>#SNKRPITGiveaway</Text></Text>
                        </View>
                    </View>

                </Container>

            </ScrollView>

        );
    }
}
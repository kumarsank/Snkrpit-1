import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {Icon } from 'native-base';

export default class Tab1Comp extends Component {
    render() {
        return (




            <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'stretch',
            }}>

                <View style={{ flex: 0.6, width: 100, height: 100, paddingLeft: 30, paddingRight: 20, paddingTop: 20 }} >
                    <Text style={{ justifyContent: "center", alignItems: "center" }}>{this.props.Search}</Text>
                    <View style={{ flexDirection: 'row', flex: 0.5, alignItems: 'center' }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#DDDDDD', paddingRight: 40, justifyContent: "center", alignItems: "center" }}>{this.props.Country}</Text>
                        <Icon style={{ borderBottomWidth: 1, fontSize: 18, paddingTop: 2 }} name="search" />
                    </View>
                </View>
                <View style={{ flex: 0.4, height: 100, width: 100, paddingTop: 30, paddingRight: 36 }} >
                    <TouchableOpacity onPress={() => alert('helllo')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: null, flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#DDDDDD', paddingLeft: 15 }}>
                            <Image source={require('../../images/distance.png')} />
                            <Text style={{ padding: 10, color: '#404040', fontSize: 10 }}>{this.props.Distance}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
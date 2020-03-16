import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Shoes extends Component {
    render() {
        return (




            <View style={{ height: 200, width: 180, borderWidth:1, borderColor:'#F5F5F5'}}>
                <Text style={{ fontSize: 12, fontWeight: 'bold', paddingLeft:7 }}>{this.props.new}</Text>

                <View style={{ flex: 2, paddingTop: 20 , paddingLeft:30}}>
                    <Image style={{ height: 60, width: 120, resizeMode: 'cover' }} source={this.props.imageUri} />

                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 60}}>
                    <Text style={{ fontSize: 12 }}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
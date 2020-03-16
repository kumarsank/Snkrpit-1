import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

export default class Textt extends Component {
    render() {
        return (

            <View style={{ flex: 1 ,flexDirection: 'row'}}>
                
                    <Text style={{ flex: 1, paddingHorizontal: 30, padding: 20, paddingLeft: 40, fontSize: 15, fontWeight: '700' }}>
                        {this.props.Trending}
                    </Text>
                    <Text style={{ flex: 1, paddingHorizontal: 30, paddingTop: 25, fontSize: 10, fontWeight: '700', alignItems: 'flex-end' }}>
                        {this.props.Viewall}
                    </Text>
               
            </View>
        );
    }
}
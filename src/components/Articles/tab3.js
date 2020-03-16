import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';

export default class Tab3 extends Component {
    render() {
        return (

             <View style={{ flex: 1, backgroundColor: 'green', flexDirection: 'row' }}>
              <View style={{ flex: 0.1, padding: 10, backgroundColor: '#fff' ,justifyContent:'center'}}>
                <Image source={this.props.ImageTextA} style={{  width: 30, flex: 0.5, borderRadius: 50 }} />

              </View>
              <View style={{ flex: 0.6, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 5 }}>{this.props.dess}</Text>
                  </View>
                  <View style={{ flex: 0.3, backgroundColor: '#fff' }}> 
                    <Image source={require('../../images/Image_111111.png')} style={{ height: null, width: null, flex: 0.7  }} /> 
                  </View>
            </View>
        );
    }
}
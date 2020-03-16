import React, { Component } from 'react';
import { View,Image,Text } from 'react-native';

export default class ImageText extends Component {
    render() {
        return (

             <View style={{ flex: 1, flexDirection: 'row', alignItems:"center", justifyContent:"center" }}>
              <View style={{ flex: 0, height:40, width:40, padding: 10, backgroundColor: '#000' ,justifyContent:'center', borderRadius:50, color:'#FFF'}}>
                <Image source={this.props.ImageTextA} style={{  width: 50, flex: 1, borderRadius: 50 }} />
              </View>
              <View style={{ flex: 1, justifyContent:"center"}}>
              <Text style={{ fontSize: 12, fontWeight: '600', marginLeft: 5, flex:1 }}>{this.props.dess}</Text>
                  </View>
                  <View style={{ flex: 0, width:100 }}> 
                    <Image source={require('../../images/Image_111111.png')} style={{ height: 57, width: null }} /> 
                  </View>
            </View>

        );
    }
}
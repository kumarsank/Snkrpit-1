import React, { Component } from 'react';
import { View,Image,ScrollView } from 'react-native';

export default class SliderImage extends Component {
    render() {
        return (

            <View style={{ flex: 0.9,backgroundColor:'red' }}>
               
              
                <View style={{ width:320, backgroundColor: 'skyblue', borderWidth:1, borderColor:'#F5F5F5'}} >
                 
                  <Image  source={this.props.bgImage}/>
                </View>

         
            </View>
        );
    }
}
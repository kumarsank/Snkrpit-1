import React, { Component } from 'react';
import {  Text, View,  } from 'react-native';
import CustomButton from '../components/CustomButton';
import Shoes from '../components/Articles/shoes';
class ShoeCart extends Component {
    render() {
        return(
<View style={{ backgroundColor: 'skyblue', borderWidth: 1, borderTopColor: 'white', borderBottomColor: 'white', borderRightColor: 'green', paddingTop:10,paddingRight:10 }} >
              
                <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center'}}>
                  <CustomButton text="NEW" onPress={() => { alert("Hello") }} />
                  <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20, flex: 1 }}>
                    <Text style={{ fontSize: 10, alignItems: 'flex-end' }}>{   this.props.size}</Text>
                  </View>
                </View>
                <View style={{ flex: 0.5 , backgroundColor:'red'}}>
                  <View>
                    <Shoes imageUri={require('../images/product-3.png')} name="NIKE MAX AUR 720" />

                  </View>


                </View>
              </View>
        );
        }
    }
export default ShoeCart;

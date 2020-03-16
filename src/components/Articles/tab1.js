import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon, Container, Content, Item, Input, CardItem,Button,ActionSheet } from 'native-base';
import Shoes from './shoes';
import Tab1Comp from './Tab1Comp';
var BUTTONS = [
  { text:"10 km - 20 km", icon: "american-football", iconColor: "#2c8ef4", },
 {text:"21 km - 30 km",  icon: "american-football", iconColor: "#2c8ef4" },
 {text:"31 km - 40 km", icon: "american-football", iconColor: "#2c8ef4" },
  {text:"41 km - 50 km", icon: "american-football", iconColor: "#2c8ef4" }];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class Tab2 extends Component {
  render() {
    return (

      <ScrollView >
       



          
           <Tab1Comp Search="Search" Country="Canada, Taronto" Distance="Select Distance"/>
       
{/* 
          <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                // cancelButtonIndex: CANCEL_INDEX,
                // destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Distance" 
                
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
           
              </Button> */}

          <View style={{  flexDirection: 'row' }}>
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="USED" />
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
            <Shoes imageUri={require('../../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
          </View>
          
        
          
 
    





      </ScrollView>






    );
  }
}
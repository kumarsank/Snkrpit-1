import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Icon, Container, Content, Item, Input, CardItem,Button } from 'native-base';
// import Shoes from './shoes';
import SliderImage from '../../components/Articles/SliderImage';

export default class Tab2 extends Component {
  render() {
    return (


    
      <ScrollView >  
      <Text style={{fontSize:20}}>Scroll me plz</Text>  
      <Button title={'Button 1'} onPress={this.onPressButton} />  
      <Text style={{fontSize:20}}>React Native Example of ScrollView</Text>  
      <Button title={'Button 2'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>React Native ScrollView Example</Text>  
      <Button title={'Button 3'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>If you like</Text>  
      <Button title={'Button 4'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Scrolling down</Text>  
      <Button title={'Button 5'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Scrolling down</Text>  
      <Button title={'Button 6'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>What's the best</Text>  
      <Button title={'Button 7'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>What's the best</Text>  
      <Button title={'Button 8'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Framework around?</Text>  
      <Button title={'Button 9'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Framework around?</Text>  
      <Button title={'Button 10'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>React Native</Text>  
      <Button title={'Button 11'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Scroll me plz</Text>  
      <Button title={'Button 12'} onPress={this.onPressButton} />  
      <Text style={{fontSize:20}}>Scroll me plz</Text>  
      <Button title={'Button 13'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>If you like</Text>  
      <Button title={'Button 14'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>If you like</Text>  
      <Button title={'Button 15'} onPress={this.onPressButton}/>  
      <Text style={{fontSize:20}}>Scrolling down</Text>  
      <Button title={'Button 16'} onPress={this.onPressButton}/>  
  </ScrollView>  
   

    );
  }
}
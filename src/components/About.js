


import React, { Component } from 'react';
import {
  Container, Content, Text, CardItem, ListItem, Left, Body, Icon, Right, Badge
} from 'native-base';
import { Image, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import Textt from '../components/Articles/logo';
import Shoes from '../components/Articles/shoes';
import SliderImage from './Articles/SliderImage';
import ImageText from '../components/Articles/imageText';
import { TextInput } from 'react-native-gesture-handler';
export default class About extends Component {
  render() {
    return (



      <SafeAreaView style={{ flex: 1 }}>

        <Container>
          <Content >


            {/* {/ Top Image and Text START /} */}
            <CardItem cardBody>
              <Image source={require('../images/Home_Banner.png')} style={{ height: 300, width: null, flex: 1 }} />
              <View style={{ flex: 1, position: 'absolute', right: 0, paddingRight: 40, width: Dimensions.get('window').width, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#32CD32', alignItems: 'stretch', textAlign: 'right' }}>TRADE INTO WINTER</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textAlign: 'right' }} >Nike Air Max</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textAlign: 'right' }} >720 Metallic</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textAlign: 'right' }} >Silver</Text>
              </View>
            </CardItem>

            {/* {/ Top Image and Text END /} */}



            {/* {/ Trending Trades nand ScrollBar Shoes Images START /} */}
            <ScrollView scrollEventThrottle={16}>
              <Textt Trending="Trending Trades" Viewall="VIEW ALL" />
              <View style={{ height: 200, marginTop: 30 }}>
                <ScrollView horizontal={true}
                  showsHorizontalScrollIndicator={true}>
                  <Shoes imageUri={require('../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
                  <Shoes imageUri={require('../images/product-4.png')} name="NIKE MAX AUR 720" new="NEW" />
                  <Shoes imageUri={require('../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
                  <Shoes imageUri={require('../images/product-3.png')} name="NIKE MAX AUR 720" new="NEW" />
                </ScrollView>
              </View>
            </ScrollView>
            {/* {/ Trending Trades nand ScrollBar Shoes Images END /} */}

            <View style={{ flexDirection: 'row', paddingTop: 30 }}>
              <Textt Trending="Trending Trades" Viewall="VIEW ALL" />
            </View>


            {/* {/ ScrollBar PosterImage START /} */}
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={true}>
                <SliderImage bgImage={require('../images/banner-home-2.png')} />
                <SliderImage bgImage={require('../images/banner-home-2.png')} />
                <SliderImage bgImage={require('../images/banner-home-2.png')} />

              </ScrollView>
            </View>
            {/* {/ ScrollBar PosterImage END /} */}



            {/* {/ Cart and Images DEC START /} */}


            <View style={{ flex: 1, height: 252, marginTop: 50 }}>

              <View style={{ flex: 0.3, backgroundColor: '#000000', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ flex: 1, paddingHorizontal: 30, padding: 20, paddingLeft: 36, fontSize: 15, fontWeight: '700', color: '#fff' }}>Top 10 Trending</Text>
                <Text style={{ flex: 1, paddingHorizontal: 30, paddingTop: 25, fontSize: 10, fontWeight: '700', alignItems: 'flex-end', color: '#fff' }}>VIEW All</Text>
              </View>
              <View style={{ flex: 0.7, backgroundColor: '#000000' }}>
                {/* Top 10 Trending START*/}
                {/* <View style={{ flex: 1, marginRight: 36, marginLeft: 36, marginTop: 20, backgroundColor:'#fff', borderTopLeftRadius: 10, borderTopRightRadius: 10, padding:10, borderWidth: 1, borderColor: '#EEEEEE', borderBottomWidth: 0}}>
<ImageText listvalue="01" dess="Clot X Air Force 1 PRM Royal Slick"/>
<ImageText listvalue="02" dess="Air Jordan 14 Retro Special edition"/>
<ImageText listvalue="03" dess="Air Jordan 14 Retro Special edition"/>
<ImageText listvalue="04" dess="Air Jordan 14 Retro Special edition"/>
<ImageText listvalue="05" dess="Air Jordan 14 Retro Special edition"/>
</View> */}
              </View>
            </View>
            {/* {/ Cart and Images DEC END /} */}
            <View style={{ flex: 1, marginTop:-145,  marginRight: 36, marginLeft: 36, backgroundColor: '#fff', borderRadius:10, borderWidth: 1, borderColor: '#EEEEEE'}}>
              {/* <ImageText listvalue="03" dess="Clot X Air Force 1 PRM Royal Slick"/>
<ImageText listvalue="04" dess="Nike Jordan Proto- React Z"/>
<ImageText listvalue="05" dess="Jordan Proto-Max 720"/> */}
              <ListItem onPress={() => navigate('Editprofile')} noBorder icon style={{
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                marginTop: 20,
                // marginBottom:20,
                paddingBottom: 15,
                justifyContent:'center', alignItems:'center'
              }} >
                <Left>
                  <Badge style={{height:40, width:40, borderRadius:50, backgroundColor:'#000', alignItems:'center', justifyContent:'center'}}><Text>01</Text></Badge>
                </Left>
                <Body>
                  <Text style={{
                    color: '#616161',
                    fontSize: 13,
                  }}>cvjkvbsdvhibsdfibsdfvibsdsdgsdgsdgfg</Text>
                </Body>
                <Right >
                <Image source={require('../images/Image_111111.png')} style={{ height: 31, width: 61 }} /> 

                </Right>
              </ListItem>
              <ListItem onPress={() => navigate('Editprofile')} noBorder icon style={{
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                marginTop: 15,
                paddingBottom: 15,
                justifyContent:'center', alignItems:'center'
              }} >
                <Left>
                  <Badge style={{height:40, width:40, borderRadius:50, backgroundColor:'#000', alignItems:'center', justifyContent:'center'}}><Text>01</Text></Badge>
                </Left>
                <Body>
                  <Text style={{
                    color: '#616161',
                    fontSize: 13,
                  }}>cvjkvbsdvhibsdfibsdfvibsdsdgsdgsdgfg</Text>
                </Body>
                <Right >
                <Image source={require('../images/Image_111111.png')} style={{ height: 31, width: 61 }} /> 

                </Right>
              </ListItem><ListItem onPress={() => navigate('Editprofile')} noBorder icon style={{
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                marginTop: 15,
                paddingBottom: 15,
                justifyContent:'center', alignItems:'center'
              }} >
                <Left>
                  <Badge style={{height:40, width:40, borderRadius:50, backgroundColor:'#000', alignItems:'center', justifyContent:'center'}}><Text>01</Text></Badge>
                </Left>
                <Body>
                  <Text style={{
                    color: '#616161',
                    fontSize: 13,
                  }}>cvjkvbsdvhibsdfibsdfvibsdsdgsdgsdgfg</Text>
                </Body>
                <Right >
                <Image source={require('../images/Image_111111.png')} style={{ height: 31, width: 61 }} /> 

                </Right>
              </ListItem>



              <ListItem onPress={() => navigate('Editprofile')} noBorder icon style={{
                borderBottomWidth: 1,
                borderBottomColor: '#d3d3d3',
                marginTop: 15,
                paddingBottom: 15,
                justifyContent:'center', alignItems:'center'
              }} >
                <Left>
                  <Badge style={{height:40, width:40, borderRadius:50, backgroundColor:'#000', alignItems:'center', justifyContent:'center'}}><Text>01</Text></Badge>
                </Left>
                <Body>
                  <Text style={{
                    color: '#616161',
                    fontSize: 13,
                  }}>cvjkvbsdvhibsdfibsdfvibsdsdgsdgsdgfg</Text>
                </Body>
                <Right >
                <Image source={require('../images/Image_111111.png')} style={{ height: 31, width: 61 }} /> 

                </Right>
              </ListItem>




              <ListItem onPress={() => navigate('Editprofile')} noBorder icon style={{
                borderBottomWidth: 0,
                borderBottomColor: '#d3d3d3',
                marginTop: 15,
                paddingBottom: 15,
                justifyContent:'center', alignItems:'center'
              }} >
                <Left>
                  <Badge style={{height:40, width:40, borderRadius:50, backgroundColor:'#000', alignItems:'center', justifyContent:'center'}}><Text>01</Text></Badge>
                </Left>
                <Body>
                  <Text style={{
                    color: '#616161',
                    fontSize: 13,
                  }}>cvjkvbsdvhibsdfibsdfvibsdsdgsdgsdgfg</Text>
                </Body>
                <Right >
                <Image source={require('../images/Image_111111.png')} style={{ height: 31, width: 61 }} /> 

                </Right>
              </ListItem>


              

              
            </View>


            <View style={{ flex: 1, height: 250, marginTop: 50 }}>

              <View style={{ flex: 1 }}>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                  <Text style={{ padding: 20, paddingLeft: 40, fontSize: 15, fontWeight: '700' }}>
                    SPONSOR
</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Image source={require('../images/sponsor_banner.png')} style={{ height: null, width: null, flex: 1 }} />
                  <View style={{ flex: 1, position: 'absolute', left: 0, top: 30, paddingLeft: 36, width: Dimensions.get('window').width, }}>
                    <View style={{ flex: 1, marginBottom: 30 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 28, lineHeight: 30, color: '#fff', textAlign: 'left' }} >The <Text style={{ fontWeight: 'bold', fontSize: 28, lineHeight: 30, color: '#F6BB2B', textAlign: 'left' }}>Ultimate</Text></Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 28, lineHeight: 30, color: '#fff', textAlign: 'left' }} >Sneaker</Text>
                      <Text style={{ fontWeight: 'bold', fontSize: 28, lineHeight: 30, color: '#fff', textAlign: 'left' }} >Care</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => alert('helloooo')} style={{ flexDirection: 'row', borderWidth: 1, borderColor: '#eeeeee', padding: 8, width: 100, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 10, color: '#fff', lineHeight: 11, letterSpacing: 0.6, textTransform: 'uppercase' }}>shop now</Text></TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ flex: 0.3 }}>
                <Textt Trending="Top Brands" Viewall="VIEW ALL" />
              </View>
              <ScrollView horizontal={true} style={{ flex: 0.7, height: 150 }}>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1, borderColor: '#F0F0F0', marginLeft: 40, justifyContent: 'center', alignItems: 'center'
                  }}>

                    <Image source={require('../images/addidas_1.png')} />

                  </View>
                  <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1, borderColor: '#F0F0F0', marginLeft: 10, justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Image source={require('../images/addidas_1.png')} />
                  </View>
                  <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1, borderColor: '#F0F0F0', marginLeft: 10, justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Image source={require('../images/addidas_1.png')} />

                  </View>
                  <View style={{
                    width: 80,
                    height: 80,
                    borderWidth: 1, borderColor: '#F0F0F0', marginLeft: 10, justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Image source={require('../images/addidas_1.png')} />

                  </View>
                </View>

              </ScrollView>


            </View>
            <View style={{ flex: 1, backgroundColor: '#282828', height: 200 }}>
              <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                <Text style={{ fontSize: 12, color: '#fff', fontWeight: 'bold' }}>GET THE LATEST UPDATES</Text>
              </View>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 0.7, paddingLeft: 30, justifyContent: 'center' }}>
                  <Text style={{ fontSize: 8, fontWeight: '300', paddingLeft: 5, color: '#fff' }}>Email Address</Text>
                  <TextInput style={{ borderBottomWidth: 1, borderBottomColor: '#fff', color: '#fff', }} placeholderTextColor="#696969" placeholder="Enter your email address" />
                </View>
                <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{
                    width: 50,
                    height: 60, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'
                  }}>
                    <Image source={require('../images/send_1.png')} />
                  </View>
                </View>
              </View>



            </View>


          </Content>
        </Container>
      </SafeAreaView>
    );
  }

}

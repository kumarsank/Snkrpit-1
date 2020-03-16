import React, { Component } from 'react';
import {
    Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Separator, List, View
} from 'native-base';
import { StatusBar, ScrollView } from 'react-native';
import Spacer from '../UI/Spacer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class Editprofile extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#FAFAFA', }}>
                <Content>
                    <Separator style={{
                        paddingTop: 60,
                        paddingBottom: 50,
                        borderBottomWidth: 1,
                        borderColor: '#d3d3d3',
                    }}>
                        <Text style={[styles.mainheading]}>EDIT PROFILE</Text>
                        <Text style={[styles.Separatortext]}>PROFILE</Text>
                    </Separator>
                    <List>
                        <ListItem selected icon>
                            <Body>
                                <Text style={[styles.listtext]} >Username</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.listtextright]}>@johndoe</Text>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text style={[styles.listtext]} >First Name</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.listtextright]}>John</Text>
                            </Right>
                        </ListItem >
                        <ListItem icon last>
                            <Body>
                                <Text style={[styles.listtext]}>Last Name</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.listtextright]}>Doe</Text>
                            </Right>
                        </ListItem>
                        <Separator style={[styles.Separatorlist]}>
                            <Text style={[styles.Separatortext]}>ACCOUNT</Text>
                        </Separator>
                        <ListItem icon>
                            <Body>
                                <Text style={[styles.listtext]}>Email</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.listtextright]}>johndoe@gmail.com</Text>
                                <Icon ios='ios-lock' android="md-lock" />
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Body>
                                <Text style={[styles.listtext]}>Phone</Text>
                            </Body>
                            <Right>
                                <Text style={[styles.listtextright]}>Add Phone Number</Text>
                                <Icon ios='ios-lock' android="md-lock" />
                            </Right>
                        </ListItem>
                        <ListItem icon last>
                            <Body>
                                <Text style={[styles.listtext]}>Password</Text>
                            </Body>
                            <Right>
                                <Text style={{fontSize:15}} >Change Password</Text>
                            </Right>
                        </ListItem>
                    </List>
                    <View bordered style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 30,
                        paddingBottom: 30,
                        backgroundColor: '#FAFAFA',
                        padding: 15,
                        borderTopWidth: 1,
                        borderColor: '#d3d3d3',
                    }}>

                        <Button onPress={()=>alert('hello')} success full large >
                            <Text style={{ fontSize: 15, letterSpacing: 1 }}>SAVE</Text>
                        </Button>
                    </View>
                </Content>
            </Container >


        );
    }
}
const styles = {
    mainheading: {
        color: '#545454',
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 1,
        paddingBottom: 20,
    },
    list: {
        marginBottom: 20,
        marginTop: 20,
        fontSize: 18,
        height: 44,
    },
    listtext: {
        color: '#616161',
        fontSize: 13,
    },
    listicon: {
        color: '#000',
        marginTop: -10,
    },
    listborder: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
        marginTop: 15,
        paddingBottom: 15
    },
    listtextright: {
        color: '#d3d3d3',
        fontSize: 15,
    },
    Separatorlist: {
        padding: 30,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#d3d3d3',
    },
    Separatortext: {
        fontSize: 10,
        fontWeight: 'bold',
    }
}
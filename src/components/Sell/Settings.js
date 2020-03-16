import React, { Component } from 'react';
import { Container, Content, Button, ListItem, List, Text, Icon, Left, Body, Right, Switch, Separator, View } from 'native-base';


export default class Settings extends Component {
    render() {
    
        return (
            <Container>
                <Content>

                    <Separator style={{
                        paddingTop: 60,
                        paddingBottom: 50,
                    }}>
                        <Text style={[styles.mainheading]}>SETTINGS</Text>
                        <Text style={[styles.Separatortext]}>MY ACCOUNT</Text>
                    </Separator>
                    <ListItem  noBorder icon style={[styles.listborder]} >
                        <Left>
                            <Icon ios='ios-menu' android="md-pint" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]}>Profile</Text>
                        </Body>
                        <Right >
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem noBorder icon style={[styles.listborder]} >
                        <Left>
                            <Icon ios='ios-paper' android="md-paper" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]}>Recent Trades</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last style={[styles.listborder]}>
                        <Left>
                            <Icon active name="md-pin" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]}>My Location</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator style={[styles.Separatorlist]}>
                        <Text style={[styles.Separatortext]}>APP PREFERENCES</Text>
                    </Separator>
                    <ListItem noBorder icon style={[styles.listborder]}>
                        <Left>
                            <Icon active name="wallet" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]} >Payment Method</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last style={[styles.listborder]}>
                        <Left>
                            <Icon active name="md-notifications-outline" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]} >Notification</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator style={[styles.Separatorlist]}>
                        <Text style={[styles.Separatortext]}>SUPPORT</Text>
                    </Separator>
                    <ListItem noBorder icon style={[styles.listborder]}>
                        <Left>
                            <Icon active android="md-help-buoy" ios="ios-help-buoy" />
                        </Left>
                        <Body >
                            <Text style={[styles.listtext]} >Help</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon last style={[styles.listborder]}>
                        <Left>
                            <Icon active ios="ios-eye-off" android="md-eye-off" />
                        </Left>
                        <Body>
                            <Text style={[styles.listtext]} >Privacy Policy</Text>
                        </Body>
                        <Right>
                            <Icon style={[styles.listicon]} ios='ios-arrow-forward' android="ios-arrow-forward" />
                        </Right>
                    </ListItem>
                    <View bordered style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 30,
                        paddingBottom: 30,
                        backgroundColor: '#FAFAFA',
                        padding: 30,
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        borderColor: '#d3d3d3',
                    }}>
                        <Text style={{ fontSize: 20, color: '#545454', letterSpacing: 1 }}>LOGOUT</Text>
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
import React, { Component } from "react";
import {
    Container, View, Content, Text, H1, List, ListItem, Form, Item, Label, Input, Left, Right, Icon
} from 'native-base';
import { Spacer } from '../UI';


export default class SizechartScreen extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <View style={[styles.headingstyle]} >
                    <H1 style={[styles.mainheading]} >Post A Trade</H1>
                    <Spacer size={10} />
                </View>

                <Content>
                    {/* <ArticlesForm /> */}
                    <List >
                        <ListItem onPress={() => navigate('Editprofile')}>
                            <Left>
                                <Text>edit</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => navigate('Condition')}>
                            <Left>
                                <Text>Condition</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left>
                                <Text>Extra</Text>
                            </Left>
                            <Right>
                                <Icon name="ios-arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>

        );
    }
}
const styles = {
    headingstyle: {
        paddingTop: 18,
        paddingLeft: 30,
        paddingRight: 30,
    },
    border: {
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3',
    },
    mainheading: {
        color: '#545454',
        fontWeight: 'bold',
        fontSize: 17,

    }
}
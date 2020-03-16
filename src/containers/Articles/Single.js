import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from '../../components/Articles/tab1';
import Tab2 from '../../components/Articles/tab2';
import Tab3 from '../../components/Articles/tab3';
export default class ArticlesSingleContainer extends Component {

  
  render() {
    return (
      <Container >
        
        <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
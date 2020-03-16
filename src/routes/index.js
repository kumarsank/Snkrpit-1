import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';
import DefaultProps from '../constants/navigation';
import AppConfig from '../constants/config';

import { ArticlesForm, ArticlesList, ArticlesSingle } from '../containers';

import AboutComponent from '../components/About';
import Gift from '../components/Articles/gift';
// import Settings from '../components/Sell/Settings';
import Settingnav from '../components/Settings/Settingnav';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="home"
          title={AppConfig.appName}
          icon={() => <Icon name="home" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="home" component={AboutComponent} />
        </Stack>

     

        <Stack
          key="Screen 3"
          title="search"
         
          icon={() => <Icon name="search" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          {/* <Scene key="Screen 3" component={ArticlesList} /> */}
          <Scene key="Screen3" component={ArticlesSingle} />
          
        </Stack>
        <Stack
          key="Gift"
          title="Gift"
          icon={() => <Icon name="gift" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="Gift" component={Gift} />
          {/* <Scene key="articlesSingle" component={ArticlesSingle} /> */}
        </Stack>


        <Stack
          key="form"
          title="Articles Form"
          icon={() => <Icon name="contact" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="form" component={Settingnav} />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;

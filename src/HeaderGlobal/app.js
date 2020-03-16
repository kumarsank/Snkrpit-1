//This is an example to add Image Icon Inside Navigation Bar

import React, { Component } from 'react';
//import react in our code.

//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeActivity from '../HeaderGlobal/HomeActivity';
import ActionBarImage from '../HeaderGlobal/ActionBarImage';

const App = createStackNavigator(
    {
        First: {
            screen: HomeActivity,
            //You can set the header image and title for the screen from here also
            /*navigationOptions: {
              title: 'Home Activity',
              headerLeft: <ActionBarImage />,
              headerStyle: {
                backgroundColor: '#e3e3e3',
              },
              headerTintColor: '#606070',
            }*/
        },
    }
    //You can set the header image and title for all the screens in once using defaultNavigationOptions
    /*,{
      defaultNavigationOptions: {
        title: 'Application Name',
        headerLeft: <ActionBarImage />,
        headerStyle: {
          backgroundColor: '#e3e3e3',
        },
        headerTintColor: '#606070',
      },
    }*/
);
export default createAppContainer(App);
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Shoppage from '../Components/ShopPage';

import { NavigationContainer, DefaultTheme   } from '@react-navigation/native';
import DetailsPage from "../Components/ShopDetails/DetailsPage"

const Stack = createStackNavigator()

const RootNavigator = ({navigation}) => {

  

    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: "#F4F4FB"
        },
      };

      

    return (
        <NavigationContainer theme = {MyTheme} >
        <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              
        >
             
              <Stack.Screen 
            name = "Shop Page" 
            component = {Shoppage}    
            />

              <Stack.Screen 
            name = "Details Page"
             component = {DetailsPage} />

        

 
          

          
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
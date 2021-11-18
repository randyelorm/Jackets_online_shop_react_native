import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import Shoppage from '../Components/ShopPage';
import FirstDetailsPage from '../Components/ShopDetails/FirstDetailsPage';
import { NavigationContainer, DefaultTheme   } from '@react-navigation/native';
import SecondDetailsPage from '../Components/ShopDetails/SeconDetailsPage';
import ThirdDetailsPage from '../Components/ShopDetails/ThirdDetailsPage';
import FourthDetailsPage from '../Components/ShopDetails/FourthDetailsPage';

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
            name = "First Details Page"
             component = {FirstDetailsPage} />

             <Stack.Screen 
            name = "Second Details Page"
             component = {SecondDetailsPage} />


            <Stack.Screen 
            name = "Third Details Page"
             component = {ThirdDetailsPage} />

            <Stack.Screen 
            name = "Fourth Details Page"
             component = {FourthDetailsPage} />

 
          

          
        </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;
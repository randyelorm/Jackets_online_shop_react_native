import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import BackIcon from "react-native-vector-icons/AntDesign"
import CartIcon from "react-native-vector-icons/AntDesign"
import StarIcon from "react-native-vector-icons/FontAwesome"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import {useRoute} from "@react-navigation/native"
import { Rating, AirbnbRating } from 'react-native-ratings';



const Shoppage = ({ navigation }) => {

      
const ShoppingItems = [
    { 
        id: 0,
        mysource: require("../assets/1.png"),
        title: "Cotton Biker Jacket",
        price: "$99",
        defaultRating: 4,
   

     
    },

    {   
        id: 1,
        mysource: require("../assets/2.png"),
        title: "Pink Leather Jacket",
        price: "$80",
        defaultRating: 3,
  
    },

    {
        id: 2,
        mysource: require("../assets/3.png"),
        title: "Classic Green Hoodie",
        price: "$140",
        defaultRating: 5,

    },

    {
        id: 3,
        mysource: require("../assets/4.png"),
        title: "Red Velvet Jacket",
        price: "$115",
        defaultRating: 4,
 
    },


]


const goToDetails=()=> {
 

}





    return (
        <View style = {styles.container}>

                <View style = {styles.HeaderIconsView}>
                  <View style= {styles.IconsView}><BackIcon name = "arrowleft" style = {styles.backIcon}/></View>  
                  <View style= {styles.IconsView}><CartIcon name = "shoppingcart" style = {styles.cartIcon}/></View>  
               
                </View>


                <View style = {styles.TitleSearchBarView}>
                        <Text style = {styles.headerText}>Womens Jacket</Text>
                        <TextInput type = "text" placeholder= "search Jacket" style = {styles.searchInput}/>
                        <Text style = {styles.filterText}>Filter</Text>
                      
                </View>
                <View style = {styles.JacketsView}>

                    <FlatList
                      keyExtractor={
                        (item, index) => {
                            return index
                        }
                    }
                    data= {ShoppingItems}
                  
                    renderItem={
                        ({item})=> {
                            return(
                          
                                <TouchableOpacity key = {item.id} style = {styles.FlatListView} onPress = {()=>(navigation.navigate("Details Page", {details: item}))} >
                                      
                                  <View style = {styles.JacketImagesView}>
                                      <Image style = {styles.JacketImages} source = {item.mysource}/>
                                  
                                  </View>

                                        <View style = {styles.JacketInfo}>
                                            <Text style = {styles.productName}> {item.title}</Text>
                                            <View style={styles.reviews}>
                                                       <AirbnbRating
                                                        count={5}
                                                        defaultRating={item.defaultRating}
                                                        size={10}
                                                        showRating={false}
                                                        
                                                        isDisabled = {true}
                                                        /> 
                                            </View>
                                                 
                                            <Text style= {styles.productPrice}> {item.price}</Text>
                                        </View>
                                        
                                </TouchableOpacity>
                             
                              

                            )
                        }
                    }

                    
                    
                    />


                </View>
        </View>
    );
}

export default Shoppage;

const styles = StyleSheet.create({
    container: {
        flex: 100,
        paddingHorizontal:16
    },
    HeaderIconsView: {
        flex: 7,
       
        flexDirection: "row",
        justifyContent: "space-between"
    },
    
    TitleSearchBarView: {
        flex: 15,
    
        position: "relative"
    
    },
   
    JacketsView: {
        flex: 82,
    
    },


    IconsView: {

        shadowColor: "rgba(0,0,0,0.2)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 5,
  
    },

    backIcon: {
        fontSize: 20,
        backgroundColor: "white",  
        padding: 8,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 100 / 5,
        overflow: "hidden"
 
    },

    cartIcon: {
        color: "#757DEF",
        fontSize: 20,
        backgroundColor: "white",  
        padding: 8,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 100 / 5,
        overflow: "hidden",
   
      },

      headerText: {
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 20,
           
      },

      searchInput: {
          backgroundColor: "white",
          padding: 15,
          borderRadius: 10,
          paddingRight: 0,
          shadowColor: "rgba(0,0,0,0.2)",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.9,
          shadowRadius: 8,
          elevation: 5,
      
      },

      filterText: {
        position: "absolute",
        left: 310,
        top: 60,
        fontSize: 10,
        color: "#757DEF",
        fontWeight: "bold"
      },

       JacketImagesView: {
        flex: 2.5,
        shadowColor: "rgba(0,0,0,0.1)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: "white",
        width: 100,
        height: 100,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 20,
         
          
      
      },


      JacketImages: {
          width: 100,
          height: 120,
    

        
       
      
          
        
       
          
      },

      FlatListView: {
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginVertical: 20
      },

      JacketInfo: {
          flexDirection: "column",
          flex: 5,
          marginLeft: 30
         
          
      },

      reviews: {
        
            alignSelf: "flex-start"

          
      },

     
      productName: {
            fontWeight:"bold",
            marginBottom: 5,
            fontSize: 12,
        
      },

      productPrice: {
          fontWeight: "bold",
          color: "#757DEF",
          marginTop: 10
      }

});
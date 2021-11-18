import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {useRoute} from "@react-navigation/native"
import BackIcon from "react-native-vector-icons/AntDesign"
import {useNavigation} from "@react-navigation/native"
import CartIcon from "react-native-vector-icons/AntDesign"
import LoveIcon from "react-native-vector-icons/Feather"
import StarIcon from "react-native-vector-icons/FontAwesome"
import { Rating, AirbnbRating } from 'react-native-ratings';


const ThirdDetailsPage = () => {

const navigation = useNavigation()
 
const goBack=()=> {
  navigation.goBack()

}


    
    return (
        <View style = {styles.container}>
                <View style = {styles.HeaderIconsView}>
                  <View style= {styles.IconsView}><BackIcon name = "arrowleft" style = {styles.backIcon} onPress= {goBack}/></View>  
                  <View style= {styles.IconsView}><CartIcon name = "shoppingcart" style = {styles.cartIcon}/></View>  
                </View>

                <View style = {styles.ImageView}>
                  <Image source={require("../../assets/3.png")} style = {styles.Image}/>
                <View style = {styles.LoveIconView} ><LoveIcon name = "heart" style = {styles.LoveIcon} /></View>  
                </View>


                <View style = {styles.DetailsView}>

                  <Text style= {styles.ProductNameText}>Classic Green Hoodie</Text>
                  
                  <View style = {styles.StarsView}>
                    <Text>Review:</Text>
                    <AirbnbRating
                        count={5}
                        defaultRating={5}
                        size={10}
                        showRating={false}
                        isDisabled = {true}
                          /> 
                  </View>

                  <View style = {styles.horizontalLinesView}>

                  </View>

                 <View style = {styles.descriptionView}>
                   <Text style = {styles.descriptionText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi, aliquid sequi? At sunt, impedit dolore voluptatum vitae
                   </Text>
            
                    
                 </View>

                 <View style={styles.marterialDescriptionView}>
                   <Text style={styles.marterialDescriptionText}>
                     Material: 91% polyester, 9% elastane
                   </Text>
                 </View>

                 <View style = {styles.SizesView}>
                  <View><Text style = {styles.sizes}>XS</Text></View>  
                  <View><Text style = {styles.sizes}>S</Text></View>  
                  <View><Text style = {styles.sizes}>M</Text></View>  
                  <View><Text style = {styles.sizesCurrent}>L</Text></View>  
                  <View><Text style = {styles.sizes}>XL</Text></View>  
                 
                </View>
                
                </View>


              


                <View style = {styles.PriceCartView}>
                  <View>
                      <Text style= {styles.totalAmt}>Total Amount</Text>
                      <Text style={styles.totalPrice}>$140</Text>
                  </View>

                  <TouchableOpacity style ={styles.AddToCartTouchable}>
                    <Text style= {styles.AddToCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
        </View>
    );
}

export default ThirdDetailsPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 100
  },

  HeaderIconsView: {
   
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 5,

},

ImageView: {
  flex: 30,
  borderTopColor: "#F4F4FB",
  shadowColor: "rgba(0,0,0,0.1)",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 10,
  shadowRadius: 3,
  elevation: 5,
  backgroundColor: "white",
 
  borderBottomLeftRadius: 200,
  borderBottomRightRadius: 15,
  borderTopRightRadius: 200,
  borderTopLeftRadius: 20,
 
},


DetailsView: {
  flex:40,

},


SizesView: {
  flex: 5,
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginRight: 40
},

PriceCartView: {
flex: 7,
backgroundColor: "#757DEF",
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
padding:10,
borderRadius:10
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


  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
    },

    LoveIconView: {

      shadowColor: "rgba(0,0,0,0.2)",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.9,
      shadowRadius: 3,
      elevation: 5,
    },

    LoveIcon: {
      color: "#757DEF",
      fontSize: 20,
      backgroundColor: "white",  
      padding: 8,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 100 / 5,
   
      overflow: "hidden",
        position: "absolute",
        top: -200,
        left: 285,
     
    },
    

  ProductNameText: {
    // flex: 10,
    fontSize: 25,
    fontWeight: "bold"

  },

  StarsView: {
    flexDirection: "row",
    marginVertical: 10
  },



horizontalLinesView: {
 width: 40,
  height:4,
  backgroundColor: "#757DEF",
  marginVertical: 10
 
},

sizes: {
 backgroundColor: "white",
padding: 10,
borderRadius: 5,
overflow: 'hidden',
shadowColor: "rgba(0,0,0,0.3)",
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.9,
shadowRadius: 3,
elevation: 5,


},

sizesCurrent: {
backgroundColor: "#757DEF",
color: "white",
padding: 10,
borderRadius: 5,
overflow: 'hidden',
shadowColor: "rgba(0,0,0,0.3)",
shadowOffset: { width: 0, height: 1 },
shadowOpacity: 0.9,
shadowRadius: 3,
elevation: 5,
},



marterialDescriptionView: {},

marterialDescriptionText: {
  marginVertical: 20,
  color:"#AFB4F5",
  backgroundColor: "white",
  padding: 15,
  borderRadius: 10,
  overflow: "hidden"
},



totalAmt: {
fontSize: 12,
color: "white",
fontWeight: "bold"
},

totalPrice: {
fontSize: 25,
color: "white",
fontWeight: "bold"
},

AddToCartTouchable: {
  backgroundColor: "#4F4FEC",
  padding:10,
  borderRadius: 10
},

AddToCartText: {
color: "white",
fontWeight: "bold"
}

});
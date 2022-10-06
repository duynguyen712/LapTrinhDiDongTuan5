import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const data = [
  {
    name: "Mô hình Luffy",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh1.jpg"),
  },
  {
    name: "Mô hình Akainu",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh2.png"),
  },
  {
    name: "Mô hình Ace",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh3.png"),
  },
  {
    name: "Mô hình Roronoa Zoro",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh4.jpg"),
  },
  {
    name: "Mô hình Boa Hancock",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh5.jpg"),
  },
  {
    name: "Mô hình Enel",
    producer: "Hunter Fan Studio",
    imgLink: require("../assets/mohinh6.png"),
  },
  
];
export default function ListProduct()  {
  return (
    
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.view}>
          <Image style={styles.image} source={item.imgLink}/>
          <View >
            <Text style ={{}}>{item.name}</Text>
            <Text style={{color:'gray'}}>
              Shop
              <Text> {item.producer}</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text style ={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
    view:{
        display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 12,
            paddingTop:5,
            paddingVertical: 3,
            borderBottomWidth: 1,
            borderColor: "gray",
            borderStyle: "solid",
            justifyContent: "space-between",
        
    },
    image:{
        width:70,
        height:70
    },
    button:{
        backgroundColor:"red",
        height:40,
        width:70,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent:"center",
        
    },
  });
  

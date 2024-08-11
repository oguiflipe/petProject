import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

//importação da 
import { PetsList } from "../../data/petsList";


export function PetListItem({name, raca, image}: PetsList){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.sessionImage} source={image} alt="" />
                <Text style={styles.name}>{`${name}`}</Text>
                <Text style={styles.raca}>{`${raca}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#F6F6F6",
        marginLeft: 15,
        borderRadius: 15, 
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 25
    },
    name:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#8a8d8f",
        paddingTop: 5
    },
    raca:{
        fontSize: 14,
        fontWeight: "bold",
        color: "#9CA8FB",
        paddingTop: 5
    },
    button:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    sessionImage:{
        height: 100,
        width: 100,
        borderRadius: 50,
    }
})
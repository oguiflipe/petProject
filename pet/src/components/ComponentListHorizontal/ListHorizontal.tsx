import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

//importação da 
import { Suggestion } from "../../data/suggestionList";


export function SuggestionsItem({name}: Suggestion){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>{`${name}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#818AF9",
        padding: 10,
        marginLeft: 15,
        borderRadius: 15, 
    },
    text:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
    button:{
        width: "100%",
        height: 36,
        justifyContent: "center",
        alignItems: "center",
    }
})
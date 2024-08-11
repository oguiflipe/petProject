import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Doctors } from "../../data/doctorList";
import Ionicons from "@expo/vector-icons/Ionicons";


export function DoctorsItem({name, image, avaliable, dog, cat, distance, services}: Doctors){
  return (
    <TouchableOpacity key={name} style={styles.container}>
      <View style={styles.sessitonImageProfile}>
        <Image source={image} style={styles.image}/>
      </View>

      <View>
        <Text style={styles.title}>{`Dr. ${name}`} </Text>
        <Text style={styles.services}>{`Serviços: ${services}`}</Text>
        <Text style={styles.distance}>
          <Ionicons style={styles.buttonIcon} name="location-outline" size={24}/>
          {` ${distance}`}
        </Text>
        <View style={styles.acting}>
          <Text style={styles.avaliable}>{`${avaliable}: `}</Text>
          <View style={styles.actingImage}>
            <Image source={dog} style={styles.imageLogo}/>
            <Image source={cat} style={styles.imageLogo}/>
          </View>
        </View>
        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 15,
    height: 143,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    padding: 20,
    backgroundColor: "#F6F6F6",
    width: "90%"
  },
  sessitonImageProfile:{
    paddingRight: 20
  },
  image:{
    height: 103,
    width: 88,
    borderRadius: 8,
    padding: 0
  },
  title:{
    marginBottom: 7,
    fontSize: 14,
    fontWeight: "bold",
    color: "#3F3E3F"
  },
  services:{
    marginBottom: 7,
    fontSize: 14,
    fontFamily: "sans-serif",
    color: "#3F3E3F",
    paddingBottom: 5,

  },
  distance:{
    marginBottom: 7,
    fontSize: 14,
    color: "#ACA3A3"
  },
  buttonIcon:{
    marginBottom: 7,
    fontSize: 14,
    color: "#ACA3A3",
    alignItems: "center",
    justifyContent: "center"
  },
  avaliable:{
    marginBottom: 7,
    fontSize: 16,
    fontWeight:"bold",
    color: "#50CC98"
  },
  acting:{
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  imageLogo:{ 
    height: 10,
    width: 10,
  },
  actingImage:{
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});


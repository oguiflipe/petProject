import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { PetsExams } from "../../data/petsExam"; 
import Ionicons from "@expo/vector-icons/Ionicons";


export function PetsExamItems({name, image, raca, dateExame, timeExame, procedure}: PetsExams){
  return (
    <TouchableOpacity key={name} style={styles.container}>
      <View style={styles.sessitonImageProfile}>
        <Image source={image} style={styles.image}/>
      </View>

      <View style={styles.sessionTexts}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.raca}>{raca}</Text>
        <Text style={styles.date}>
          <Ionicons style={styles.buttonIcon} name="calendar-number-outline" size={24}/>
          {` ${dateExame}`}
        </Text>
        <View style={styles.acting}>
          <Text style={styles.avaliable}>Procedimento: </Text>
          <Text style={styles.avaliable}>{procedure}</Text>
        </View>
        <View style={styles.actingImage}>
          <Ionicons name="alarm-outline" size={23} color="#50CC98" />
          <Text style={styles.timeExam}>{timeExame}</Text>
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
    height: 160,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 14,
    padding: 20,
    backgroundColor: "#F6F6F6",
  },
  sessitonImageProfile:{
    borderRadius: 15
  },
  image:{
    height: "100%",
    width: 100,
    borderRadius: 8,
    padding: 0
  },
  sessionTexts:{
    //padding: 20
  },
  name:{
    marginTop: "5%",
    marginBottom: "6%",
    fontSize: 14,
    fontWeight: "bold",
    color: "#8a8d8f"
  },
  raca:{
    paddingBottom: 5,
    fontSize: 13,
    fontFamily: "sans-serif",
    color: "#8a8d8f",
  },
  date:{
    paddingBottom: 5,
    fontSize: 16,
    color: "#ACA3A3"
  },
  buttonIcon:{
    fontSize: 14,
    color: "#ACA3A3",
    alignItems: "center",
    justifyContent: "center"
  },
  avaliable:{
    paddingBottom: 5,
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
    flexDirection: "row",
    alignItems: "center",
  },
  timeExam:{
    fontSize: 16,
    fontWeight:"bold",
    color: "#50CC98"
  },
});


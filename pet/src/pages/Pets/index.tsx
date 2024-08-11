import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

//itens para a flatlist
import { petList, PetsList } from "../../data/petsList";
import { petsExam, PetsExams } from "../../data/petsExam";

//importando o component
import { PetListItem } from "../../components/ListPets/PetsList";
import { PetsExamItems } from "../../components/ListPets/PetsExam";
import { SeparatorItem } from "../../components/SeparatorItem/SeparatorItem";

export default function Pets() {

  //funcao para melhorar a performance do petlist
  function petListItems({ item }: ListRenderItemInfo<PetsList>) {
    return <PetListItem {...item} />;
  }

  function listExamsItems({item}: ListRenderItemInfo<PetsExams>){
    return <PetsExamItems {...item} />
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pets</Text>
      
      <View style={styles.containerImg}>
        <FlatList
          data={petList}
          keyExtractor={(item) => item.name}
          renderItem={petListItems}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            console.log("Clicou!");
          }}
        >
          <Ionicons style={styles.petAdd} name="add-sharp" size={24} />
        </TouchableOpacity>
      </View>
      
      <SeparatorItem />

      
      <View style={styles.agendamentos}>
      <Ionicons style={styles.buttonIcon} name="calendar-number-outline" size={24}/>
        <Text style={styles.nameIcon}>Agendamentos</Text>
      </View>
      

      <View style={styles.sessionAgendamentos}>
        <FlatList 
          data={petsExam}
          keyExtractor={(item) => item.name}
          renderItem={listExamsItems}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={SeparatorItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "#8a8d8f",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: "5%",
  },


  //Estilo dos animais adicionados
  containerImg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  petAdd:{
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btnAdd:{
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#9CA8FB",
    margin: 15
  },

  //sessao agendamentos
  sessionAgendamentos:{
    flex: 2,
    width: "100%",
    paddingBottom: "20%"
  },
  agendamentos:{
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  nameIcon:{
    fontSize: 16,
    color: "#8a8d8f",
    margin: 5
  },
  buttonIcon:{
    color: "#8a8d8f",
  },
});

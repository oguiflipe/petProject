import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";


//itens para a flatlist
import { DoctorsItem } from "../../components/ComponentFlat/RenderProfileProps";
import { SeparatorItem } from "../../components/SeparatorItem/SeparatorItem";
import { Doctors, doctorList } from "../../data/doctorList";

//lista horizontal, flat list2
import { SuggestionsItem } from "../../components/ComponentListHorizontal/ListHorizontal";
import { Suggestion, suggestionList } from "../../data/suggestionList";

const logoImg = require("../../assets/cat.png");
const circle = require("../../assets/teste3.png");

export default function Home() {
  //Função para melhorar a performance na renderização do flatlist
  function doctorItem({ item }: ListRenderItemInfo<Doctors>) {
    return <DoctorsItem {...item} />;
  }

  //função para melhorar a performance flatlist horizontal
  function suggestionsItem({ item }: ListRenderItemInfo<Suggestion>) {
    return <SuggestionsItem {...item}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.initialContainer}>
        <Text style={styles.titleText}>Hello, Human!</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="#818AF9" />
        </TouchableOpacity>
      </View>

      <View style={styles.sessionCart}>
        <View style={styles.sessionMove}>
          <View>
            <Text style={styles.textInfo}>
              A seu(a) pet será vacinado(a) amanhã às 07h00!
            </Text>
            <TouchableOpacity style={styles.buttonInfo}>
              <Text style={styles.buttonDetailInfo}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>

          <Image style={styles.sessionImage2} source={circle} />

          <View>
            <Image style={styles.sessionImage} source={logoImg} />
          </View>
        </View>
      </View>

      <View style={styles.inputView}>
        <View style={styles.inputViewStyle}>
          <TouchableOpacity>
            <Ionicons
              name="search-outline"
              style={styles.inoutIcon}
              size={24}
            />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            placeholder="Encontre a melhor vacina, tratamento..."
            placeholderTextColor="#CACACA"
          />
        </View>
      </View>

      <View>
        <FlatList
          data={suggestionList}
          keyExtractor={(item) => item.name}
          renderItem={suggestionsItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.sessionFlat}>
        <FlatList
          ItemSeparatorComponent={SeparatorItem}
          data={doctorList}
          keyExtractor={(item) => item.name}
          renderItem={doctorItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafa",
  },

  //container text
  initialContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
    margin: 15,
  },
  titleText: {
    color: "#3F3E3F",
    textAlign: "center",
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },

  //card inicial
  sessionCart: {
    backgroundColor: "#818AF9",
    height: 184,
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
    width: "90%",
    flexDirection: "row",
  },
  sessionMove: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "45%",
    flexDirection: "row",
  },
  textInfo: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 15,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    marginBottom: 15,
  },
  sessionImage: {
    height: 185,
  },
  sessionImage2: {
    height: 185,
    position: "absolute",
    marginLeft: 160,
  },
  buttonInfo: {
    backgroundColor: "#9CA8FB",
    borderRadius: 10,
    height: 35,
    width: 85,
    marginLeft: 15,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDetailInfo: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    textAlign: "center",
  },

  //input
  input: {
    fontSize: 12,
  },
  inputView: {
    padding: 15,
    flexDirection: "row",
  },
  inputViewStyle: {
    width: 270,
    height: 52,
    backgroundColor: "#F6F6F6",
    borderColor: "#8a8d8f",
    borderRadius: 15,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  inoutIcon: {
    color: "#CACACA",
    paddingRight: 10,
  },

  //session flatList
  sessionFlat: {
    flex: 1,
    paddingBottom:"20%"
  },


});

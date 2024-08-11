import React, { useState,  useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";



export default function Login() {
  //contexto para realizar o logout da aplicação
  const { signOut } = useContext(AuthContext);
  //funcao que realiza o logaout
  async function handleSignOut() {
    await signOut();
  }



  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sair</Text>
          <Ionicons
            style={styles.icon}
            name="log-out-outline"
            size={24}
          />
        </TouchableOpacity>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafa",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom:"20%"
  },
  button: {
    width: "90%",
    justifyContent: "center",
    height: 50,
    borderRadius: 5,
    textAlign: "left",
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "#8a8d8f",
  },
  buttonText: {
    color: "#8a8d8f",
    fontSize: 16,
  },
  icon: {
    color: "red",
  },
});

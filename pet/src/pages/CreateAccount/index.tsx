import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PrimaryInput } from "../../components/Inputs/PrimaryInput";

export default function Account({ navigation }) {

  //variáveis que armazenam os dados digitados
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //armazenando os dados digitados pelo usuário no app.
  const [user, setUser] = useState({});


  //Função para coletar os dados do usuário após clicar no botao registar
  function handleRegister(e){
    //preventDefault usado para não atualizar os dados do formulário
    e.preventDefault();
    
    //armazenando os dados digitados e passando na função
    setUser({
      name: name,
      email: email,
      password: password
    })

      alert("Usuário registrado com sucesso.")
      //alert("Erro ao registrar o cadastro.")
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}>
        <Ionicons name="paw-outline" size={100} color="#6E42F1" />
      </View>

      <PrimaryInput 
        placeholder="Nome:" 
        value={name}
        onChange={ (e) => setName(e.target.value)}
      />
      <PrimaryInput 
        placeholder="E-mail:"
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
      />
      <PrimaryInput 
        placeholder="Senha:" 
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
      />

      <PrimaryButton 
        title="Account" 
        onPress={handleRegister}
      />

      <View style={styles.containerLabels}>
        <Text style={styles.TextLabel}>OU</Text>

        <TouchableOpacity style={styles.buttonLabel}>
          <Text
            style={styles.TextLabel2}
            onPress={() => {
              navigation.navigate("Login");
              console.log("Clicou!");
            }}
          >
            Já tem uma conta? Conecte-se
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerImg: {
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },
  containerLabels: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  TextLabel: {
    fontSize: 15,
    textAlign: "center",
    padding: 5,
    fontWeight: "bold",
  },
  TextLabel2: {
    fontSize: 14,
    textAlign: "center",
    padding: 10,
  },
  buttonLabel:{
    color: '#fff'
  }
});

import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "../../context/AuthContext";

export default function SignIn({ navigation }) {
  const imageHome = require("../../assets/logo/home.jpg");

  const { signIn, loadingAuth } = useContext(AuthContext);

  //armazenando as informações em um estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validando se o usuário digitou algo no input
  async function handleLogin() {
    if (email === "" || password === "") {
      return alert("Por favor, digite seu e-mail e senha.");
    }

    // Logando usuário
    await signIn({ email, password });

    console.log(email, password);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.img} source={imageHome} alt="cachorro no colo de uma doutora" />
      </View>

      <View style={styles.sessionLogin}>
        <TextInput
          placeholder="Digite o seu e-mail..."
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          placeholderTextColor="#8a8d8f"
        />

        <TextInput
          secureTextEntry={true}
          placeholder="Digite a sua senha..."
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          placeholderTextColor="#8a8d8f"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={25} color="#fff" />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>

        <View style={styles.containerLabels}>
          <Text style={styles.TextLabel}>OU</Text>

          <TouchableOpacity style={styles.buttonLabel1}>
            <Text style={styles.TextLabel2}>Esqueceu a sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonLabel}
            onPress={() => {
              navigation.navigate("Cadastro");
              console.log("Clicou!");
            }}
          >
            <Text style={styles.TextLabel2}>
              Não tem uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffafa",
    alignItems: "center",
    justifyContent: "center",
  },

  containerImg: {
    flex: 2,
    width: "100%",
    height: "150%"
  },
  img:{
    width: "100%",
    height: 300,
    minHeight: "50%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  sessionLogin:{
    flex: 3,
    paddingTop: "40%",
    width: "100%",
    height: "150%"
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
    color: "#8a8d8f",
  },
  TextLabel2: {
    fontSize: 14,
    textAlign: "center",
    padding: 10,
    color: "#8a8d8f",
  },
  buttonLabel1: {},
  buttonLabel: {},
  button: {
    width: "90%",
    backgroundColor: "#818AF9",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    height: 40,
    padding: 10,
    borderRadius: 5,
  },
  textButton: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  input: {
    margin: 10,
    height: 40,
    padding: 10,
    width: "90%",
    backgroundColor: "#F6F6F6",
    borderColor: "#8a8d8f",
    borderRadius: 5,
  },
});

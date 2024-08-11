import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "../../context/AuthContext";

export function PrimaryButton({ title, email, password }) {
  const { signIn } = useContext(AuthContext);
  // Validando se o usuário digitou algo no input
  async function handleLogin() {
    console.log("logou");
    if (email === "" || password === "") {
      return;
    }

    // Logando usuário
    await signIn({ email, password });
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    backgroundColor: "#6E42F1",
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
});

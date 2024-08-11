import React from "react";
import { StyleSheet, TextInput } from "react-native";

export function PrimaryInput(props) {
  return (
    <TextInput style={styles.input} placeholderTextColor="#8a8d8f" {...props} />
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#8a8d8f",
    borderRadius: 5,
    width: "90%",
  },
});

import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function AddPets({navigation}){

  const [pet, setPet] = useState('');

    return( 
    <View style={styles.container}>

      <View style={styles.loadingImg}>
        <TouchableOpacity style={styles.containerImg}> 
          <Ionicons name="camera"size={50} color='#6E42F1' />
        </TouchableOpacity>
      </View>


      <View style={styles.containerInput}>
        <TextInput 
          style={styles.input}
          placeholder='Nome do Pet:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Espécie:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Raça:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Cor:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Nascimento:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Sexo:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Altura:'
          onChange={setPet}
          defaultValue={pet}
        />
        <TextInput 
          style={styles.input}
          placeholder='Peso:'
          onChange={setPet}
          defaultValue={pet}
        />
      </View>


      <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            navigation.navigate('Pets')
            console.log('Clicou')
          }}
        >
          <Text style={styles.textButton}>Cadastrar</Text>      
        </TouchableOpacity>

      <TouchableOpacity 
          style={styles.buttonBack}
          onPress={() => {
            navigation.navigate('Pets')
            console.log('Clicou')
          }}
        >
          <Text style={styles.textButtonBack}>Voltar</Text>      
        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerInput:{
      width: '90%',
    },
    input:{
      margin: 5,
      height: 40,
      padding: 10,
      borderWidth: 1,
      borderColor: '#8a8d8f',
      borderRadius: 25
    },
    button:{
      width: '90%',
      backgroundColor: '#6E42F1',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 15,
      height: 40,
      padding: 10,
      borderRadius: 50
    },
    textButton:{
      color: '#FFF',
      textAlign: 'center',
      fontSize: 16,
    },
    loadingImg:{
      borderWidth: 1,
      borderColor: '#6E42F1',
      borderRadius: 50,
      width: '25%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      margin: 20
    },
    containerLabels:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
    TextLabel:{
      fontSize: 15,
      textAlign: 'center',
      padding: 5,
      fontWeight: 'bold'
    },
    TextLabel2:{
      fontSize: 14,
      textAlign: 'center',
      padding: 10,
    },
    buttonBack:{
      width: '90%',
      borderWidth: 1,
      borderColor: '#8a8d8f',
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      borderRadius: 50
    },
    textButtonBack:{
      color: '#8a8d8f',
      textAlign: 'center',
      fontSize: 14,
    }
  });
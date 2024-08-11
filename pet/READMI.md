        <TextInput 
          placeholder='E-mail:'
          onChangeText={setEmail}
          value={email}
          style={styles.input}
          placeholderTextColor='#8a8d8f'
        />

        <TextInput 
          secureTextEntry={true}
          placeholder='Senha:'
          onChangeText={setPassword}
          value={password}
          style={styles.input}
          placeholderTextColor='#8a8d8f'
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleLogin}
        >



Modelo seguido: 
  https://www.figma.com/design/PJaLCSfQmaxqQ5lOTuO1ap/Pet-Care-Mobile-App-(Community)?node-id=1-7&t=FBFD5b4mO0itRNcr-0
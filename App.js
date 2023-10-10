import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Nome'}
        />  
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Saldo:</Text>
        <TextInput
          style={styles.input}
          placeholder={'Saldo'}
        />  
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>CPF:</Text>
        <TextInput
          style={styles.input}
          placeholder={'CPF'}
        />  
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 10,
  },
  inputContainer: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#88f',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 110,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    marginBottom: 3,
  }
});

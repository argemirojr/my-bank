import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import * as Crypto from 'expo-crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  //   regra de negócio (módulo gerente):
  // - cliente
  //     entidade com nome, cpf, email e senha
  //     operações: adicionar, remover, editar
  // - conta
  //     entidade com número, email
  //     operações: debitar, creditar, transferir, encerrar

  // opcionais:
  //     entidade transação com dados de conta de origem, conta de destino, data, valor, tipo
  //     entidade agência com dados de número da agência, endereço (relacionar contas com agência)
  //     entidades para os diferentes tipos de usuários além de gerente. as outras: admin, cliente
  //     contas que podem ter múltiplos donos


  const [nome, setNome ] = useState("");
  const [cpf, setCpf ] = useState("");
  const [senha, setSenha ] = useState("");
  const [confirmarsenha, setConfirmarsenha ] = useState("");
  
  const [clientes, setClientes] = useState([])

  function gerarCadastro(){
    if (nome.trim().length < 5){
      Alert.alert('Atenção:','O nome está muito pequeno!')
      return null
    }

    if (cpf.trim().length != 11){
      Alert.alert('Atenção:','CPF inválido!')
      return null
    }

    if (senha.trim().length != 6 || senha != confirmarsenha){
      Alert.alert('Atenção:','Senha inválida!')
      return null
    }

    const novoCadastro = {
      id: Crypto.randomUUID(),
      nome,
      cpf,
      senha
    }

    return novoCadastro;
  }

  function handleCadastrar(){
    const novoCadastro = gerarCadastro()
    if(novoCadastro){
      setClientes ( prev => [...prev, novoCadastro] )
      Alert.alert('Atenção', 'Salvo com sucesso!')
    }    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nome:</Text>
        <TextInput
          onChangeText={setNome}
          style={styles.input}
          placeholder={'Nome'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>CPF:</Text>
        <TextInput
          keyboardType='numeric'
          onChangeText={setCpf}
          style={styles.input}
          placeholder={'CPF'}
        />  
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Senha:</Text>
        <TextInput
          onChangeText={setSenha}
          style={styles.input}
          placeholder={'Senha'}
          secureTextEntry={true}
        />  
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.text}>Confirmar Senha:</Text>
        <TextInput
          onChangeText={setConfirmarsenha}
          style={styles.input}
          placeholder={'Confirmar Senha'}
          secureTextEntry={true}
        />  
      </View>

      <TouchableOpacity 
        onPress={handleCadastrar}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        {clientes.map(cliente => (
          <View 
            key={cliente.id}
            style={{marginBottom: 10}}
          >
            <Text>ID: {cliente.id}</Text>
            <Text>Nome: {cliente.nome}</Text>
            <Text>CPF: {cliente.cpf}</Text>
          </View>  
        ))}
      </View>
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

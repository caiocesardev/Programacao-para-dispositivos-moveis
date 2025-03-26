import { Text, TextInput, Button, View } from "react-native";
import React, { useState} from 'react';
import styles from '../../src/Forms/FormStyle';

const HomePage = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  const somarDoisNumeros = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setErro("Digite apenas números válidos");
      setResultado(null);
      return;
    } else {
      const soma = n1 + n2;
      setResultado(soma);
      setErro("");
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 1:</Text>
        <TextInput
          style={styles.input}
          value={num1}
          onChangeText={setNum1}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 2:</Text>
        <TextInput
          style={styles.input}
          value={num2}
          onChangeText={setNum2}
          keyboardType="numeric"
        />
      </View>
      <Button title="Somar" onPress={somarDoisNumeros} />

      {erro ? <Text style={styles.error}>Erro: {erro}</Text> : null}

      {resultado !== null ? (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      ) : null
      }
    </View>
  );
};

export default HomePage;

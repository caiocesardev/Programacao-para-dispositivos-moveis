import { Text, TextInput, Button, View } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import styles from "./style";
import { calcularResultado } from "./operacaoCalculadora";

const HomePage = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState("");
  const [operacao, setOperacao] = useState("somar");

  const handleCalcular = () => {
    const { resultado, erro } = calcularResultado(num1, num2, operacao);
    setResultado(resultado);
    setErro(erro);
  };

  return (
    <View style= { styles.container } >
    <Text style={ styles.label }> Número 1: </Text>
      < TextInput
  style = { styles.input }
  value = { num1 }
  onChangeText = { setNum1 }
  keyboardType = "numeric"
    />

    <Text style={ styles.label }> Número 2: </Text>
      < TextInput
  style = { styles.input }
  value = { num2 }
  onChangeText = { setNum2 }
  keyboardType = "numeric"
    />

    <Text style={ styles.label }> Operação: </Text>
      < Picker
  selectedValue = { operacao }
  onValueChange = {(itemValue) => setOperacao(itemValue)}
style = {{ width: 200, height: 50 }}
>
  <Picker.Item label="Somar" value = "somar" />
    <Picker.Item label="Subtrair" value = "subtrair" />
      <Picker.Item label="Multiplicar" value = "multiplicar" />
        <Picker.Item label="Dividir" value = "dividir" />
          </Picker>


          < Button title = "Calcular" onPress = { handleCalcular } />

            { erro !== "" && <Text style={ styles.error }> Erro: { erro } </Text>}
{
  resultado !== null && (
    <Text style={ styles.result }> Resultado: { resultado } </Text>
      )
}
</View>
  );
};

export default HomePage;
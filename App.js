import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [age, setAge] = useState("");
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(0);

  function calculate() {
    setAge(age)
    const low = (220-age) * 0.65;
    setLow(low.toFixed(2));
    const high = (220-age) * 0.85;
    setHigh(high.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text>Heart Rates</Text>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        keyboardType="decimal-pad"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Text>Limits</Text>
      <Text>{low} - {high}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    margin: 8,
  }
});


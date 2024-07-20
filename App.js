import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    const newExpression = expression + value;
    setExpression(newExpression);

    if (!['+', '-', '*', '/'].includes(value)) {
      try {
        setResult(eval(newExpression).toString());
      } catch (e) {
        setResult(result);
      }
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
      setResult('');
    } catch (e) {
      setExpression('Error');
      setResult('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.display}>{expression}</Text>
      <View style={styles.buttonRow}>
        <CalculatorButton label="1" onPress={() => handlePress('1')} />
        <CalculatorButton label="2" onPress={() => handlePress('2')} />
        <CalculatorButton label="3" onPress={() => handlePress('3')} />
        <CalculatorButton label="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton label="4" onPress={() => handlePress('4')} />
        <CalculatorButton label="5" onPress={() => handlePress('5')} />
        <CalculatorButton label="6" onPress={() => handlePress('6')} />
        <CalculatorButton label="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton label="7" onPress={() => handlePress('7')} />
        <CalculatorButton label="8" onPress={() => handlePress('8')} />
        <CalculatorButton label="9" onPress={() => handlePress('9')} />
        <CalculatorButton label="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton label="C" onPress={handleClear} />
        <CalculatorButton label="0" onPress={() => handlePress('0')} />
        <CalculatorButton label="=" onPress={handleEvaluate} />
        <CalculatorButton label="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton label="(" onPress={() => handlePress('(')} />
        <CalculatorButton label=")" onPress={() => handlePress(')')} />
      </View>
    </SafeAreaView>
  );
}

const CalculatorButton = ({ label, onPress }) => (
  <TouchableHighlight onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  display: {
    margin: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  result: {
    margin: 24,
    fontSize: 24,
    textAlign: 'right',
    color: '#888',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    backgroundColor: '#1abc9c',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

/*
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddCounterForm from './AddCounterForm';

const Counter = ({ initialValues }) => {
  const [counters, setCounters] = useState(initialValues.map((value) => ({ id: uuidv4(), count: value })));

  const increment = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  const decrement = (id) => {
    setCounters((prevCounters) =>
      prevCounters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count - 1 } : counter
      )
    );
  };

  const addCounter = (initialValue) => {
    const newCounter = { id: uuidv4(), count: initialValue };
    setCounters((prevCounters) => [...prevCounters, newCounter]);
  };

  return (
    <View style={styles.container}>
      {counters.map((counter) => (
        <View key={counter.id}>
          <Text style={styles.text}>Counter Value: {counter.count}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Increment" onPress={() => increment(counter.id)} />
            <Button title="Decrement" onPress={() => decrement(counter.id)} />
          </View>
        </View>
      ))}
      <AddCounterForm onAddCounter={addCounter} />
    </View>
  );
};

Counter.defaultProps = {
  initialValues: [0],
};



const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Counter;*/

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddCounterForm = ({ onAddCounter }) => {
  const [initialValue, setInitialValue] = useState('');

  const handleAddCounter = () => {
    if (initialValue.trim() !== '') {
      onAddCounter(Number(initialValue));
      setInitialValue('');
    }
  };

  return (
    <View style={styles.addCounterForm}>
      <TextInput
        style={styles.input}
        placeholder="Enter initial counter value"
        value={initialValue}
        onChangeText={(text) => setInitialValue(text)}
        keyboardType="numeric"
        returnKeyType="done"
      />
      <Button title="Add Counter" onPress={handleAddCounter} />
    </View>
  );
};

const styles = StyleSheet.create({
  addCounterForm: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddCounterForm;
import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const ESP32_IP = 'http://192.168.4.1'; // IP-адрес ESP32

const App = () => {
  const [ledStatus, setLedStatus] = useState<string>('Off');

  const turnOnLED = async () => {
    try {
      await axios.get(`${ESP32_IP}/on`);
      setLedStatus('On');
    } catch (error) {
      console.error('Error turning on LED:', error);
    }
  };

  const turnOffLED = async () => {
    try {
      await axios.get(`${ESP32_IP}/off`);
      setLedStatus('Off');
    } catch (error) {
      console.error('Error turning off LED:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>LED Status: {ledStatus}</Text>
      <Button title="Turn On" onPress={turnOnLED} />
      <Button title="Turn Off" onPress={turnOffLED} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
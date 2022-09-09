import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={{
      alignItems: 'center',
      flexDirection: 'row',
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <View style={[styles.square, styles.purple]}>
        <Text style={{ fontWeight: '1500' }}>square 1</Text>
      </View>
      <View style={[styles.square, styles.gray]}>
        <Text style={{ fontWeight: '1500' }}>square 2</Text>
      </View>
      <View style={[styles.square, styles.yellow]}>
        <Text style={{ fontWeight: '1500' }}>square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    margin: 50,
    paddingVertical: 50,
    paddingHorizontal: 50
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  gray: {
    backgroundColor: 'gray',
  },
  purple: {
    backgroundColor: 'purple',
  }
}
);
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { userName, password } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, {userName || 'Guest'}!</Text>
      <Text style={styles.text}>Hello, {password || 'Guest'}!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, marginBottom: 20 },
});

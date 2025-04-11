import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Groups({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Groups Page</Text>
      <Button 
        title="Back to List of Profiles" 
        onPress={() => navigation.goBack()} 
      />
      <Button 
        title="Back to My Account" 
        onPress={() => navigation.navigate('MyAccount')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

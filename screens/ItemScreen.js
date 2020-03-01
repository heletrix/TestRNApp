import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ItemScreen({route, navigation }) {
  const { header } = route.params;
  const { description } = route.params;
  return ( 
    <View style={styles.container}>
      <Text style={styles.header} onPress={() => navigation.goBack()}>{' << ' + header}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    fontSize: 24
  },
  description: {
    paddingTop: 20,
    fontSize: 16
  }
});
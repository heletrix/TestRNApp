import * as React from 'react';
import { FlatList, StyleSheet, Button, View } from 'react-native';

const dataArray = [
  { id: '1', header: 'Item 1', description: 'Description 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + 
  'Etiam nec pharetra nunc. Sed pretium, purus non semper condimentum, nulla mauris elementum tellus, suscipit dignissim ' + 
  'tellus quam imperdiet erat. Aenean vitae ex volutpat, tincidunt tellus vehicula, commodo risus. Sed viverra elit a ' +
  'massa laoreet varius. Nullam lacinia, purus eu aliquet aliquet, lacus quam tristique quam, quis posuere nisi lorem ' +
  'sagittis est. Mauris ac faucibus turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.'},
  { id: '2', header: 'Item 2', description: 'Description 2'},
  { id: '3', header: 'Item 3', description: 'Description 3'},
  { id: '4', header: 'Item 4', description: 'Description 4'},
  { id: '5', header: 'Item 5', description: 'Description 5'},
  { id: '6', header: 'Item 6', description: 'Description 6'},
  { id: '7', header: 'Item 7', description: 'Description 7'},
  { id: '8', header: 'Item 8', description: 'Description 8'},
  { id: '9', header: 'Item 9', description: 'Description 9'},
  { id: '10', header: 'Item 10', description: 'Description 10'}
  ];

export default function HomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
      <FlatList 
          data = {dataArray}
          renderItem={({item}) => <Button
              title={item.header}
              onPress={() => navigation.navigate('Item', {
                header: item.header,
                description: item.description,
              })}
          />}
          keyExtractor={item => item.id}
        />
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'First screen'}}
        />
        <Stack.Screen 
          name="Item"
          component={ItemScreen}
          options={({ route }) => ({ title: route.params.header })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
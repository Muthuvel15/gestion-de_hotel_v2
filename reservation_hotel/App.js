import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HotelListScreen from './screens/Hotel_liste';

const Stack = createStackNavigator({
  HotelList: { screen: HotelListScreen },
  
});

const AppContainer = createAppContainer(Stack);

export default function App() {
  return <AppContainer />;
}



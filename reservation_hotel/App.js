import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

// import screens
import HotelListScreen from './screens/Hotel_liste';
import Accueil from './screens/Accueil';
import Inscription from './screens/Inscription';
import Login from './screens/Login';
// import MotDePasseOublie from './screens/MotDePasseOublie';

const StackNavigator = createStackNavigator(
  {
    Accueil: {
      screen: Accueil,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Se connecter',
      },
    },
    Inscription: {
      screen: Inscription,
      navigationOptions: {
        title: "S'inscrire",
      },
    },
    // MotDePasseOublie: {
    //   screen: MotDePasseOublie,
    //   navigationOptions: {
    //     title: 'Mot de passe oublié',
    //   },
    // },
    HotelListScreen: {
      screen: HotelListScreen,
      navigationOptions: {
        title: 'Liste des hôtels',
      },
    },
  },
  {
    initialRouteName: 'Accueil',
  }
);

const AppContainer = createAppContainer(StackNavigator);

const App = () => {
  return <AppContainer />;
};

export default App;
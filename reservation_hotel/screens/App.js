// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Accueil from './Accueil';
// import Inscription from './Inscription';
// import MotDePasseOublie from './MotDePasseOublie';
// import Login from './login';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Accueil">
//         <Stack.Screen
//           name="Accueil"
//           component={Accueil}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ title: 'Se connecter' }}
//         />
//         <Stack.Screen
//           name="Inscription"
//           component={Inscription}
//           options={{ title: "S'inscrire" }}
//         />
//         <Stack.Screen
//           name="MotDePasseOublie"
//           component={MotDePasseOublie}
//           options={{ title: 'Mot de passe oublié' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ImageBackground } from 'react-native';

import Accueil from './Accueil';
import Inscription from './Inscription';
import MotDePasseOublie from './MotDePasseOublie';
import Login from './login';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <ImageBackground
    //   source={require('./images/image.jpg')}
    //   style={{ flex: 1 }}
    // >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
          <Stack.Screen
            name="Accueil"
            component={Accueil}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Se connecter' }}
          />
          <Stack.Screen
            name="Inscription"
            component={Inscription}
            options={{ title: "S'inscrire" }}
          />
          <Stack.Screen
            name="MotDePasseOublie"
            component={MotDePasseOublie}
            options={{ title: 'Mot de passe oublié' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    // </ImageBackground>
  );
};

export default App;
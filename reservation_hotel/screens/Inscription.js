import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  } from 'react-native';

const Inscription = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInscription = () => {
    // Ajoutez ici votre logique d'inscription avec email et mot de passe
    // par exemple, une requête vers votre API pour créer un nouveau compte utilisateur

    // Une fois l'inscription réussie, vous pouvez rediriger l'utilisateur vers la page de connexion
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Page d'inscription</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%' }}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%' }}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleInscription} style={{ backgroundColor: 'lightblue', padding: 10 }}>
        <Text style={{ fontSize: 16 }}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Inscription;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const MotDePasseOublie = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleMotDePasseOublie = () => {
    // Ajoutez ici votre logique pour la récupération du mot de passe oublié
    // par exemple, une requête vers votre API pour réinitialiser le mot de passe

    // Une fois la récupération réussie, vous pouvez afficher un message ou rediriger l'utilisateur vers une autre page
    // dans cet exemple, nous redirigeons l'utilisateur vers la page de connexion
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Mot de passe oublié</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%' }}
      />
      <TouchableOpacity onPress={handleMotDePasseOublie} style={{ backgroundColor: 'lightblue', padding: 10 }}>
        <Text style={{ fontSize: 16 }}>Réinitialiser le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MotDePasseOublie;
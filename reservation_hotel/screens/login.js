import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici votre logique de connexion avec email et mot de passe
    // par exemple, une requête vers votre API pour vérifier les informations de connexion

    // Remplacez cette logique fictive par votre propre logique d'authentification
    if (email === 'user@example.com' && password === 'password') {
      // Une fois la connexion réussie, vous pouvez rediriger l'utilisateur vers la page principale
      navigation.navigate('Accueil');
    } else {
      // Gérez le cas où les informations de connexion sont incorrectes
      alert('Email ou mot de passe incorrect');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Page de connexion</Text>
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
      <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: 'lightblue', padding: 10 }}>
        <Text style={{ fontSize: 16 }}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
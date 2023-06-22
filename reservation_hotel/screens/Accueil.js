import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Accueil = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToInscription = () => {
    navigation.navigate('Inscription');
  };

  const goToMotDePasseOublie = () => {
    navigation.navigate('MotDePasseOublie');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
         <Image source={require('./images/logo.png')} style={styles.logo} />
         <Text style={styles.headerText}>Sunnydays</Text>
      </View>
      {/* Contenu de la page d'accueil */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Bienvenue sur la page d'accueil !</Text>
      </View>

      {/* Boutons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToLogin} style={styles.button}>
          <Icon name="login" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToInscription} style={styles.button}>
          <Icon name="person-add" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>S'inscrire?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToMotDePasseOublie} style={styles.button}>
          <Icon name="lock" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>
      </View>

      {/* Contenu de la page d'accueil */}
      <View style={styles.content}>
        <Text style={styles.contentText}></Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Sunnydays. Tous droits réservés.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  buttonIcon: {
    marginRight: 5, // Adjust the margin as needed
    color: 'black', // Change the icon color to black or any other color that suits your design
    },
  },
  header: {
    backgroundColor: 'lightblue',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 20,
  },
  buttonContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'lightblue',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'gray',
  },
});

export default Accueil;
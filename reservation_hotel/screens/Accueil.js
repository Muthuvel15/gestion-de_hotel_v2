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



  const gotolistehotels = () => {
    navigation.navigate('HotelListScreen');
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>Sunnydays</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.contentText}>Welcome to Sunnydays!</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToLogin} style={styles.button}>
          <Icon name="login" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToInscription} style={styles.button}>
          <Icon name="person-add" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={gotolistehotels} style={styles.button}>
          <Icon name="hotel" size={20} color="black" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Hotel List</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 Sunnydays. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#59b2ab',
    paddingVertical: 20,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  contentText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#59b2ab',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  buttonIcon: {
    color: '#fff',
  },
  footer: {
    backgroundColor: '#59b2ab',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'white',
  },
});

export default Accueil;
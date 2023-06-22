import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, FlatList } from 'react-native';
import axios from 'axios';

export default function HotelListe({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:3000/hotels');
      const data = response.data;
      setHotels(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des hôtels :', error);
    }
  };

  // Filter hotels based on the search text
  const filteredHotels = hotels.filter((hotel) =>
    hotel.ville.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render each hotel item in the FlatList
  const renderHotelItem = ({ item }) => (
    <View style={styles.hotelContainer}>
      <Text style={styles.hotelName}>{item.name}</Text>
      <Image source={{ uri: item.image }} style={styles.hotelImage} />
      <Text style={styles.hotelRating}>Rating: {item.rating}</Text>
      <Text style={styles.hotelLocation}>Location: {item.ville}</Text>
      <Button
        title="Reserve"
        onPress={() => navigation.navigate('Reservation', { hotelId: item.id })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by location"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      <FlatList
        data={filteredHotels}
        renderItem={renderHotelItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  },
  searchInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  hotelContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  hotelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelImage: {
    width: 200,
    height: 150,
    marginBottom: 5,
  },
  hotelRating: {
    fontSize: 16,
    marginBottom: 5,
  },
  hotelLocation: {
    fontSize: 16,
    marginBottom: 5,
  },
});

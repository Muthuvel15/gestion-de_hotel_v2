import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, FlatList } from 'react-native';

export default function Hotel_liste({ navigation }) {
  const [searchText, setSearchText] = useState('');
  
  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: 'Hotel A',
      image: require('../images/hotel_1.jpg'),
      rating: 4.5,
      location: 'City A',
    },
    {
      id: 2,
      name: 'Hotel B',
      image: require('../images/hotel_2.jpg'),
      rating: 4.2,
      location: 'City B',
    },
    // Add more hotel objects as needed
  ];

  // Filter hotels based on the search text
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchText.toLowerCase())
  );

  // Render each hotel item in the FlatList
  const renderHotelItem = ({ item }) => (
    <View style={styles.hotelContainer}>
      <Text style={styles.hotelName}>{item.name}</Text>
      <Image source={item.image} style={styles.hotelImage} />
      <Text style={styles.hotelRating}>Rating: {item.rating}</Text>
      <Text style={styles.hotelLocation}>Location: {item.location}</Text>
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
    paddingTop : 20,
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

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import sampleData from '../data/sample.json';

export default function Series() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const filteredPeliculas = sampleData.entries
      .filter(entry => entry.releaseYear >= 2010 && entry.programType === 'series') 
      .sort((a, b) => a.title.localeCompare(b.title)) 
      .slice(0, 20);

    setPeliculas(filteredPeliculas);
  }, []);

  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.peliculasContainer}>
        {peliculas.map((pelicula, index) => (
          <View key={index} style={styles.peliculaContainer}>
            <Text style={styles.peliculaTitle}>{pelicula.title}</Text>
            <Image source={{ uri: pelicula.images['Poster Art'].url }} style={styles.posterImage} />
          </View>
        ))}
      </View>
      <Footer />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const columnWidth = screenWidth / 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  peliculasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  peliculaContainer: {
    width: columnWidth,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  peliculaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  posterImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

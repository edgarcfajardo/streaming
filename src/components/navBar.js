import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function Footer() {
  return (
    <View style={styles.bar}>
      <Text style={styles.title}>Streaming</Text>
      <View style={styles.horizontalContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Peliculas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Series</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

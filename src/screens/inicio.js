import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/styles';
import NavBar from '../components/navBar';
import Footer from '../components/footer';

export default function Inicio() {

  return (
    <View style={styles.container}>

      <NavBar></NavBar>  

      <View style={styles.container}>

      </View>

      <Footer></Footer>
    </View>
  );
};
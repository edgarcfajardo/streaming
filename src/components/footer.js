import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles';

export default function Footer() {
  return (
    <View style={styles.bar}>
      <Text style={styles.text}>
        Home | Terms and 
        Conditios | Privacy 
        Policity | Collection Statement | Help | Manage Account
      </Text>
      <Text style={styles.text}>
        Copyright 2024 Streaming All Rights Reserved.
      </Text>
    </View>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodayCard = ({ onPress }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).split('/').join('/');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>✎ Write a journal today!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF9F57',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '90%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
  },
});

export default TodayCard;
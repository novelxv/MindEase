import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const QuoteCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.quote}>
        Failure is just a step in the learning process—use it to grow stronger and smarter for the next challenge!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#A7D1F8',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  quote: {
    color: 'white',
    fontSize: 16,
    lineHeight: 22,
  },
});

export default QuoteCard;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JournalCard = ({ date, preview }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.preview}>{preview}</Text>
      <Text style={styles.emoji}>😣</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  dateContainer: {
    marginRight: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  preview: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  emoji: {
    fontSize: 20,
    marginLeft: 10,
  },
});

export default JournalCard;
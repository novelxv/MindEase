import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'lucide-react-native';
import { globalStyles } from '../styles/global';

const TodayCard = ({ onPress, variant = 'green', buttonText }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/').join('/');

  const isgreen = variant === 'green';
  const containerStyle = isgreen ? styles.greenContainer : styles.orangeContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title]}>Today</Text>
      <View style={styles.dateContainer}>
        <Calendar size={20} color={'#FFF'} />
        <Text style={[styles.date]}>{formattedDate}</Text>
      </View>
      <TouchableOpacity style={[styles.button]} onPress={onPress}>
        <Text style={[globalStyles.content, styles.buttonText]}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFF',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  date: {
    fontSize: 16,
    alignContent: "center",
    color: '#FFF',
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
  greenContainer: {
    backgroundColor: '#657C49',
  },
  orangeContainer: {
    backgroundColor: '#FF7E0C',
  },
});

export default TodayCard;

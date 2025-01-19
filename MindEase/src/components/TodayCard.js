import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'lucide-react-native';

const TodayCard = ({ onPress, variant = 'green', buttonText }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).split('/').join('/');

  const isgreen = variant === 'green';
  const containerStyle = isgreen ? styles.greenContainer : styles.orangeContainer;
  const titleStyle = styles.Title;
  const dateStyle = styles.Date;
  const buttonStyle = styles.Button;
  const buttonTextStyle = styles.ButtonText;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>Today</Text>
      <View style={styles.dateContainer}>
        <Calendar size={20} color={'#FFF'} />
        <Text style={[styles.date, dateStyle]}>{formattedDate}</Text>
      </View>
      <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
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
  },
  button: {
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
    fontSize: 16,
  },
  greenContainer: {
    backgroundColor: '#657C49',
  },
  orangeContainer: {
    backgroundColor: '#FF9F57',
  },
  Title: {
    color: '#FFF',
  },
  Date: {
    color: '#FFF',
  },
  Button: {
    backgroundColor: '#FFF',
  },
  ButtonText: {
    color: '#666',
  },
});

export default TodayCard;

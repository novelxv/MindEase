import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const ActivityCard = ({ title, imageUrl, height = 100 }) => {
  return (
    <TouchableOpacity style={[styles.card, { height }]}>
      <ImageBackground 
        source={{ uri: imageUrl }} 
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  backgroundImage: {
    borderRadius: 15,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
});

export default ActivityCard;
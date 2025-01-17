import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MoodRatingCard = ({ onMoodSelect }) => {
  const moods = [
    { emoji: '😣', label: 'Terrible' },
    { emoji: '😔', label: 'Bad' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😄', label: 'Great' },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>How's Your Day Today?</Text>
      <Text style={styles.subtitle}>Rate Your Mood</Text>
      <View style={styles.moodContainer}>
        {moods.map((mood, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.moodButton}
            onPress={() => onMoodSelect(mood.label)}
          >
            <Text style={styles.moodEmoji}>{mood.emoji}</Text>
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  moodButton: {
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 5,
  },
  moodLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default MoodRatingCard;
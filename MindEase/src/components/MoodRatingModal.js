import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useMood } from '../context/MoodContext';
import { saveMood } from '../services/moodService';

import TerribleBefore from '../assets/moodRating/terrible-icon-before.svg';
import TerribleAfter from '../assets/moodRating/terrible-icon-after';
import BadBefore from '../assets/moodRating/bad-icon-before.svg';
import BadAfter from '../assets/moodRating/bad-icon-after';
import OkayBefore from '../assets/moodRating/okay-icon-before.svg';
import OkayAfter from '../assets/moodRating/okay-icon-after';
import GoodBefore from '../assets/moodRating/good-icon-before.svg';
import GoodAfter from '../assets/moodRating/good-icon-after';
import GreatBefore from '../assets/moodRating/great-icon-before.svg';
import GreatAfter from '../assets/moodRating/great-icon-after';

const MoodRatingModal = ({ visible, onClose }) => {
  const { setMood } = useMood(); 
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { label: 'Terrible', before: TerribleBefore, after: TerribleAfter },
    { label: 'Bad', before: BadBefore, after: BadAfter },
    { label: 'Okay', before: OkayBefore, after: OkayAfter },
    { label: 'Good', before: GoodBefore, after: GoodAfter },
    { label: 'Great', before: GreatBefore, after: GreatAfter },
  ];

  const handleMoodSelect = (index) => {
    setSelectedMood(index);
  };

  const handleContinue = async () => {
    if (selectedMood !== null) {
      const moodLabel = moods[selectedMood].label;  
      setMood(moodLabel);

      const currentDate = new Date().toISOString().split('T')[0];  
      await saveMood(currentDate, moodLabel);

      onClose();
      }
    }

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>How's Your Day Today?</Text>
          <Text style={styles.subtitle}>Rate Your Mood</Text>
          
          <View style={styles.moodContainer}>
            {moods.map((mood, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleMoodSelect(index)}
                style={[
                  styles.moodButton,
                  selectedMood === index && styles.selectedMood,
                ]}
              >
                <View>
                  {selectedMood === index ? (
                    <mood.after width={40} height={40} />
                  ) : (
                    <mood.before width={40} height={40} />
                  )}
                </View>
                <Text style={styles.moodLabel}>{mood.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.continueButton,
              selectedMood === null && styles.continueButtonDisabled,
            ]}
            onPress={handleContinue}
            disabled={selectedMood === null}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.footnote}>
            You can edit this later in the homepage
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    width: '90%',
    maxWidth: 340,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  moodButton: {
    alignItems: 'center',
    padding: 8,
    gap: 8,

  },
  selectedMood: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
  },
  moodEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  moodLabel: {
    fontSize: 12,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#FF9F57',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    marginBottom: 16,
  },
  continueButtonDisabled: {
    opacity: 0.6,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footnote: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

export default MoodRatingModal;
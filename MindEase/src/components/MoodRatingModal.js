import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MoodRatingModal = ({ visible, onClose, onSelectMood }) => {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    { emoji: '😠', label: 'Terrible' },
    { emoji: '☹️', label: 'Bad' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '🙂', label: 'Good' },
    { emoji: '😄', label: 'Great' },
  ];

  const handleContinue = () => {
    if (selectedMood !== null) {
      onSelectMood(moods[selectedMood].label);
      onClose();
    }
  };

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
                onPress={() => setSelectedMood(index)}
                style={[
                  styles.moodButton,
                  selectedMood === index && styles.selectedMood,
                ]}
              >
                <Text style={styles.moodEmoji}>{mood.emoji}</Text>
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
    marginBottom: 32,
  },
  moodButton: {
    alignItems: 'center',
    padding: 8,
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
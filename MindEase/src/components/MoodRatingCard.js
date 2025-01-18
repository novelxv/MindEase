import React, { useState } from 'react';  
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';  
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

const MoodRatingCard = ({ onMoodSelect }) => {  
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
    onMoodSelect(moods[index].label);
  };  

  return (  
    <View style={styles.card}>  
      <Text style={styles.title}>How's Your Day Today?</Text>  
      <Text style={styles.subtitle}>Rate Your Mood</Text>  
      <View style={styles.moodContainer}>  
        {moods.map((mood, index) => (  
          <TouchableOpacity   
            key={index}  
            style={styles.moodButton}  
            onPress={() => handleMoodSelect(index)}
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
    </View>  
  );  
};  

const styles = StyleSheet.create({  
  card: {  
    backgroundColor: 'white',  
    borderRadius: 15,  
    padding: 15,  
    marginBottom: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6, 
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
    gap: 6,
  },  
  moodLabel: {  
    fontSize: 12,  
    color: '#666',  
  },  
});  

export default MoodRatingCard;
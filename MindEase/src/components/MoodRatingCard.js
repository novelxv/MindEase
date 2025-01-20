import React, { useEffect } from 'react';  
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';  
import TerribleBefore from '../assets/moodRating/terrible-icon-before';  
import TerribleAfter from '../assets/moodRating/terrible-icon-after';  
import BadBefore from '../assets/moodRating/bad-icon-before';  
import BadAfter from '../assets/moodRating/bad-icon-after';  
import OkayBefore from '../assets/moodRating/okay-icon-before';  
import OkayAfter from '../assets/moodRating/okay-icon-after';  
import GoodBefore from '../assets/moodRating/good-icon-before';  
import GoodAfter from '../assets/moodRating/good-icon-after';  
import GreatBefore from '../assets/moodRating/great-icon-before';  
import GreatAfter from '../assets/moodRating/great-icon-after';  
import { useMood } from '../context/MoodContext'; 
import { getTodayMood, saveMood } from '../services/moodService';

const MoodRatingCard = ({ onMoodUpdate }) => {  
  const { mood, setMood } = useMood(); 

  useEffect(() => {
    const fetchTodayMood = async () => {
      const todayMood = await getTodayMood();
      if (todayMood) {
        setMood(todayMood.mood);
      }
    };
    fetchTodayMood();
  }, [setMood]);

  const moods = [  
    { label: 'Terrible', before: TerribleBefore, after: TerribleAfter },  
    { label: 'Bad', before: BadBefore, after: BadAfter },  
    { label: 'Okay', before: OkayBefore, after: OkayAfter },  
    { label: 'Good', before: GoodBefore, after: GoodAfter },  
    { label: 'Great', before: GreatBefore, after: GreatAfter },  
  ];  

  const handleMoodSelect = async (selectedMood) => {  
    setMood(selectedMood);
    
    const currentDate = new Date().toISOString().split('T')[0];
    await saveMood(currentDate, selectedMood);
    onMoodUpdate(selectedMood); // Notify HomeScreen of mood change
  };  

  return (  
    <View style={styles.card}>  
      <Text style={styles.title}>How's Your Day Today?</Text>  
      <Text style={styles.subtitle}>Rate Your Mood</Text>  
      <View style={styles.moodContainer}>  
        {moods.map((moodOption, index) => (  
          <TouchableOpacity   
            key={index}  
            style={styles.moodButton}  
            onPress={() => handleMoodSelect(moodOption.label)}
          >  
            <View>  
              {mood === moodOption.label ? (  
                  <Image
                  source={require('../assets/moodRating/Minnie-Chat.png')}  // Path ke gambar PNG setelah mood dipilih
                  style={{ width: 40, height: 40 }}
                  />
              ) : (  
                  <Image
                  source={require('../assets/moodRating/Minnie-Chat.png')}  // Path ke gambar PNG setelah mood dipilih
                  style={{ width: 40, height: 40 }}
                  /> 
              )}  
            </View>  
            <Text style={styles.moodLabel}>{moodOption.label}</Text>  
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
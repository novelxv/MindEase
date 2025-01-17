import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import FooterNavigation from '../components/Footer';
import MoodRatingModal from '../components/MoodRatingModal';
import MoodRatingCard from '../components/MoodRatingCard';
import QuoteCard from '../components/QuoteCard';
import ActivityCard from '../components/ActivityCard';

const { width, height } = Dimensions.get('window');

const maxWidth = 375;

const HomeScreen = () => {
  const [moodModalVisible, setMoodModalVisible] = useState(true); // Show modal by default

  const handleMoodSelection = (mood) => {
    console.log('Selected mood:', mood);
    // Here you can add logic to store the mood
    setMoodModalVisible(false);
  };

  const recommendedActivities = [
    {
      title: 'Meditation Session',
      imageUrl: '/placeholder.svg?height=100&width=400',
    },
    {
      title: 'Creative Emotional Expression',
      imageUrl: '/placeholder.svg?height=100&width=400',
    },
    {
      title: 'Sleep Stories & White Noise',
      imageUrl: '/placeholder.svg?height=100&width=400',
    },
    {
      title: 'Guided Breathing & Relaxation Sessions',
      imageUrl: '/placeholder.svg?height=100&width=400',
    },
  ];

  const otherActivities = [
    { title: 'Sports', imageUrl: '/placeholder.svg?height=80&width=150' },
    { title: 'Sports', imageUrl: '/placeholder.svg?height=80&width=150' },
    { title: 'Sports', imageUrl: '/placeholder.svg?height=80&width=150' },
    { title: 'Sports', imageUrl: '/placeholder.svg?height=80&width=150' },
  ];


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-blue.png')} 
        style={styles.background}
        resizeMode="cover"
      >
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.greeting}>Morning, Thea!</Text>
          <MoodRatingCard onMoodSelect={(mood) => console.log('Selected mood:', mood)} />
          <QuoteCard />

          <View style={styles.calendarCard}>
            <Text style={styles.calendarTitle}>June 2024</Text>
          </View>

          <TouchableOpacity style={styles.journalButton}>
            <Text style={styles.journalButtonText}>View This Day Journal →</Text>
          </TouchableOpacity>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recommended Activities</Text>
            {recommendedActivities.map((activity, index) => (
              <ActivityCard key={index} title={activity.title} imageUrl={activity.imageUrl} />
            ))}
          </View>
          <View style={[styles.section, styles.lastSection]}>
              <Text style={styles.sectionTitle}>Other Activities You Might Try</Text>
              <View style={styles.otherActivitiesGrid}>
                {otherActivities.map((activity, index) => (
                  <View key={index} style={styles.gridItem}>
                    <ActivityCard
                      title={activity.title}
                      imageUrl={activity.imageUrl}
                      height={80}
                    />
                  </View>
                ))}
              </View>
            </View>
        </ScrollView>
      </View>
      
      <MoodRatingModal
        visible={moodModalVisible}
        onClose={() => setMoodModalVisible(false)}
        onSelectMood={handleMoodSelection}
      />

    <FooterNavigation />
    </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    maxWidth: maxWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollViewContent: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendarCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  journalButton: {
    backgroundColor: '#FF9F57',
    borderRadius: 25,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  journalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
  },
  lastSection: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  otherActivitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginBottom: 15,
  },
});

export default HomeScreen;
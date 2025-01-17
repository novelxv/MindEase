import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import { useGlobalFonts, globalStyles } from '../styles/global';
import Card from '../components/Cards';

const { width, height } = Dimensions.get('window');

const ActivityScreen = () => {
  const fontsLoaded = useGlobalFonts(); 

  const activities = [
    { id: 1, text: "Meditation Session", image: require("../assets/activities/meditation.png") },
    { id: 2, text: "Creative Emotional Expression", image: require("../assets/activities/creative.png") },
    { id: 3, text: "Sleep Stories & White Noise", image: require("../assets/activities/sleepstories.png") },
    { id: 4, text: "Guided Breathing & Relaxation Sessions", image: require("../assets/activities/guided.png") },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-yellow.png')} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <View>
          <Text style={globalStyles.header}>Activities</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
          {activities.map((article) => (
            <View key={article.id} style={styles.cardWrapper}>
              <Card imageSource={article.image} text={article.text} />
            </View>
          ))}
        </ScrollView>

        <FooterNavigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  cardWrapper: {
    marginBottom: 20,
  },
});

export default ActivityScreen;

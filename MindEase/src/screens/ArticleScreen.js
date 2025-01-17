<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
</style>
import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import Card from '../components/Cards';

const { width, height } = Dimensions.get('window');

const maxWidth = 375;

const App = () => {
  const articles = [
    { id: 1, text: "Why Sleep Is Your Superpower", image: require("../assets/articles/sleep.png") },
    { id: 2, text: "Turning Anger into Action", image: require("../assets/articles/anger.png") },
    { id: 3, text: "The Power of Positive Journaling", image: require("../assets/articles/journaling.png") },
    { id: 4, text: "The Science of Deep Breathing", image: require("../assets/articles/breathing.png") },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-blue.png')} 
        style={styles.background}
        resizeMode="cover"
      >
        {/* Header */}
        <View>
          <Text style={styles.header}>Article</Text>
        </View>

        {/* Scrollable Articles */}
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
          {articles.map((article) => (
            <View key={article.id} style={styles.cardWrapper}>
              <Card imageSource={article.image} text={article.text} />
            </View>
          ))}
        </ScrollView>

        {/* Footer Navigation */}
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
  header: {
    fontSize: 24,
    fontWeight: 600,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    color: "#333",
  },
  scrollContent: {
    paddingHorizontal: 15,
    paddingBottom: 80,
  },
  cardWrapper: {
    marginBottom: 20,
  },
});

export default App;

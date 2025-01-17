import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import Card from '../components/Cards';
import { useGlobalFonts, globalStyles } from '../styles/global';

const { width, height } = Dimensions.get('window');

const maxWidth = 375;

const ArticleScreen = () => {
  const fontsLoaded = useGlobalFonts(); 

  const articles = [
    { id: 1, text: "Why Sleep Is Your Superpower", image: require("../assets/articles/sleep.png") },
    { id: 2, text: "Turning Anger into Action", image: require("../assets/articles/anger.png") },
    { id: 3, text: "The Power of Positive Journaling", image: require("../assets/articles/journaling.png") },
    { id: 4, text: "The Science of Deep Breathing", image: require("../assets/articles/breathing.png") },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-blue.png')} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <View>
          <Text style={globalStyles.header}>Article</Text>
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
          {articles.map((article) => (
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

export default ArticleScreen;

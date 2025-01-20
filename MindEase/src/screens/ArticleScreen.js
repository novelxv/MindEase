import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
import FooterNavigation from "../components/Footer";
import Card from "../components/Cards";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import { useGlobalFonts, globalStyles } from "../styles/global";
import { fetchAllArticles } from "../services/articleService"; // Import article service

const ArticleScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to map image paths to require statements
  const getImageSource = (imagePath) => {
    switch (imagePath) {
      case "../assets/articles/sleep.png":
        return require("../assets/articles/sleep.png");
      case "../assets/articles/anger.png":
        return require("../assets/articles/anger.png");
      case "../assets/articles/journaling.png":
        return require("../assets/articles/journaling.png");
      case "../assets/articles/breathing.png":
        return require("../assets/articles/breathing.png");
      default:
        return require("../assets/articles/breathing.png"); // Default image
    }
  };

  // Fetch articles from Firestore
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await fetchAllArticles();
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <ImageBackground 
          source={require("../assets/watercolor-yellow.png")} 
          style={globalStyles.backgroundimage}
          resizeMode="cover"
        >
          <HeaderWithBackButton title="Articles" />
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={globalStyles.text}>Loading articles...</Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground 
        source={require("../assets/watercolor-yellow.png")} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <HeaderWithBackButton title="Articles" />

        <ScrollView contentContainerStyle={globalStyles.scrollContent} showsVerticalScrollIndicator={false}>
          {articles.map((article) => (
            <View key={article.id} style={styles.cardWrapper}>
              <Card
                imageSource={getImageSource(article.imagePath)} // Use the mapping function
                text={article.title}
                navigation={navigation}
                targetScreen="ArticleDetails" // Default target screen
                id={article.id}
              />
            </View>
          ))}
        </ScrollView>

        <FooterNavigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 10,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArticleScreen;
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
import FooterNavigation from "../components/Footer";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import { useGlobalFonts, globalStyles } from "../styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { fetchArticleById } from "../services/articleService";

const { height: screenHeight } = Dimensions.get("window");

const imageMapping = {
  "../assets/articles/sleep.png": require("../assets/articles/sleep.png"),
  "../assets/articles/anger.png": require("../assets/articles/anger.png"),
  "../assets/articles/journaling.png": require("../assets/articles/journaling.png"),
  "../assets/articles/breathing.png": require("../assets/articles/breathing.png"),
  // Add more mappings as needed
};

const ArticleDetails = ({ navigation }) => {
  const route = useRoute();
  const articleId = route.params?.id;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch article by ID
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const fetchedArticle = await fetchArticleById(articleId);
        setArticle(fetchedArticle);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={globalStyles.text}>Loading article...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!article) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.text}>Article not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.contentWrapper}>
        <HeaderWithBackButton title={article.title} onBackPress={() => navigation.navigate("Article")} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.heroSection}>
            <ImageBackground
              source={imageMapping[article.imagePath] || require("../assets/articles/breathing.png")} // Use the mapping object
              style={styles.heroImage}
              resizeMode="cover"
            >
              <LinearGradient colors={["transparent", "rgba(0,0,0,0.7)"]} style={styles.titleGradient}>
                <Text style={styles.heroTitle}>{article.title}</Text>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.contentSection}>
            <LinearGradient
              colors={["#FDEECF", "#FFF", "#FDEECE"]}
              style={styles.backgroundGradient}
            >
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>{article.content}</Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>

        <FooterNavigation />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    height: 200,
    position: "relative",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  titleGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    justifyContent: "flex-end",
    padding: 20,
  },
  heroTitle: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 34,
    paddingBottom: 5,
  },
  contentSection: {
    marginTop: -20,
    flex: 1,
  },
  backgroundGradient: {
    flex: 1,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: screenHeight - 400,
  },
  contentCard: {
    minHeight: screenHeight - 400,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
    textAlign: "justify",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArticleDetails;

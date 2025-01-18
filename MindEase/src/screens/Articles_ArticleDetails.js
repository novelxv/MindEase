import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FooterNavigation from '../components/Footer';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';
import { LinearGradient } from 'expo-linear-gradient';
import { Globe } from 'lucide-react-native';
const { height: screenHeight } = Dimensions.get('window');

const articles = [
  {
    id: '1',
    title: 'Why Sleep is Your Superpower?',
    image: require("../assets/articles/sleep.png"),
    content: {
      mainText: 'Exercise is more than just about looking good. It improves your mental health, boosts energy levels, and enhances overall well-being.',
    },
    source: 'kumparan.com',
  },
  {
    id: '2',
    title: 'Turning Anger Into Action',
    image: require("../assets/articles/anger.png"),
    content: {
      mainText: 'Exercise is more than just about looking good. It improves your mental health, boosts energy levels, and enhances overall well-being.',
    },
    source: 'example.com',
  },
  {
    id: '3',
    title: 'The Power of Positive Journaling',
    image: require("../assets/articles/journaling.png"),
    content: {
      mainText: 'Exercise is more than just about looking good. It improves your mental health, boosts energy levels, and enhances overall well-being.',
    },
    source: 'example.com',
  },
  {
    id: '4',
    title: 'The Science of Deep Breathing',
    image: require("../assets/articles/breathing.png"),
    content: {
      mainText: 'Exercise is more than just about looking good. It improves your mental health, boosts energy levels, and enhances overall well-being.',
    },
    source: 'example.com',
  },
];

const ArticleDetails = ({ navigation }) => {
  const route = useRoute();
  const article = articles.find(a => a.id == route.params?.id) || articles[0];
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.contentWrapper}>
        <HeaderWithBackButton 
          title={article.title} 
          onBackPress={() => navigation.navigate('Article')} 
        />
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.heroSection}>
            <ImageBackground
              source={article.image}
              style={styles.heroImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.7)']}
                style={styles.titleGradient}
              >
                <Text style={styles.heroTitle}>
                  {article.title}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </View>

          <View style={styles.contentSection}>
            <LinearGradient
              colors={['#FDEECF', '#FFF', '#FDEECE']}
              style={styles.backgroundGradient}
            >
              <View style={styles.contentCard}>
                <Text style={styles.contentText}>
                  {article.content.mainText}
                </Text>

              </View>
                <View style={styles.sourceContainer}>
                  <View style={styles.iconContainer}>
                    <Globe size={20} color="#666" />
                  </View>
                  <Text style={styles.sourceText}>
                    {article.source}
                  </Text>
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
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  titleGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    justifyContent: 'flex-end',
    padding: 20,
  },
  heroTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
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
    minHeight: Dimensions.get('window').height-400,
  },
  contentCard: {
    minHeight: Dimensions.get('window').height-400,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
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
    color: '#333',
    marginBottom: 20,
  },
  sourceContainer: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sourceText: {
    fontSize: 16,
    color: '#666',
  },
});

export default ArticleDetails;

// JournalDetails.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';

const { width, height } = Dimensions.get('window');

const JournalDetails = ({ route }) => {
  const navigation = useNavigation();
  const { date } = route.params;
  const [journalText, setJournalText] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  
  const handleSave = () => {
    setShowFeedback(true);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-blue.png')} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <HeaderWithBackButton 
            title={`Journal ${date}`} 
            onBackPress={handleBackPress} 
            isWhite={false}
          />
          <View style={styles.journalContainer}>
            <Text style={styles.dearMinnie}>Dear Minnie,</Text>
            <View style={styles.lineContainer}>
              {[...Array(10)].map((_, index) => (
                <View key={index} style={styles.line} />
              ))}
              <TextInput
                style={styles.journalInput}
                multiline
                value={journalText}
                onChangeText={setJournalText}
                placeholder=""
                textAlignVertical="top"
              />

            </View>
          </View>

          {showFeedback && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.thankYouText}>Thank you for sharing{'\n'}your day with Minnie!</Text>
              
              <Image
                source={{ uri: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u4jMt4kLWG6pKM15RVzrBNITEGuIM8.png' }}
                style={styles.catImage}
              />

              <View style={styles.messageCard}>
                <Text style={styles.feedbackMessage}>
                  Oh no, that's a bold move for an orange cat! He must've mistaken your chicken for a five-star meal! Next time, maybe we should guard your lunch like a dragon guarding its treasure. But hey, at least you have a wild story to tell! Let's take a deep breath and let the chicken drama fly away. You've got this, my friend! 🐾✨
                </Text>
              </View>

              <TouchableOpacity 
                style={styles.tellMoreButton} 
                onPress={() => setShowFeedback(false)}
              >
                <Text style={styles.tellMoreText}>I want to tell you more</Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </View>
      {!showFeedback && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}
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
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
    margin: 10,
    borderRadius: 20,
  },
  backButtonContainer: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  scrollContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  journalContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    paddingBottom: 20,
  },
  dearMinnie: {
    fontSize: 16,
    marginBottom: 8,
    color: '#000',
  },
  lineContainer: {
    flexGrow: 1,
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginTop: 24,
  },
  journalInput: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontSize: 16,
    lineHeight: 25,
    padding: 0,
    color: '#000',
  },
  feedbackContainer: {
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  thankYouText: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 34,
    color: '#000',
  },
  catImage: {
    width: 180,
    height: 180,
    marginVertical: 24,
  },
  messageCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 16,
    marginVertical: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feedbackMessage: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#FFA978',
    padding: 16,
    margin: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  tellMoreButton: {
    backgroundColor: '#FFA978',
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  tellMoreText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default JournalDetails;
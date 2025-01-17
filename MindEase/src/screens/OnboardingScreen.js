import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import { useGlobalFonts, globalStyles } from '../styles/global';

const { width, height } = Dimensions.get('window');

const maxWidth = 375;

const onboardingData = [
  {
    id: '1',
    image: require('../assets/Onboarding-1.png'),
    subheader: 'Meet Minnie, Your Caring Companion!',
    description: 'Minnie, your fellow cat companion, listens to you, shares positive affirmations, suggests relaxing activities like meditation or journaling, and chats with you—always judgment-free.',
  },
  {
    id: '2',
    image: require('../assets/Onboarding-2.png'),
    subheader: 'Reflect with Your Personal Journal',
    description: 'Write your thoughts and feelings in a safe, private space. Minnie is here to encourage reflection, helping you track emotions and find clarity—one entry at a time.',
  },
  {
    id: '3',
    image: require('../assets/Onboarding-3.png'),
    subheader: 'Explore Relaxing Activities',
    description: 'Unwind with Minnie through soothing sleep stories, calming white noises, guided meditation, creative emotional outlets, or focused breathing sessions. Find your moment of peace..',
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Home');
    }
  };

  const { image, subheader, description } = onboardingData[currentIndex];

  return (
    <SafeAreaView style={styles.page}>
      <ImageBackground 
        source={require('../assets/watercolor-blue.png')} 
        style={styles.background}
      >
        <Image source={image} style={styles.image} />
        <Text style={styles.subheader}>{subheader}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? 'Start' : 'Next'}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    maxWidth: maxWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#5CA6EC',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
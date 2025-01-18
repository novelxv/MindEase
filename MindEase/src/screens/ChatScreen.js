import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import { useGlobalFonts, globalStyles } from '../styles/global';

const maxWidth = 375;

const ChatScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-green.png')} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <HeaderWithBackButton title="Chat" />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false} >
          
        </ScrollView>

        <FooterNavigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ChatScreen;


import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import { useGlobalFonts, globalStyles } from '../styles/global';
import { fetchAIResponse } from "../services/openAIService";

const maxWidth = 375;

const handleUserMessage = async (userMessage) => {
  const aiResponse = await fetchAIResponse(userMessage);
  console.log("AI Response:", aiResponse);
};

const ChatScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Ini Chat</Text>
      </View>
      <FooterNavigation />
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


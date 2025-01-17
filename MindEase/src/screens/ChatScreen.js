import React from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import { fetchAIResponse } from "../services/openAIService";

const maxWidth = 375;

const handleUserMessage = async (userMessage) => {
  const aiResponse = await fetchAIResponse(userMessage);
  console.log("AI Response:", aiResponse);
};

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Ini Chat</Text>
      </View>
      <FooterNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    width: '100%',
    maxWidth: maxWidth,
    marginHorizontal: 'auto',
  },
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


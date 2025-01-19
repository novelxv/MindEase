import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import TodayCard from '../components/TodayCard';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import ChatHistory from '../components/ChatHistory';
import { globalStyles } from '../styles/global';
import { History } from 'lucide-react-native';
const ChatScreen = () => {
  const chats = [
    {
      idChat: 1,
      lastUpdated: '2025-01-19',
      bubbleChats: [
        { idBubbleChat: 1, content: "Hey there! How are you?" },
        { idBubbleChat: 2, content: "I'm doing great, thanks for asking. What about you?" },
        { idBubbleChat: 3, content: "Not bad, just working on some coding projects." },
        { idBubbleChat: 4, content: "Are you free this weekend? Are you free this weekend? Are you free this weekend? Are you free this weekend? Are you free this weekend?" },
      ],
    },
    {
      idChat: 2,
      lastUpdated: '2024-12-21',
      bubbleChats: [
        { idBubbleChat: 5, content: "Yes, I am! Do you have something in mind?" },
        { idBubbleChat: 6, content: "How about a movie night?" },
        { idBubbleChat: 7, content: "Sounds great! Let's do it." },
        { idBubbleChat: 8, content: "Have you finished the report?" },
      ],
    },
    {
      idChat: 3,
      lastUpdated: '2023-12-21',
      bubbleChats: [
        { idBubbleChat: 9, content: "Not yet, but I'll complete it by tomorrow morning." },
        { idBubbleChat: 10, content: "Alright, let me know if you need any help." },
      ],
    },
    {
      idChat: 4,
      lastUpdated: '2025-01-10',
      bubbleChats: [
        { idBubbleChat: 9, content: "Not yet, but I'll complete it by tomorrow morning." },
        { idBubbleChat: 10, content: "Alright, let me know if you need any help." },
      ],
    },
    {
      idChat: 5,
      lastUpdated: '2024-12-21',
      bubbleChats: [
        { idBubbleChat: 9, content: "Not yet, but I'll complete it by tomorrow morning." },
        { idBubbleChat: 10, content: "Alright, let me know if you need any help." },
      ],
    },
    {
      idChat: 6,
      lastUpdated: '21/12/2024',
      bubbleChats: [
        { idBubbleChat: 9, content: "Not yet, but I'll complete it by tomorrow morning." },
        { idBubbleChat: 10, content: "Alright, let me know if you need any help." },
      ],
    },
    {
      idChat: 7,
      lastUpdated: '21/12/2024',
      bubbleChats: [
        { idBubbleChat: 9, content: "Not yet, but I'll complete it by tomorrow morning." },
        { idBubbleChat: 10, content: "Alright, let me know if you need any help." },
      ],
    },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground 
        source={require('../assets/watercolor-green.png')} 
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <HeaderWithBackButton title="Chat" />
        <View style={styles.content}>
          <View style={styles.imagetopper}>
            <View style={styles.chatBubble}>
              <Text style={[globalStyles.content, styles.chatBubbleText]}>How can Minnie help you today?</Text>
            </View>
            <Image 
              source={require('../assets/Minnie-Chat.png')} 
              style={styles.catImage}
              />
          </View>
          <TodayCard 
            onPress={() => console.log('Today button clicked')} 
            variant="green" 
            buttonText="Write a new message to Minnie"
            style={styles.todaycard}
          />
          <View style={styles.historyHeader}>
            <History size={20} color="#333333" style={styles.historyIcon}/>
            <Text style={globalStyles.header}>History</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <ChatHistory chats={chats} />
          </ScrollView>
        </View>
        <FooterNavigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 16,
  },
  imagetopper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
    marginBottom: 20,
    zIndex: 10,
  },
  todaycard: {
    zIndex: 5,
  },
  chatBubble: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    maxWidth: '50%',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    alignSelf: "center",
  },
  chatBubbleText: {
    fontSize: 14,
    color: '#333333',
  },
  catImage: {
    width: 140,
    height: 120,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    right: 0,
    zIndex: 20,
  },
  historyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  historyIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
});


export default ChatScreen;


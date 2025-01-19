import React from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import FooterNavigation from '../components/Footer';
import TodayCard from '../components/TodayCard';
import HeaderWithBackButton from '../components/HeaderWithBackButton';
import ChatHistory from '../components/ChatHistory';
import { globalStyles } from '../styles/global';
import { History } from 'lucide-react-native';
const ChatScreen = ({navigation}) => {
  const chats = [
    {
      title: 'sebuah judul 1',
      date: '2025-01-19T10:30:00.000Z',
      bubbleChats: [
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Hey there! How are you?", timestamp: "2025-01-10T10:00:00.000Z" },
        { sender: "minnie", message: "I'm doing great, thanks for asking. What about you?", timestamp: "2025-01-10T10:10:00.000Z" },
        { sender: "user", message: "Not bad, just working on some coding projects.", timestamp: "2025-01-10T10:20:00.000Z" },
        { sender: "minnie", message: "Are you free this weekend? Are you free this weekend? Are you free this weekend? Are you free this weekend? Are you free this weekend?", timestamp: "2025-01-10T10:30:00.000Z" },
      ],
    },
    {
      title: 'sebuah judul 2',
      date: '2024-12-21T10:30:00.000Z',
      bubbleChats: [
        { sender: "user", message: "Yes, I am! Do you have something in mind?", timestamp: '2024-12-21T10:30:00.000Z' },
        { sender: "minnie", message: "How about a movie night?", timestamp: '2024-12-21T10:30:00.000Z' },
        { sender: "user", message: "Sounds great! Let's do it.", timestamp: '2024-12-21T10:30:00.000Z' },
        { sender: "minnie", message: "Have you finished the report?", timestamp: '2024-12-21T10:30:00.000Z' },
      ],
    },
    {
      title: 'sebuah judul 3',
      date: '2023-12-21T10:30:00.000Z',
      bubbleChats: [
        { sender: "user", message: "Not yet, but I'll complete it by tomorrow morning.", timestamp: '2023-12-21T10:30:00.000Z' },
        { sender: "minnie", message: "Alright, let me know if you need any help.", timestamp: '2023-12-21T10:30:00.000Z' },
      ],
    },
    {
      title: 'sebuah judul 4',
      date: '2025-01-10T10:30:00.000Z',
      bubbleChats: [
        { sender: "user", message: "Not yet, but I'll complete it by tomorrow morning.", timestamp: '2025-01-10T10:30:00.000Z' },
        { sender: "minnie", message: "Alright, let me know if you need any help.", timestamp: '2025-01-10T10:30:00.000Z' },
      ],
    },
    {
      title: 'sebuah judul 5',
      date: '2024-11-21T10:30:00.000Z',
      bubbleChats: [
        { sender: "user", message: "Not yet, but I'll complete it by tomorrow morning.", timestamp: '2024-11-21T10:30:00.000Z' },
        { sender: "minnie", message: "Alright, let me know if you need any help.", timestamp: '2024-11-21T10:30:00.000Z' },
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
        <View style={styles.message}>
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
            onPress={() => {navigation.navigate('ChatDetailsScreen')}} 
            variant="green" 
            buttonText="Write a new message to Minnie"
            style={styles.todaycard}
          />
          <View style={styles.historyHeader}>
            <History size={20} color="#333333" style={styles.historyIcon}/>
            <Text style={[globalStyles.header, styles.header]}>History</Text>
          </View>
          <ScrollView messageContainerStyle={styles.scrollmessage} showsVerticalScrollIndicator={false}>
          <ChatHistory chats={chats} navigation={navigation}/>
          </ScrollView>
        </View>
        <FooterNavigation />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 16,
  },
  imagetopper: {
    flexDirection: 'row',
    justifymessage: 'space-between',
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
    borderBottomRightRadius: 0,
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
    paddingHorizontal: 4,
  },
  historyIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  header: {
    fontSize: 20,
  }
});


export default ChatScreen;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MessageCircleHeart } from 'lucide-react-native';

// Helper function to calculate relative time
const getRelativeTime = (lastUpdated) => {
  const currentDate = new Date();
  const updatedDate = new Date(lastUpdated);
  const diffInMilliseconds = currentDate - updatedDate;

  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  console.log(diffInDays + "INI BEDA HARINYA")
  console.log(currentDate + "INI HARI INI")
  console.log(updatedDate + "INI HARINYA")
  if (diffInDays == 0) {
    return `Today`;
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays === 1 ? '' : 's'} ago`
  }  else if (diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return `${weeks} week${weeks === 1 ? '' : 's'} ago`;
  } else if (diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return `${months} month${months === 1 ? '' : 's'} ago`;
  } else {
    return 'A long time ago';
  }
};

const ChatHistory = ({ chats }) => {
  return (
    <View style={styles.container}>
      {chats.map((chat) => {
        const lastBubbleChat =
          chat.bubbleChats.length > 0
            ? chat.bubbleChats[chat.bubbleChats.length - 1].content
            : "No messages yet";

        const relativeTime = getRelativeTime(chat.lastUpdated);

        return (
          <TouchableOpacity key={chat.idChat} style={styles.chatItem}>
            <View style={styles.chatIconContainer}>
              <MessageCircleHeart size={20} color="#333333" />
            </View>
            <View style={styles.chatContent}>
              <Text style={styles.chatText} numberOfLines={2}>
                {lastBubbleChat}
              </Text>
              <Text style={styles.timeText}>{relativeTime}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  chatIconContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  chatText: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
});

export default ChatHistory;

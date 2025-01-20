import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, ImageBackground, SafeAreaView, ActivityIndicator, Image } from "react-native";
import FooterNavigation from "../components/Footer";
import TodayCard from "../components/TodayCard";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import ChatHistory from "../components/ChatHistory";
import { globalStyles } from "../styles/global";
import { History } from "lucide-react-native";
import { fetchChatSessions } from "../services/chatService";

const ChatScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const fetchedChats = await fetchChatSessions();
        setChats(fetchedChats);
      } catch (error) {
        console.error("Error fetching chats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={globalStyles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={globalStyles.text}>Loading chats...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/watercolor-green.png")}
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <HeaderWithBackButton title="Chat" />
        <View style={styles.message}>
          <View style={styles.imagetopper}>
            <View style={styles.chatBubble}>
              <Text style={[globalStyles.content, styles.chatBubbleText]}>How can Minnie help you today?</Text>
            </View>
            <Image source={require("../assets/Minnie-Chat.png")} style={styles.catImage} />
          </View>
          <TodayCard
            onPress={() => navigation.navigate("ChatDetailsScreen", { session: null })}
            variant="green"
            buttonText="Write a new message to Minnie"
            style={styles.todaycard}
          />
          <View style={styles.historyHeader}>
            <History size={20} color="#333333" style={styles.historyIcon} />
            <Text style={[globalStyles.header, styles.header]}>History</Text>
          </View>
          <ScrollView messageContainerStyle={styles.scrollmessage} showsVerticalScrollIndicator={false}>
            <ChatHistory chats={chats} navigation={navigation} />
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
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 16,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagetopper: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    zIndex: 10,
  },
  todaycard: {
    zIndex: 5,
  },
  chatBubble: {
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 16,
    borderBottomRightRadius: 0,
    maxWidth: "50%",
    marginRight: 8,
    shadowColor: "#000",
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
    color: "#333333",
  },
  catImage: {
    width: 140,
    height: 120,
    resizeMode: "contain",
    position: "absolute",
    top: -20,
    right: 0,
    zIndex: 20,
  },
  historyHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  historyIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  header: {
    fontSize: 20,
  },
});

export default ChatScreen;
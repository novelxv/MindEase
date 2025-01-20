import React, { useEffect, useRef, useState } from "react";
import { ScrollView, TextInput, View, Image, Text, StyleSheet, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import FooterNavigation from "../components/Footer";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import { globalStyles } from "../styles/global";
import { ArrowDownToDot, ArrowUp } from "lucide-react-native";
import { createChatSession, sendMessage, fetchChatMessages } from "../services/chatService"; // Import chat services

const ChatDetailsScreen = ({ route, navigation }) => {
  const { session } = route.params || { session: null };
  const [currentSession, setCurrentSession] = useState(session);
  const [messages, setMessages] = useState(session?.messages || []);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    // Create a new session if no session is passed
    const initializeSession = async () => {
      if (!currentSession) {
        try {
          const newSessionId = await createChatSession("New Chat"); // Create a new chat session
          setCurrentSession({ id: newSessionId, title: "New Chat", messages: [] });
        } catch (error) {
          console.error("Error creating chat session:", error);
        }
      }
    };

    initializeSession();
  }, [currentSession]);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "" || !currentSession) return;

    setLoading(true);
    try {
      await sendMessage(currentSession.id, newMessage); // Send message via service
      const updatedMessages = await fetchChatMessages(currentSession.id); // Fetch updated messages
      setMessages(updatedMessages);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = (event) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isAtBottom = contentOffset.y + layoutMeasurement.height >= contentSize.height - 50;
    setShowScrollButton(!isAtBottom);
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/watercolor-green.png")}
        style={globalStyles.backgroundimage}
        resizeMode="cover"
      >
        <HeaderWithBackButton
          title={currentSession?.title || "New Chat"}
          onBackPress={() => navigation.goBack()}
        />
        <ScrollView
          style={styles.chatContainer}
          ref={scrollViewRef}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {messages.map((message, index) => (
            <View key={index} style={message.sender === "minnie" ? styles.minnieMessageContainer : null}>
              {message.sender === "minnie" && (
                <View style={styles.profileContainer}>
                  <Image source={require("../assets/Minnie-Profile.png")} style={styles.profileImage} />
                </View>
              )}
              <View style={styles.messageContent}>
                {message.sender === "minnie" && (
                  <Text style={[globalStyles.content, styles.senderName]}>Minnie</Text>
                )}
                <View
                  style={[
                    styles.messageBubble,
                    message.sender === "user" ? styles.userBubble : styles.otherBubble,
                  ]}
                >
                  <Text style={[globalStyles.content, styles.messageText]}>{message.message}</Text>
                  <Text style={styles.timestampText}>
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        {showScrollButton && (
          <TouchableOpacity style={styles.scrollButton} onPress={scrollToBottom}>
            <ArrowDownToDot size={20} color="#fff" />
          </TouchableOpacity>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            value={newMessage}
            onChangeText={setNewMessage}
            editable={!loading}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
            <ArrowUp size={20} color={"#000000"} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  minnieMessageContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  messageContent: {
    flex: 1,
  },
  senderName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    marginLeft: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  userBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#d1f7c4",
    borderTopRightRadius: 0,
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderTopLeftRadius: 0,
    marginLeft: 10,
  },
  messageText: {
    fontSize: 14,
    color: "#333",
  },
  timestampText: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 14,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#c4f3cf",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  scrollButton: {
    position: "absolute",
    bottom: 70,
    alignSelf: "center",
    backgroundColor: "#888",
    borderRadius: 25,
    padding: 10,
    elevation: 5,
  },
});

export default ChatDetailsScreen;
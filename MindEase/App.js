import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import JournalScreen from './src/screens/JournalScreen';
import JournalDetails from './src/screens/JournalDetails';
import ActivityScreen from './src/screens/ActivityScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import ArticleDetails from './src/screens/Articles_ArticleDetails';
import MeditationScreen from './src/screens/activity/MeditationScreen';
import SleepStoriesScreen from './src/screens/activity/SleepStoriesScreen';
import CreativeExpressionScreen from './src/screens/activity/CreativeExpressionScreen';
import CreativeExpressionScreenCanvas from './src/screens/activity/CreativeExpressionScreenCanvas';
import BreathingScreen from './src/screens/activity/BreathingScreen';
import ChatDetailsScreen from './src/screens/Chat_ChatDetailsScreen'

import { useGlobalFonts } from './src/styles/global';

import { app } from './src/services/firebaseConfig';
import { addMood, getMoods } from './src/services/firestoreService';
import { fetchHuggingFaceResponse } from './src/services/huggingFaceService';

import { MoodProvider } from './src/context/MoodContext';
import { addArticle } from './src/services/articleService';

const Stack = createStackNavigator();

const addNewArticle = async () => {
    const title = "The Science of Deep Breathing";
    const imagePath = "../assets/articles/breathing.png";
    const content = "Deep breathing, also known as diaphragmatic breathing, is a simple yet powerful technique to calm your mind and body.\n\nThis practice involves taking slow, deep breaths that fully expand your lungs and engage your diaphragm.\n\nWhen you breathe deeply, it activates your parasympathetic nervous system, which helps reduce stress and anxiety by lowering your heart rate and relaxing your muscles. It also increases oxygen flow to your brain, enhancing focus and emotional regulation.\n\nResearch shows that just a few minutes of deep breathing can improve mood, reduce cortisol levels, and even lower blood pressure. It’s a natural, accessible way to regain control during moments of overwhelm.\n\nStart small: inhale for 4 seconds, hold for 4 seconds, and exhale for 6 seconds. Repeat for a few minutes to experience the calming effects of this science-backed practice.";
    
    try {
        const articleId = await addArticle(title, imagePath, content);
        console.log("New article added with ID:", articleId);
    } catch (error) {
        console.error("Error adding article:", error);
    }
};

export default function App() {
    // console.log("Firebase initialized:", app.name);
    const fontsLoaded = useGlobalFonts();
    useEffect(() => {
        // addNewArticle();
        // TEST FIRESTORE
        // addMood("dead");
        // getMoods();
        // TEST AI
        // console.log("Fetching AI response...");
        // response = fetchHuggingFaceResponse("I'm feeling sad");
        // console.log("Response:", response);
        // TEST NOTIFICATION
        // sendReminder("Take a Break", "Time for a quick relaxation session!");
    }, []);
    
    return (
        <MoodProvider> 
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="JournalDetails" component={JournalDetails} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        <Stack.Screen name="MeditationScreen" component={MeditationScreen} />
        <Stack.Screen name="SleepStoriesScreen" component={SleepStoriesScreen} />
        <Stack.Screen name="CreativeExpressionScreen" component={CreativeExpressionScreen} />
        <Stack.Screen name="CreativeExpressionScreenCanvas" component={CreativeExpressionScreenCanvas} />
        <Stack.Screen name="BreathingScreen" component={BreathingScreen} />
        <Stack.Screen name="ChatDetailsScreen" component={ChatDetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>
        </MoodProvider>
    );
}

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },// });
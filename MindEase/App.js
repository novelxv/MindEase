import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import JournalScreen from './src/screens/JournalScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import ArticleScreen from './src/screens/ArticleScreen';
import ArticleDetails from './src/screens/Articles_ArticleDetails';

import { addMood, getMoods } from './src/services/firestoreService';
import { fetchAIResponse } from './src/services/openAIService';

const Stack = createStackNavigator();

export default function App() {
    useEffect(() => {
        // addMood("dead");
        getMoods();
        // fetchAIResponse("Hello, how can I improve my mood today?")
        //     .then((response) => console.log("AI Response:", response))
        //     .catch((error) => console.error("Error:", error));
    }, []);
    
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Journal" component={JournalScreen} />
        <Stack.Screen name="Activity" component={ActivityScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
        <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        </Stack.Navigator>
        </NavigationContainer>
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
//   },
// });

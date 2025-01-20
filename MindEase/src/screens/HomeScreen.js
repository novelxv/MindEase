import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    ImageBackground,
} from "react-native";
import FooterNavigation from "../components/Footer";
import MoodRatingModal from "../components/MoodRatingModal";
import MoodRatingCard from "../components/MoodRatingCard";
import QuoteCard from "../components/QuoteCard";
import { useGlobalFonts, globalStyles } from "../styles/global";
import Calendar from "../components/Calendar";
import { useMood } from "../context/MoodContext";
import { getTodayMood } from "../services/moodService";
import { getAllActivityRecommendations } from "../services/homeService";

const HomeScreen = () => {
    const [moodModalVisible, setMoodModalVisible] = useState(false);
    const [todayMood, setTodayMood] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState(
        require("../assets/watercolor-blue.png") // Default background
    );
    const [otherActivities, setOtherActivities] = useState([
        "Read 10 pages of a self-help or motivational book",
        "Go for a 1-mile morning run",
        "Write down 3 things you're grateful for",
        "Listen to your favorite upbeat music playlist",
    ]);
    
    // Fetch today's mood on component mount
    useEffect(() => {
        const fetchMood = async () => {
            const moodData = await getTodayMood();
            if (moodData) {
                setTodayMood(moodData.mood);
                updateBackground(moodData.mood); // Update background based on mood
            } else {
                setMoodModalVisible(true); // Show modal if no mood data exists for today
            }
        };
        
        fetchMood();
    }, []);
    
    // Fetch activity recommendations on component mount
    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                const recommendations = await getAllActivityRecommendations();
                const recommendationTexts = recommendations.map((rec) => rec.recommendation);
                
                setOtherActivities((prevActivities) => {
                    const combinedActivities = [...prevActivities, ...recommendationTexts];
                    const uniqueActivities = Array.from(new Set(combinedActivities));
                    return uniqueActivities;
                });
            } catch (error) {
                console.error("Error fetching activity recommendations:", error);
            }
        };
        
        fetchRecommendations();
    }, []);  
    
    // Update background based on mood
    const updateBackground = (mood) => {
        if (["Terrible", "Bad", "Okay"].includes(mood)) {
            setBackgroundImage(require("../assets/watercolor-blue.png"));
        } else if (["Good", "Great"].includes(mood)) {
            setBackgroundImage(require("../assets/watercolor-yellow.png"));
        }
    };
    
    const handleMoodSelection = (selectedMood) => {
        setTodayMood(selectedMood);
        updateBackground(selectedMood);
        setMoodModalVisible(false);
    };
    
    const handleMoodUpdate = (selectedMood) => {
        setTodayMood(selectedMood);
        updateBackground(selectedMood);
    };
    
    return (
        <SafeAreaView style={globalStyles.container}>
        <ImageBackground
        source={backgroundImage}
        style={globalStyles.backgroundimage}
        resizeMode="cover"
        >
        <View style={styles.content}>
        <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        >
        <Text style={styles.greeting}>Welcome Back!</Text>
        <MoodRatingCard onMoodUpdate={handleMoodUpdate} />
        <QuoteCard />
        
        <Calendar todayMood={todayMood} />
        
        <View style={[styles.section, styles.lastSection]}>
        <Text style={styles.sectionTitle}>Recommended Activities</Text>
        <View style={styles.otherActivitiesList}>
        {otherActivities.map((activity, index) => (
            <View key={index} style={styles.activityItem}>
            <Text style={styles.activityText}>{activity}</Text>
            </View>
        ))}
        </View>
        </View>
        </ScrollView>
        </View>
        
        <MoodRatingModal
        visible={moodModalVisible}
        onClose={() => setMoodModalVisible(false)}
        onSelectMood={handleMoodSelection}
        />
        
        <FooterNavigation />
        </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    scrollViewContent: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    greeting: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    section: {
        marginBottom: 30,
    },
    lastSection: {
        marginBottom: 0,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 15,
    },
    otherActivitiesList: {
        flexDirection: "column",
    },
    activityItem: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    activityText: {
        fontSize: 16,
        color: "#333",
    },
});

export default HomeScreen;
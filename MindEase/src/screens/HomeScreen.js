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
import ActivityCard from "../components/ActivityCard";
import { useGlobalFonts, globalStyles } from "../styles/global";
import Calendar from "../components/Calendar";
import { useMood } from "../context/MoodContext";
import { getTodayMood, getMonthlyMoods } from "../services/moodService";

const HomeScreen = () => {
  const [moodModalVisible, setMoodModalVisible] = useState(false);
  const [todayMood, setTodayMood] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(
    require("../assets/watercolor-blue.png") // Default background
  );

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

  const otherActivities = [
    { title: "Sports", imageUrl: "/placeholder.svg?height=80&width=150" },
    { title: "Music", imageUrl: "/placeholder.svg?height=80&width=150" },
    { title: "Reading", imageUrl: "/placeholder.svg?height=80&width=150" },
    { title: "Cooking", imageUrl: "/placeholder.svg?height=80&width=150" },
  ];

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
              <View style={styles.otherActivitiesGrid}>
                {otherActivities.map((activity, index) => (
                  <View key={index} style={styles.gridItem}>
                    <ActivityCard
                      title={activity.title}
                      imageUrl={activity.imageUrl}
                      height={80}
                    />
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
  otherActivitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 15,
  },
});

export default HomeScreen;
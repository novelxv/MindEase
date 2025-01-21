import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getAllBanners } from "../services/homeService";

const defaultQuotes = [
  "Failure is just a step in the learning process—use it to grow stronger and smarter for the next challenge!",
  "Sometimes you just have to be a Chill Guy",
  "Rejection doesn’t define your worth—it’s just a redirection toward someone who truly values you.",
  "Every rejection brings you closer to the opportunity meant for you—keep pushing, your time will come!",
];

const QuoteCard = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const banners = await getAllBanners();
        const bannerMessages = banners.map((banner) => banner.message);

        const combinedQuotes = Array.from(
          new Set([...defaultQuotes, ...bannerMessages])
        );
        const filteredQutoes = combinedQuotes.filter((quote) => quote !== "Sorry, I couldn't process your request. Please try again later.");

        setQuotes(filteredQutoes);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setQuotes(defaultQuotes); // if error, use default quotes only
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    if (quotes.length > 0) {
      const interval = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, 4000); // Change quote every 4 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [quotes]);

  return (
    <View style={styles.card}>
      {quotes.length > 0 ? (
        <Text style={styles.quote}>{quotes[currentQuoteIndex]}</Text>
      ) : (
        <Text style={styles.quote}>Loading quotes...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#A7D1F8",
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },
  quote: {
    color: "white",
    fontSize: 16,
    lineHeight: 22,
  },
});

export default QuoteCard;
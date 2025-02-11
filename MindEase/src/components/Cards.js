import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { globalStyles } from '../styles/global';

const Card = ({ imageSource, text, navigation, targetScreen, id }) => {
  const handleCardPress = () => {
    navigation.navigate(targetScreen, { id });
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <Text style={[globalStyles.content, styles.text]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 120,
  },
  text: {
    padding: 10,
    textAlign: "center",
  },
});

export default Card;

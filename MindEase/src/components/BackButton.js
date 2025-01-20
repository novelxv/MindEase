import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { ChevronLeft } from "lucide-react-native"

const BackButton = ({ onPress, color = "#000000" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backButton}
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      <ChevronLeft size={24} color={"#000000"} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    left: 20,
    top: 20,
    zIndex: 10,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
})


export default BackButton


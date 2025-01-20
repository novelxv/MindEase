import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { globalStyles } from '../styles/global';

const HeaderWithBackButton = ({ title, onBackPress, isWhite }) => {
  return (
    <View style={[styles.headerContainer, isWhite && styles.whiteHeader]}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <ChevronLeft size={24} color={isWhite ? "#FFF" : "#333"} />
        </TouchableOpacity>
      )}
      
      <Text style={[globalStyles.header, isWhite && styles.whiteText]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
    justifyContent: 'flex-start',
  },
  backButton: {
    marginRight: 10,
  },
  whiteText: {
    color: '#FFF',
  },
});

export default HeaderWithBackButton;

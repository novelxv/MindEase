import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react';
import { useGlobalFonts, globalStyles } from '../styles/global';

const HeaderWithBackButton = ({ title, onBackPress }) => {
  return (
    <View style={styles.headerContainer}>
      {onBackPress && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <ChevronLeft size={24} color="#333" />
        </TouchableOpacity>
      )}
      
      <Text style={globalStyles.header}>{title}</Text>
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
});

export default HeaderWithBackButton;
